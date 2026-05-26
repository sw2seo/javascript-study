// 1. DOM 요소 선택
const searchForm = document.querySelector('#searchForm');
const cityInput = document.querySelector('#cityInput');
const searchBtn = document.querySelector('#searchBtn');
const loadingDiv = document.querySelector('#loading');
const errorDiv = document.querySelector('#errorMsg');
const errorText = document.querySelector('#errorText');
const weatherCard = document.querySelector('#weatherCard');
const cityNameEl = document.querySelector('#cityName');
const weatherIcon = document.querySelector('#weatherIcon');
const temperatureEl = document.querySelector('#temperature');
const weatherDescEl = document.querySelector('#weatherDesc');
const windSpeedEl = document.querySelector('#windSpeed');
const windDirectionEl = document.querySelector('#windDirection');
const updateTimeEl = document.querySelector('#updateTime');
const historyList = document.querySelector('#historyList');

// 2. 검색기록 저장배열
let searchHistory = [];

// 3. 날씨 코드 매핑

function getWeatherInfo(code) {
    const weatherMap = {
        0: { desc: '맑음',  icon:'🌞'},
        1: { desc: '대체로 맑음',  icon: '☀️'},
        2: { desc: '구름 조금',  icon:'🌤️'},
        3: { desc: '흐림', icon:'🌥️'},
        45: { desc: '안개', icon: '😶‍🌫️'},
        48: { desc: '안개', icon: '☁️'},
        51: { desc: '가벼운 이슬비', icon: '🌦️'},
        53: { desc: '이슬비', icon: '🌧️'},
        55: { desc: '짙은 이슬비', icon: ''},
        61: { desc: '가벼운 비',       icon: '' },
        63: { desc: '비',             icon: '' },
        65: { desc: '폭우',           icon: '' },
        71: { desc: '가벼운 눈',       icon: '' },
        73: { desc: '눈',             icon: '' },
        75: { desc: '폭설',           icon: '' },
        77: { desc: '싸락눈',         icon: '' },
        80: { desc: '가벼운 소나기',   icon: '' },
        81: { desc: '소나기',         icon: '' },
        82: { desc: '강한 소나기',     icon: '' },
        85: { desc: '가벼운 눈소나기', icon: '' },
        86: { desc: '눈소나기',       icon: '' },
        95: { desc: '뇌우',           icon: '' },
        96: { desc: '우박 동반 뇌우',  icon: '' },
        99: { desc: '강한 우박 뇌우',  icon: '' }

    };

    // 매핑에 있으면 반환, 없으면 기본값
    return weatherMap[code] || {desc: '알 수 없음', icon: '❓'};
}

// 4. UI 상태 관리 함수

// 로딩 표시
function showLoading() {
    loadingDiv.classList.remove('hidden');
    weatherCard.classList.add('hidden');
    errorDiv.classList.add('hidden');
    searchBtn.disabled = true;
}

// 로딩 숨기기
function hideLoading() {
    loadingDiv.classList.add('hidden');
    searchBtn.disabled = false;
}

// 에러 표시
function showError(message) {
    hideLoading();
    errorDiv.classList.remove('hidden');
    errorText.textContent = message;
    weatherCard.classList.add('hidden');
}

// 날씨 카드 표시
function showWeatherCard() {
    hideLoading();
    errorDiv.classList.add('hidden');
    weatherCard.classList.remove('hidden');
}

// 5. API 호출 함수
// 5-1. 도시 이름으로 좌표 검색
async function searchCity(cityName) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=ko`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (!data.results || data.results.length === 0) {
        throw new Error(`"${cityName}" 도시를 찾을 수 없습니다. 다른이름으로 검색해보세요.`);
    }

    const city = data.results[0];
    return {
        name: city.name,
        country:city.country || '',
        latitude: city.latitude,
        longitude: city.longitude
    }
}

// 5-2. 좌표로 날씨 데이터 가져오기
async function fetchWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=Asia%2FSeoul`;
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('날씨 데이터를 가져올수 없습니다.');
    }

    const data = await response.json();
    return data.current_weather;
}

// 6. 화면에 날씨 정보 표시
function displayWeather(cityInfo, weather) {
    const weatherInfo = getWeatherInfo(weather.weathercode);

    // 각 요소에 데이터 넣기
    cityNameEl.textContent = `${cityInfo.name} (${cityInfo.country})`;
    weatherIcon.textContent = weatherInfo.icon;
    temperatureEl.textContent = `${weather.temperature}°C`;
    weatherDescEl.textContent = weatherInfo.desc;
    windSpeedEl.textContent = `${weather.windspeed} km/h`;
    windDirectionEl.textContent = `${weather.winddirection}°`;

    // 업데이트 시간 포멧
    const time = weather.time;
    const timeParts = time.split('T')[1];
    updateTimeEl.textContent = timeParts;

    // 날씨 카드 보여주기
    showWeatherCard();
}

// 7. 검색 기록 관리
function addToHistory(cityName) {
    searchHistory = searchHistory.filter(function(name) {
        return name !== cityName;
    });

    //앞에 추가
    searchHistory.unshift(cityName);

    // 최대 5개만 유지
    if (searchHistory.length > 5) {
        searchHistory.pop();
    }
    // 화면 업데이트
    renderHistory();
}

function renderHistory() {
    if (searchHistory.length === 0) {
        historyList.innerHTML = '<span class="history-empty"> 검색기록이 없습니다.</span>';
        return;
    }

    historyList.innerHTML = '';

    searchHistory.forEach(function(city) {
        const item = document.createElement('span');
        item.classList.add('history-item');
        item.textContent = city;

        // 검색기록 클릭 시 다시 검색
        item.addEventListener('click', function() {
            cityInput.value = city;
            handleSearch();
        });
        historyList.appendChild(item);
    })
}

// 8. 메인 검색 함수
async function handleSearch() {
    const cityName = cityInput.value.trim();

    // 빈값 확인
    if (cityName === '') {
        showError('도시 이름을 입력해 주세요!');
        return;
    }

    // 로딩 표시
    showLoading();

    try {
        // STEP1 : 도시 검색 → 좌표얻기
        const cityInfo = await searchCity(cityName);
        console.log('도시 정도:', cityInfo);

        // STEP2: 좌표로 날씨 데이터 가져오기
        const weather = await fetchWeather(cityInfo.latitude, cityInfo.longitude);
        console.log('날씨 데이터:', weather);

        // STEP3: 화면에 표시
        displayWeather(cityInfo, weather);

        // STEP4: 검색기록 추가
        addToHistory(cityInfo.name);
    } catch (error) {
        showError(error.message);
        console.error('검색 에러:', error);
    }
}

// 9. 이벤트 리스너 연결
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleSearch();
});