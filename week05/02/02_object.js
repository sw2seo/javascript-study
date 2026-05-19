// // Object (객체)

// // 일반 변수 선언
// let studentName = "길동";
// let studentAge = 25;
// let studentMajor = "컴퓨터 공학과";
// let studentGPA = 3.8;
// // ... 변수가 증가함

// //객체(Object)를 사용한 선언법
// let student = {
//     name: "길동",
//     age: 25,
//     major: "컴퓨터공학과",
//     gpa: 3.8
// };

// console.log(student);


// //객체의 특징
// // 1. 항목(key)과 값(value)이 쌍으로 존재
// // 2. key = 이름표, value = 실제 값
// // 3. "이름이 뭐에요?" -> 길동!
// // 4. 배열 처럼 순서의 개념이 아닌 "이름"(key) 데이터를 찾는다

// // 객체 생성
// // 기본형태
// let person = {
//     name: "길동", //key(키): name, value(값): "길동"
//     city: "서울",
//     isStudent: true
// };

// //빈 객체 (나중에 데이터 추가)
// let emptyObj = {};

// // 다양한 데이터 타입을 값으로 넣을 수 있음!
// let profile ={
//     name: "길동",
//     age: 25,
//     isStudent: true,
//     hobbies: ["코딩", "독서", "운동"],
//     address: {
//         city: "서울",
//         district: "강남구"
//     }
// };
// console.log(profile);


// let person = {
//  name: "상원",
//  age: 25,
//  city: "서울"
// };

// // ──────────────────────────────────────
// // 방법 1: 점 표기법(Dot Notation) — 가장 많이 씀!
// // ──────────────────────────────────────
// console.log(person.name); // "상원"
// console.log(person.age); // 25
// console.log(person.city); // "서울"

// // ──────────────────────────────────────
// // 방법 2: 대괄호 표기법(Bracket Notation)
// // ──────────────────────────────────────
// console.log(person["name"]); // "상원"
// console.log(person["age"]); // 25
// console.log(person["city"]); // "서울"

// // ──────────────────────────────────────
// // 대괄호 표기법이 필요한 경우
// // ──────────────────────────────────────
// // 1) 키 이름이 변수에 들어있을 때
// let key = "name";
// //console.log(person[key]); // "상원" (key 변수의 값 "name"으로 접근)
// console.log(person.key); // undefined (person에 "key"라는 키는 없음!)

// // 2) 키에 공백이나 특수문자가 있을 때
// let data = { //띄어쓰기도 가능하나 가능한 쓰지말것
//  "full name": "홍길동",
//  "phone-number": "010-1234-5678"
// };
// console.log(data["full name"]); // "홍길동"
// console.log(data["phone-number"]); // "010-1234-5678"
// // console.log(data.full name); // 에러!


// // ──────────────────────────────────────
// // 값 수정하기
// // ──────────────────────────────────────
// person.age = 26; // 나이를 26으로 변경!
// console.log(person.age); // 26


// person["age"] = 25;
// console.log(person["age"]);


// // ──────────────────────────────────────
// // 새로운 속성(property) 추가하기
// // ──────────────────────────────────────
// person.city = "서울"; // city 속성 추가!
// person.hobby = "코딩"; // hobby 속성 추가!
// console.log(person);
// // { name: "상원", age: 26, city: "서울", hobby: "코딩" }

// // 추가할때 대괄호 표기법 가능함
// person["city1"] = "경기도";
// person["hobby1"] = "운동";
// console.log(person);

// // ──────────────────────────────────────
// // 속성 삭제하기 (delete 키워드)
// // ──────────────────────────────────────
// delete person.hobby;
// console.log(person);
// // { name: "상원", age: 26, city: "서울" }

// delete person["hobby1"];
// console.log(person);


// // ──────────────────────────────────────
// // 존재하지 않는 속성에 접근하면?
// // ──────────────────────────────────────
// console.log(person.email); // undefined (없는 속성!)


// ──────────────────────────────────────
// 실습 1-1: 나의 프로필 객체 만들기
// ──────────────────────────────────────
// let myProfile = {
//  name: "홍길동",
//  age: 25,
//  job: "개발자 지망생",
//  skills: ["HTML", "CSS", "JavaScript"],
//  isStudying: true
// };

// // 프로필 출력하기
// console.log("=== 나의 프로필 ===");
// console.log("이름: " + myProfile.name);
// console.log("나이: " + myProfile.age + "세");
// console.log("직업: " + myProfile.job);
// console.log("보유 스킬: " + myProfile.skills.join(", "));
// // "보유 스킬: HTML, CSS, JavaScript"

// // 스킬 추가하기 (배열의 push!)
// myProfile.skills.push("React");
// console.log("스킬 추가 후: " + myProfile.skills.join(", "));
// // "스킬 추가 후: HTML, CSS, JavaScript, React"

// // ──────────────────────────────────────
// // 실습 1-2: 영화 정보 객체
// // ──────────────────────────────────────
// let movie = {
//  title: "인터스텔라",
//  director: "크리스토퍼 놀란",
//  year: 2014,
//  genre: ["SF", "드라마", "모험"],
//  rating: 9.2
// };

// console.log("=== 영화 정보 ===");
// console.log("제목: " + movie.title);
// console.log("감독: " + movie.director);
// console.log("개봉년도: " + movie.year + "년");
// console.log("장르: " + movie.genre.join(", "));
// console.log("평점: " + movie.rating + "/10");


// 연습 문제 1
// 좋아하는 음식점 정보를 객체로 만들고, 출력해보세요!

// restaurant 객체를 만들어보세요!
// 포함할 속성: name, type(한식/중식/양식 등), rating(별점), menu(배열)
let restaurant = {
 // 여기에 코드를 작성하세요
    name: "momstouch",
    type: "양식",
    rating: 4.5,
    menu: ["싸이버거", "불닭싸이버거"]
};

console.log("맛있는집 (" + restaurant.type + ") - 별점: " + restaurant.rating);
console.log("대표 메뉴: " + restaurant.menu.join(", "));
// 출력 예시:
// "맛있는 집 (한식) - 별점: 4.5"
// "대표 메뉴: 김치찌개, 된장찌개, 비빔밥"

// 보너스 : 메뉴추가
restaurant.menu.push("deepcheeze");
console.log(restaurant.menu.join(", "));

//보너스 : 주소 속성 추가
restaurant.address = "석남역";
console.log(restaurant.address);
console.log(restaurant);