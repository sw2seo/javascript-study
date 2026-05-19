// ========================================
// 날씨 앱 (Weather App) - app.js
// ========================================

// --- 1. DOM 요소 선택 ---
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

// — 2. 검색 기록 저장 배열 —
let searchHistory = [];

// --- 3. 날씨 코드 매핑 ---
// Open-Meteo의 weathercode를 사람이 읽을 수 있는 텍스트로 변환

function getWeatherInfo(code) {
    // WMO Weather interpretation codes
    // 참고: https://open-meteo.com/en/docs
    const weatherMap = {
        0:  { desc: '맑음',           icon: '' },
        1:  { desc: '대체로 맑음',     icon: '' },
        2:  { desc: '구름 조금',       icon: '' },
        3:  { desc: '흐림',           icon: '' },
        45: { desc: '안개',           icon: '' },
        48: { desc: '안개',           icon: '' },
        51: { desc: '가벼운 이슬비',   icon: '' },
        53: { desc: '이슬비',         icon: '' },
        55: { desc: '짙은 이슬비',     icon: '' },
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
        99: { desc: '강한 우박 뇌우',  icon: '' },
    };

    // 매핑에 있으면 반환, 없으면 기본값
    return weatherMap[code] || { desc: '알 수 없음', icon: '' };
}

// --- 4. UI 상태 관리 함수 ---

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