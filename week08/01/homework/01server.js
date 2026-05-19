// JSON (JavaScript Object Notation)
// fetch

const user = {
    name: "홍길동",
    age: 20,
    hobbies: ["코딩, 독서"]
};

// JSON 문자열
const jsonString = `{
"name: "홍길동",
"age": 20,
"hobbies": ["코딩", "독서"]
}`;

// 1) javascript 객체 -> JSON 문자열 (직렬화, stringify)
const person = {name: "길동", age: 20};
const jsonText = JSON.stringify(person);
console.log(jsonText);

console.log(typeof jsonText);

// 2) JSON 문자열 -> Javscript 객체 (파싱, parse) 역직렬화
const jsonData = '{"name": "길동", "age": 20}';
const personObj = JSON.parse(jsonData);

console.log(personObj);
console.log(personObj.name);

// 3) 보기좋게 출력하기
console.log(JSON.stringify(person, null, 2));

fetch('https://api.adviceslip.com/advice/fgdsdda')
    .then(function(response) {
        // 1단계 : 서버에서 응답 (response)이 돌아옴
        // 하지만 아직 JSON이 아님! "택배상자를 받은 상태"
        console.log("응답 도착!", response);

        // response.json() 으로 JSON 데이터를 꺼냄 ("상자 개봉")
        return response.json();
    })

    .then(function(data) {
        // 2단계  : JSON 데이터를 사용할수 있음!
        console.log("데이터", data);
        console.log("명언", data.slip.advice);
    })
    .catch(function(error) {
        console.error("에러발생", error);
    });
    console.log("fetch 요청보냄! (아직응답 안온 상태)");