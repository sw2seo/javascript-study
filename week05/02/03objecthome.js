// 객체의 메서드 + this
// 이론 중에 객체지향언어 oop 이론 안에는
// 함수 -> 메서드
// 함수기능 === 메서드기능
// 객체

// 객체 밑으로 들어가면 함수 -> 메서드 라고 불립니다
// 운동객체 하위에 들어가는 동작을 메서드 라고 부름

// 속성 = 정보
// 메소드 = 동작

// let person = {
//     name: "상원",
//     age: 25,
//     //메서드 : 객체 안에 있는함수
//     sayHello: function () {
//         console.log("안녕하세요! 저는 상원입니다.");
//     },
//     //메서드 축약표현 function 키워드 생략 가능! 이방법추천
//     introduce(name, age) {
//         console.log("이름: " + this.name);
//         console.log("나이: " + this.age + "세");
//         console.log(name, age);
//     }
// };

// person.sayHello(); // "안녕하세요! 저는 상원입니다."
// person.introduce("상원", 29);


let movies = [
    { title: "인터스텔라", genre: "SF", rating: 9.2 },
    { title: "기생충", genre: "드라마", rating: 9.5 },
    { title: "어벤져스", genre: "액션", rating: 8.5 },
    { title: "라라랜드", genre: "로맨스", rating: 8.8 },
    { title: "인셉션", genre: "SF", rating: 9.0 }
];

// 1. 데이터 배열 만들기 (최소 5개)
// 2. `forEach`로 전체 목록 출력하기
// 3. `filter`로 특정 조건에 맞는 데이터 골라내기
// 4. `map`으로 특정 속성만 추출하기

movies.forEach((movie, index) => {
    console.log((index + 1) + "." + movie.title + 
    "[" + movie.genre + "] - " + movie.rating + "점");
});

let topMovie = movies.filter(movie => movie.rating >= 9);
console.log (topMovie);

let titles = movies.map(movie => movie.title);
console.log(titles);
let topTitle = movies 
                .filter(movie => movie.rating >= 9)
                .map(movie => movie.title);

console.log(topTitle);

// 과제2
function addItem(title, genre, rating) {
    movies.push({ title: title, genre: genre, rating: rating });
    console.log(title + " 추가 완료! (총 " + movies.length + "개)");
}
addItem("타짜", "범죄", 9.5);
console.log(movies);

// 평점에 평균구하는 함수
function getAverage() {
    let total = 0;
    movies.forEach(movie => {
        total += movie.rating;
    })
    return total / movies.length;
}

console.log(getAverage().toFixed(1));

// find 조건에 맞는 첫 번째 요소를 반환
function findByName(name) {
    // find는 조건에 맞는 첫번째 요소를 반환(없으면 undifined)
    // let found = movies.filter(movie => movie.title === name);
    let found = movies.find(movie => movie.title === name);
    if (found) {
        console.log("검색 결과 : " + found.title + "[" + found.genre + "] - " + found.rating + "점");
    } else {
        console.log(name + "은(는) 목록에 없습니다");
    }
    return found;
}
console.log(findByName("물"));
console.log(findByName("타짜"));

function printAll() {
    console.log("=====================================");
    console.log("전체 영화목록 (" + movies.length + ") 개");
    console.log("=====================================");
    movies.forEach((movie, index) => {
        console.log((index + 1) + "." + movie.title + "[" + movie.genre + "] - "
         + movie.rating + "점");
    });
    //평균평점은 얼마입니다
    console.log("=====================================");
    console.log(getAverage().toFixed(1));
}
console.log(printAll());