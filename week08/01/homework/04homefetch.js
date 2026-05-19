// ========================================
// Day 02 - fetch API 실습 코드
// Week 06 - JavaScript 심화 (2)
// ========================================

// 실습1 : 비동기 실행 순서 확인

const asyncTestBtn = document.querySelector('#asyncTestBtn');
const clearLogBtn = document.querySelector('#clearLogBtn');
const asyncLog = document.querySelector('#asyncLog');

// 로그를 화면에 출력하는 함수
function logToScreen(message) {
    const time = new Date().toLocaleTimeString('ko-KR');
    asyncLog.textContent += `[${time}] ${message}\n`
}

asyncTestBtn.addEventListener('click', function () {
    //로그 초기화
    asyncLog.textContent = '';


    logToScreen('1️⃣ 동기 코드: 시작!');

    // setTimeout - 2초 후 실행 (비동기)
    setTimeout(function () {
        logToScreen('4️⃣ setTimeout(2초): 2초가 지났습니다!');
    }, 2000);

    // setTime - 0초 후 실행 (비동기, 하지만 0초)
    setTimeout(function () {
        logToScreen('3️⃣ setTimeout(0초): 0초인데 왜 나중에?');
    }, 0);

    logToScreen('2️⃣ 동기 코드: 끝!');
    logToScreen('─── 위 순서를 잘 관찰해 보세요! ───');
    logToScreen('💡 동기 코드(1,2)가 먼저, 비동기(3,4)가 나중에!');
});

clearLogBtn.addEventListener('click', function () {
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
    quoteText.textContent = '명언 가져오는중...';
    quoteText.style.color = '#95a5a6';
    getQuoteBtn.disabled = true;


    try {
        // 1. API에 요청
        const response = await fetch('https://api.adviceslip.com/advice');

        // 2. JSON으로 변환
        const data = await response.json();

        // 3. 콘솔에서 데이터 구조 확인 (개발 습관)
        console.log('명언데이터:', data);

        // 4. 화면에 표시
        quoteText.textContent = `"${data.slip.advice}"`;
        quoteText.style.color = '#555';
    } catch (error) {
        // 에러처리
        quoteText.textContent = '명언을 가져오지 못했습니다ㅜ';
        quoteText.style.color = '#e74c3c';
        console.error('명언 가져오기 에러:', error);
    } finally {
        getQuoteBtn.disabled = false;
    }
}

getQuoteBtn.addEventListener('click', fetchQuote);


// ──────────────────────────────────────
// 실습 3: 사용자 목록 가져오기
// ──────────────────────────────────────

const userList = document.querySelector('#userList');
const loadUsersBtn = document.querySelector('#loadUsersBtn');

async function loadUsers() {
    // 로딩상태
    userList.innerHTML = '<li class="loading-text">사용자 데이터를 불러오는 중...</li>';
    loadUsersBtn.disabled = true;

    try {
        // 1. 사용자 데이터 요청
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // 2. 데이터 확인
        console.log('사용자 데이터:', users);
        console.log('첫번째 사용자', users[0]);

        // 3. 화면에 목록 만들기
        userList.innerHTML = '';

        users.forEach(function (user) {
            const li = document.createElement('li');
            li.innerHTML = `
            <strong>${user.name}</strong>
            <br> 📧 ${user.email}
            <br>🏙️ ${user.address.city}
            <br>🏢 ${user.company.name}
            `;
            userList.appendChild(li);
        });

        loadUsersBtn.textContent = '다시 불러오기 🔄';

    } catch (error) {
        userList.innerHTML = '<li class="error-text">데이터를 불러오지 못했습니다</li>';
        console.error('사용자 불러오기 에러:', error);
    } finally {
        loadUsersBtn.disabled = false;
    }
}

loadUsersBtn.addEventListener('click', loadUsers);