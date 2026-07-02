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
const locationBtn = document.querySelector('#locationBtn');
let currentTempC = null;
let currentDaily = null;
const deleteBtn = document.querySelector('#deleteBtn');
const darkBtn = document.querySelector('#darkBtn');
const body = document.body;
const forecast = document.querySelector('#forecast');

// 2. 검색기록 저장배열
let searchHistory = [];

// 3. 날씨 코드 매핑

function getWeatherInfo(code) {
    const weatherMap = {
        0: { desc: '맑음', icon: '🌞' },
        1: { desc: '대체로 맑음', icon: '☀️' },
        2: { desc: '구름 조금', icon: '🌤️' },
        3: { desc: '흐림', icon: '🌥️' },
        45: { desc: '안개', icon: '😶‍🌫️' },
        48: { desc: '안개', icon: '☁️' },
        51: { desc: '가벼운 이슬비', icon: '🌦️' },
        53: { desc: '이슬비', icon: '🌧️' },
        55: { desc: '짙은 이슬비', icon: '' },
        61: { desc: '가벼운 비', icon: '' },
        63: { desc: '비', icon: '' },
        65: { desc: '폭우', icon: '' },
        71: { desc: '가벼운 눈', icon: '' },
        73: { desc: '눈', icon: '' },
        75: { desc: '폭설', icon: '' },
        77: { desc: '싸락눈', icon: '' },
        80: { desc: '가벼운 소나기', icon: '' },
        81: { desc: '소나기', icon: '' },
        82: { desc: '강한 소나기', icon: '' },
        85: { desc: '가벼운 눈소나기', icon: '' },
        86: { desc: '눈소나기', icon: '' },
        95: { desc: '뇌우', icon: '' },
        96: { desc: '우박 동반 뇌우', icon: '' },
        99: { desc: '강한 우박 뇌우', icon: '' }

    };

    // 매핑에 있으면 반환, 없으면 기본값
    return weatherMap[code] || { desc: '알 수 없음', icon: '❓' };
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
        country: city.country || '',
        latitude: city.latitude,
        longitude: city.longitude
    }
}

