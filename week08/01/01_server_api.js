// JSON (JavaScript Object Notation)
// fetch

const user = {
    name: "홍길동",
    age: 20,
    hobbies: ["코딩, 독서"]
};

// JSON 문자열
const jsonString = `{
    "name": "홍길동",
    "age": 20,
    "hobbies": ["코딩", "독서"]
    }`;

// 1) javascript 객체 -> JSON 문자열 (직렬화, stringify)
const person = {name: "길동", age: 20};
const jsonText = JSON.stringify(person);
console.log(jsonText);

console.log(typeof jsonText);

// 2) JSON 문자열 -> Javascript 객체 (파싱, parse) 역직렬화
const jsonData = '{"name":"길동", "age":20}';
const personObj = JSON.parse(jsonData);

console.log(personObj);
console.log(personObj.name);

// 3) 보기좋게 출력하기
console.log(JSON.stringify(person, null, 2));

//-------------------------------------------
// API 란
// API = Application Programming Interface

// 실생활 비유: 레스토랑

// [손님(우리 웹 앱)]  ← 메뉴판 → [주방(서버)]

// 1. 손님은 주방에 직접 들어갈 수 없음
// 2. 대신 "메뉴판"을 보고 주문서를 작성
// 3. 웨이터에게 주문서를 전달
// 4. 웨이터가 주방에 전달
// 5. 주방이 요리 완성 → 웨이터가 가져다줌

// 여기서:
// - 메뉴판 = API 문서 (어떤 데이터를 요청할 수 있는지)
// - 주문서 = HTTP 요청 (Request)
// - 웨이터 = fetch() 함수
// - 완성된 요리 = HTTP 응답 (Response) = JSON 데이터

// 공개 API 예시

//  무료로 쓸 수 있는 공개 API들

// 1. 랜덤 명언
//    https://api.adviceslip.com/advice
//    → 영어 명언/조언을 랜덤으로 받기

// 2. 랜덤 고양이 사진
//    https://api.thecatapi.com/v1/images/search
//    → 랜덤 고양이 이미지 URL 받기

// 3. 가짜 사용자 데이터
//    https://jsonplaceholder.typicode.com/users
//    → 테스트용 가짜 사용자 목록

// 4. 포켓몬 정보
//    https://pokeapi.co/api/v2/pokemon/pikachu
//    → 포켓몬 데이터

// 5. 날씨 정보
//    https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=126.98&current_weather=true
//    → 서울 날씨 (무료, API 키 불필요!)

// fetch 기본사용법
// fetch는 URL을 받아서 서버에 요청을 보냅니다.
fetch('https://api.adviceslip.com/advice/fgdsdda')
    .then(function(response) {
        // 1단계 : 서버에서  응답(response)이 돌아옴
        // 하지만 아직 JSON이 아님! "택배상자"를 받은 상태
        console.log("응답 도착!", response);

        // response.json()으로 JSON 데이터를 꺼냄 ("상자 개봉")
        return response.json();
    })

    .then(function(data) {
        // 2단계 : JSON 데이터를 사용할수 있음!
        console.log("데이터", data);
        console.log("명언", data.slip.advice);
    })
    .catch(function(error) {
        console.error("에러 발생:", error);
    });
    console.log("fetch 요청 보냄! (아직 응답 안 온 상태");
    
   
//  fetch의 흐름 분석

// fetch('URL')           ← 1) 서버에 요청 보냄
//     .then(response =>  ← 2) 응답이 오면 (택배 도착!)
//         response.json()← 3) JSON으로 변환 (택배 개봉!)
//     )
//     .then(data =>      ← 4) 변환된 데이터 사용!
//         console.log(data)
//     )
//     .catch(error =>    ← 5) 에러 처리
//         console.error(error)
//     );

//  이 전체 과정이 "비동기"로 동작합니다!
// fetch 아래의 코드는 응답을 기다리지 않고 바로 실행돼요.