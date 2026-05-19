// =====================================
// 연습문제 1
// =====================================

// console.log('1. 시작');

// setTimeout(function() {
//     console.log("2. setTimeout 1초");
// }, 1000);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log("3. fetch 완료");
//     });

// setTimeout(function() {
//     console.log("4. setTimeout 0초");
// }, 0);

// console.log("5. 끝");

//===================================
// 연습문제 2
//===================================

const pokemonInput = document.querySelector('#pokemonInput');
const pokemonSearchBtn = document.querySelector('#pokemonSearchBtn');
const pokemonInfo = document.querySelector('#pokemonInfo')

async function getAdvice() {
    const name = pokemonInput.value.trim().toLowerCase();

    // 빈 값 확인
    if (name === '') {
        pokemonInfo.innerHTML = '<p class="error-text">포켓몬 이름을 입력해 주세요!</p>';
        return;
    }

    // 로딩 상태
    pokemonInfo.innerHTML = '<p class="loading-text">포켓몬을 검색하는 중...</p>';
    pokemonSearchBtn.disabled = true; //비활성화 코드

   try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        // 404 에러 확인 (없는 포켓몬)
        if (!response.ok) {
            throw new Error('포켓몬을 찾을 수 없습니다!');
        }

        const data = await response.json();
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
    } finally {
        pokemonSearchBtn.disabled = false;
    }
}

pokemonSearchBtn.addEventListener('click', getAdvice);
