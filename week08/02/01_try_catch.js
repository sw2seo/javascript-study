// HTTP 상태 코드 (자주 보는 것들)

// 200  : OK — 성공! 
// 201  : Created — 생성 성공!
// 400  : Bad Request — 잘못된 요청 
// 401  : Unauthorized — 인증 필요 
// 403  : Forbidden — 접근 금지 
// 404  : Not Found — 찾을 수 없음 
// 500  : Internal Server Error — 서버 오류 

//  response.ok는 상태 코드가 200~299일 때 true!

async function fetchData(url) {
    try {
        const response = await fetch(url);

        // HTTP 상태 코드 확인
        if(!response.ok) {
            // ok가 false = 서버가 에러 응답을 보냄
            throw new Error(`HTTP 에러! 상태코드: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // 네트워크 에러 또는 위에서 throw한 에러
        console.error(`데이터를 가져오는 중 에러 발생:`, error.message);
        return null;
    }
}

// 사용 예시
async function displayData() {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon');

    if (data === null) {
        //에러가 발생한 경우
        document.querySelector('#result').textContent = '데이터를 불러올 수 없습니다.';
        return;
    }

    document.querySelector('#result').textContent = data.title;
}

const btnResult = document.querySelector('#btnResult');

btnResult.addEventListener('click', displayData);