// 5-2. 좌표로 날씨 데이터 가져오기 + A8. 7일 날씨 예보 (도전 — 다른 API 엔드포인트)
async function fetchWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=Asia%2FSeoul&daily=weathercode,temperature_2m_max,temperature_2m_min`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('날씨 데이터를 가져올수 없습니다.');
    }

    const data = await response.json();
    console.log(data);
    console.log(data.current_weather);
    return {
        current: data.current_weather,
        daily: data.daily
    };
}
//=============추가 과제==================

function setTemperatureColor(temp) {
    let gradient;

    if (temp <= 0) {
        //weatherCard.style.background = '#1915e4';
        gradient = 'linear-gradient(135deg, #adc7ee 0%, #1915e4 100%)';
    } else if (temp <= 15) {
        //weatherCard.style.background = '#19bac0';
        gradient = 'linear-gradient(135deg, #cedbf0 0%, #19bac0 100%)';
    } else if (temp <= 25) {
        //weatherCard.style.background = '#d8cc1e';
        gradient = 'linear-gradient(135deg, #ebeec3 0%, #d8cc1e 100%)';
    } else {
        //weatherCard.style.background = '#da711c';
        gradient = 'linear-gradient(135deg, #ebc791 0%, #da711c 100%)'
    }
    weatherCard.style.background = gradient;
}


// 6. 화면에 날씨 정보 표시
function displayWeather(cityInfo, weather) {
    const weatherInfo = getWeatherInfo(weather.weathercode);

    // 각 요소에 데이터 넣기
    cityNameEl.textContent = `${cityInfo.name} (${cityInfo.country})`;
    weatherIcon.textContent = weatherInfo.icon;
    currentTempC = weather.temperature;
    temperatureEl.textContent = `${weather.temperature}°C`;
    weatherDescEl.textContent = weatherInfo.desc;
    windSpeedEl.textContent = `${weather.windspeed} km/h`;
    windDirectionEl.textContent = `${weather.winddirection}°`;

    // 업데이트 시간 포멧
    const time = weather.time;
    const timeParts = time.split('T')[1];
    updateTimeEl.textContent = timeParts;

    //추가과제 실행
    setTemperatureColor(weather.temperature);

    // 날씨 카드 보여주기
    showWeatherCard();

}

//A-4 온도f로 추가

function updateTemperature() {
    const unitRadios = document.querySelectorAll('[name="unit"]');

    unitRadios.forEach(function (radio) {

        radio.addEventListener(
            'change',
            function () {
                console.log('단위변경');


                if (radio.value === 'f') {
                    const tempF = currentTempC * 9 / 5 + 32;
                    temperatureEl.textContent = `${tempF.toFixed(1)}°F`
                } else {
                    temperatureEl.textContent = `${currentTempC.toFixed(1)}°C`;
                }
                if (currentDaily) {
                displayForecast(currentDaily);
                }
            }
        );

    });

}

updateTemperature();


// 7. 검색 기록 관리
function addToHistory(cityName) {
    searchHistory = searchHistory.filter(function (name) {
        return name !== cityName;
    });


    //앞에 추가
    searchHistory.unshift(cityName);

    // 최대 5개만 유지
    if (searchHistory.length > 5) {
        searchHistory.pop();
    }
    // 화면 업데이트
    saveHistoryToStorage();
    renderHistory();
}



// A-2 연습해보기 <-아에 이해가 안감

function saveHistoryToStorage() {
    localStorage.setItem('history', JSON.stringify(searchHistory));

}

function loadHistoryFromStorage() {
    const savedHistory = localStorage.getItem('history');

    if (savedHistory) {
        searchHistory = JSON.parse(savedHistory);
    };

    // A-6. 최근 검색 도시 자동 표시 
    if (searchHistory.length >= 1) {
        cityInput.value = searchHistory[0];
            handleSearch();
};
    renderHistory();

};

loadHistoryFromStorage();

function renderHistory() {
    if (searchHistory.length === 0) {
        historyList.innerHTML = '<span class="history-empty"> 검색기록이 없습니다.</span>';
        return;
    }

    historyList.innerHTML = '';

    searchHistory.forEach(function (city) {
        const item = document.createElement('span');
        item.classList.add('history-item');
        item.textContent = city;

        //a-5 과제
        const deleteBtn2 = document.createElement('button');
        deleteBtn2.textContent = 'X';
        item.appendChild(deleteBtn2);

        deleteBtn2.addEventListener('click', function (e) {
            console.log('삭제버튼눌림');
            searchHistory = searchHistory.filter(function (name) {
                return name !== city;
            });
            console.log(e);
            e.stopPropagation();
            saveHistoryToStorage();
            renderHistory();
        });

        deleteBtn.addEventListener('click', function() {
            searchHistory = [];
            saveHistoryToStorage();
            renderHistory();
        });


        // 검색기록 클릭 시 다시 검색
        item.addEventListener('click', function () {
            cityInput.value = city;
            handleSearch();
        });
        historyList.appendChild(item);
    });
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
        currentDaily = weather.daily;

        // STEP3: 화면에 표시
        displayWeather(cityInfo, weather.current);
        displayForecast(currentDaily);

        // STEP4: 검색기록 추가
        addToHistory(cityInfo.name);
    } catch (error) {
        showError(error.message);
        console.error('검색 에러:', error);
    }
}

function displayForecast(daily) {
    forecast.innerHTML = '';

    // 현재 선택된 단위 확인
    const unit = document.querySelector('[name="unit"]:checked').value;

    daily.time.forEach(function(day, index) {

        const div = document.createElement('div');
        div.classList.add('forecast-item');

        const weatherInfo = getWeatherInfo(daily.weathercode[index]);

        let maxTemp = daily.temperature_2m_max[index];
        let minTemp = daily.temperature_2m_min[index];
        let symbol = "°C";

        // F 선택 시 변환
        if (unit === "f") {
            maxTemp = maxTemp * 9 / 5 + 32;
            minTemp = minTemp * 9 / 5 + 32;
            symbol = "°F";
        }

        div.innerHTML = `
            날짜 : ${day}<br>
            ${weatherInfo.icon}<br>
            ${weatherInfo.desc}<br>
            최고기온 : ${maxTemp.toFixed(1)}${symbol}<br>
            최저기온 : ${minTemp.toFixed(1)}${symbol}
        `;

        forecast.appendChild(div);
    });
}


// 9. 이벤트 리스너 연결
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    handleSearch();
});

// a-7다크모드추가
darkBtn.addEventListener('click', function () {
    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);

    
});

const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'true') {
    body.classList.add('dark');
    }


// A-3 현재위치 자동검색 기능
locationBtn.addEventListener('click', function () {
    console.log('버튼 클릭됨');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const weather = await fetchWeather(lat, lon);
                currentDaily = weather.daily;

                displayForecast(currentDaily);
                console.log(weather);

                const cityInfo = {
                    name: '현재 위치',
                    country: ''
                };
                displayWeather(cityInfo, weather.current);
            }
        )
    } else {
        console.log('위치를 찾을수 없습니다');
    };
});




// -----------추가 과제------------------