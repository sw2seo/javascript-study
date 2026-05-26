const pokemonInput = document.querySelector('#pokemonInput');
const pokemonInfo = document.querySelector('#pokemonInfo');
const pokemonSearchBtn = document.querySelector('#pokemonSearchBtn');

async function searchPokemon() {
    const name = pokemonInput.value.trim().toLowerCase();

    // 빈 값 확인
    if (name === '') {
        pokemonInfo.innerHTML = '<p class="error-text">포켓몬 이름을 입력해 주세요!</p>';
        return;
    }

    //로딩상태
    pokemonInfo.innerHTML = '<p class="loading-text">포켓몬을 검색하는중...</p>';
    pokemonSearchBtn.disabled = true;

    //우리가 예측할 수 없는 에러가 발생하는 코드일 때 try로 감싼다
    try {
        // pokeAPI에 요청
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        //404 에러 확인
        if (!response.ok) {
            throw new Error('포켓몬을 찾을 수 없습니다!');
        }
        
        const data = await response.json();
        console.log('포켓몬 데이터:', data)

        // 타입 목록 만들기
        const types = data.types.map(function(t) {
            return t.type.name;
        }).join(', ');

        // 화면에 표시
        pokemonInfo.innerHTML = `
        <h3>${data.name.toUpperCase()}</h3>
        <img src = "${data.sprites.front_default}" alt="${data.name}">
        <p>키 : ${(data.height / 10).toFixed(1)}m</p>
        <p>몸무게 : ${(data.weight / 10).toFixed(1)}kg</p>
        <p>타입 : ${types}</p>
        <p>도감번호 : #${data.id}</p>
        `;
    } catch (error) {
        pokemonInfo.innerHTML = `<p class="error-text">${error.message}</p>`;
        console.error('포켓몬 검색 에러:', error);
    } finally { //try문이 끝나면 반드시 여기를 와야함
        pokemonSearchBtn.disabled = false;    
    }
}

pokemonSearchBtn.addEventListener('click', searchPokemon);
pokemonSearchBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});
    