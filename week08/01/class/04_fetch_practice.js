// ========================================
// Day 02 - fetch API 실습 코드
// Week 06 - JavaScript 심화 (2)
// ========================================


// ──────────────────────────────────────
// 실습 1: 비동기 실행 순서 확인
// ──────────────────────────────────────

const asyncTestBtn = document.querySelector('#asyncTestBtn');
const clearLogBtn = document.querySelector('#clearLogBtn');
const asyncLog = document.querySelector('#asyncLog');

// 로그를 화면에 출력하는 함수
function logToScreen(message) {
    const time = new Date().toLocaleTimeString('ko-KR');
    asyncLog.textContent += `[${time}] ${message}\n`;
}

asyncTestBtn.addEventListener('click', function() {
    // 로그 초기화
    asyncLog.textContent = '';

    logToScreen('1️⃣ 동기 코드: 시작!');

    // setTimeout — 2초 후 실행 (비동기)
    setTimeout(function() {
        logToScreen('4️⃣ setTimeout(2초): 2초가 지났습니다!');
    }, 2000);

    // setTimeout — 0초 후 실행 (비동기, 하지만 0초!)
    setTimeout(function() {
        logToScreen('3️⃣ setTimeout(0초): 0초인데 왜 나중에?');
    }, 0);

    logToScreen('2️⃣ 동기 코드: 끝!');
    logToScreen('─── 위 순서를 잘 관찰해 보세요! ───');
    logToScreen('💡 동기 코드(1,2)가 먼저, 비동기(3,4)가 나중에!');
});

clearLogBtn.addEventListener('click', function() {
    asyncLog.textContent = '콘솔 로그가 여기에 표시됩니다...';
});


// ──────────────────────────────────────
// 실습 2: 랜덤 명언 가져오기
// ──────────────────────────────────────

const quoteText = document.querySelector('#quoteText');
const getQuoteBtn = document.querySelector('#getQuoteBtn');

// async/await 방식으로 명언 가져오기
async function fetchQuote() {
    // 로딩 상태 표시
    quoteText.textContent = '명언을 가져오는 중...';
    quoteText.style.color = '#95a5a6';
    getQuoteBtn.disabled = true;

    try {
        // 1. API에 요청
        const response = await fetch('https://api.adviceslip.com/advice');

        // 2. JSON으로 변환
        const data = await response.json();

        // 3. 콘솔에서 데이터 구조 확인 (개발 습관!)
        console.log('명언 데이터:', data);

        // 4. 화면에 표시
        quoteText.textContent = `"${data.slip.advice}"`;
        quoteText.style.color = '#555';

    } catch (error) {
        // 에러 처리
        quoteText.textContent = '명언을 가져오지 못했습니다 😢';
        quoteText.style.color = '#e74c3c';
        console.error('명언 가져오기 에러:', error);
    } finally {
        // 성공이든 실패든 버튼 다시 활성화
        getQuoteBtn.disabled = false;
    }
}

// 버튼 클릭 시 명언 가져오기
getQuoteBtn.addEventListener('click', fetchQuote);


// ──────────────────────────────────────
// 실습 3: 사용자 목록 가져오기
// ──────────────────────────────────────

const userList = document.querySelector('#userList');
const loadUsersBtn = document.querySelector('#loadUsersBtn');

async function loadUsers() {
    // 로딩 상태
    userList.innerHTML = '<li class="loading-text">사용자 데이터를 불러오는 중...</li>';
    loadUsersBtn.disabled = true;

    try {
        // 1. 사용자 데이터 요청
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // 2. 데이터 확인
        console.log('사용자 데이터:', users);
        console.log('첫 번째 사용자:', users[0]);

        // 3. 화면에 목록 만들기
        userList.innerHTML = '';

        users.forEach(function(user) {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${user.name}</strong>
                <br>📧 ${user.email}
                <br>🏙️ ${user.address.city}
                <br>🏢 ${user.company.name}
            `;
            userList.appendChild(li);
        });

        // 4. 버튼 텍스트 변경
        loadUsersBtn.textContent = '다시 불러오기 🔄';

    } catch (error) {
        userList.innerHTML = '<li class="error-text">데이터를 불러오지 못했습니다.</li>';
        console.error('사용자 불러오기 에러:', error);
    } finally {
        loadUsersBtn.disabled = false;
    }
}

loadUsersBtn.addEventListener('click', loadUsers);


// ──────────────────────────────────────
// 실습 4: 서울 날씨 가져오기
// ──────────────────────────────────────

const getWeatherBtn = document.querySelector('#getWeatherBtn');
const weatherDiv = document.querySelector('#weather');

// 날씨 코드 → 한국어 설명
function getWeatherDescription(code) {
    if (code === 0) return '맑음 ☀️';
    if (code >= 1 && code <= 3) return '구름 조금 ⛅';
    if (code >= 45 && code <= 48) return '안개 🌫️';
    if (code >= 51 && code <= 67) return '비 🌧️';
    if (code >= 71 && code <= 77) return '눈 ❄️';
    if (code >= 80 && code <= 82) return '소나기 🌦️';
    if (code >= 95) return '뇌우 ⛈️';
    return '알 수 없음 🌈';
}

async function getSeoulWeather() {
    weatherDiv.textContent = '날씨 정보를 가져오는 중...';
    weatherDiv.style.opacity = '0.7';
    getWeatherBtn.disabled = true;

    try {
        // Open-Meteo API — 서울 좌표로 날씨 요청
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=126.98&current_weather=true&timezone=Asia%2FSeoul';
        const response = await fetch(url);
        const data = await response.json();

        console.log('날씨 데이터:', data);

        // 현재 날씨 정보 꺼내기
        const current = data.current_weather;
        const temp = current.temperature;
        const windSpeed = current.windspeed;
        const weatherDesc = getWeatherDescription(current.weathercode);
        const time = current.time.split('T')[1];

        // 화면에 표시
        weatherDiv.innerHTML = `
            <h3>📍 서울 현재 날씨</h3>
            <p style="font-size: 2.5rem; margin: 10px 0;">${temp}°C</p>
            <p>${weatherDesc}</p>
            <p>💨 풍속: ${windSpeed} km/h</p>
            <p>🕐 ${time} 기준</p>
        `;
        weatherDiv.style.opacity = '1';

    } catch (error) {
        weatherDiv.textContent = '날씨 정보를 가져올 수 없습니다 😢';
        weatherDiv.style.opacity = '1';
        console.error('날씨 에러:', error);
    } finally {
        getWeatherBtn.disabled = false;
    }
}

getWeatherBtn.addEventListener('click', getSeoulWeather);


// ──────────────────────────────────────
// 실습 5: 포켓몬 검색
// ──────────────────────────────────────

const pokemonInput = document.querySelector('#pokemonInput');
const pokemonSearchBtn = document.querySelector('#pokemonSearchBtn');
const pokemonInfo = document.querySelector('#pokemonInfo');

async function searchPokemon() {
    const name = pokemonInput.value.trim().toLowerCase();

    // 빈 값 확인
    if (name === '') {
        pokemonInfo.innerHTML = '<p class="error-text">포켓몬 이름을 입력해 주세요!</p>';
        return;
    }

    // 로딩 상태
    pokemonInfo.innerHTML = '<p class="loading-text">포켓몬을 검색하는 중...</p>';
    pokemonSearchBtn.disabled = true; //비활성화 코드

    //우리가 예측할수없는 에러가 발생하는 코드일때 try로 감싼다
    try {
        // PokeAPI에 요청
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        // 404 에러 확인 (없는 포켓몬)
        if (!response.ok) {
            throw new Error('포켓몬을 찾을 수 없습니다!');
        }

        const data = await response.json();
        console.log('포켓몬 데이터:', data);

        // 타입 목록 만들기
        const types = data.types.map(function(t) {
            return t.type.name;
        }).join(', ');

        // 화면에 표시
        pokemonInfo.innerHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>📏 키: ${(data.height / 10).toFixed(1)}m</p>
            <p>⚖️ 몸무게: ${(data.weight / 10).toFixed(1)}kg</p>
            <p>🏷️ 타입: ${types}</p>
            <p>🆔 도감 번호: #${data.id}</p>
        `;

    } catch (error) {
        pokemonInfo.innerHTML = `<p class="error-text">${error.message} 😢</p>`;
        console.error('포켓몬 검색 에러:', error);
    } finally { //try 문이 시작되면 꼭 마지막에 여기를 와야함
        pokemonSearchBtn.disabled = false;
    }
}

// 버튼 클릭으로 검색
pokemonSearchBtn.addEventListener('click', searchPokemon);

// Enter 키로도 검색
pokemonInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});


// ──────────────────────────────────────
// 콘솔에 안내 메시지
// ──────────────────────────────────────
console.log('🌐 Day 02 fetch API 실습이 로드되었습니다!');
console.log('각 실습 섹션의 버튼을 클릭해 보세요.');
console.log('💡 팁: Console 탭에서 API 응답 데이터를 확인해 보세요!');
