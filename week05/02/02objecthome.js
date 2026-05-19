// object (객체)

//일반 변수 선언
// let studentName = '길동';
// let studentAge = 25;
// let tudentMajor = "컴퓨터 공학과";
// let studentGPA = 3.8;
// // ...변수가 증가함

// // 객체 Object를 사용한 선언법
// let student = {
//     name: '길동',
//     age: 25,
//     major: '컴퓨터공학과',
//     gpa: 3.8
// };

// console.log(student);

// 객체의 특징
// 1. 항목 key과 값 value이 쌍으로 존재
// 2. key = 이름표 value = 실제값
// 3. "이름이 뭐에요?" -> 길동!
// 4. 배열 처럼 순서의 개념이 아닌 "이름"key 데이터를 찾는다

// 객체 생성
// 기본형태
// let person = {
//     name: '길동', //key: name, value 값 : '길동'
//     city: '서울',
//     isStudent: true
// };

// // 빈 객체 (나중에 데이터 추가)
// let emptyObj = {};

// let profile ={
//     name: '길동',
//     age: 25,
//     isStudent: true,
//     hobbies: ['축구', '독서', '운동'],
//     address: {
//         city: '서울',
//         district: '강남구'
//     }
// };
// console.log(profile);

// let person = {
//     name: '상원',
//     age: 25,
//     city: '서울'
// };

// // 방법 1: 점 표기법 - 가장많이씀
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// // 방법 2: 대괄호 표기법
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["city"]);

// // 대괄호표기법이 필요한 이유
// // 1. 키 이름이 변수에 들어있을 때
// let key = "name";
// console.log(person[key]);
// console.log(person.key);

// // 2. 키에 공백이나 특수문자가 있을 때
// let data = {
//     "full name": "홍길동", //띄어쓰기는 가능한 쓰지말것
//     "phone-number": "010-1234-5678"
// };
// console.log(data["full name"]);
// console.log(data["phone-number"]);

// //값 수정하기
// person.age = 26;
// console.log(person.age);

// //새로운 속성 추가하기
// person.hobby = "코딩";
// console.log(person);

// // 추가할때 대괄호 표기법 가능함
// person["city1"] = "경기도";
// console.log(person);

// //속성 삭제하기
// delete person.hobby;
// console.log(person);

// delete person.city1;
// console.log(person);


//연습문제
let calculator = {
  // add 메서드: 두 수를 더해서 반환
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    }
}
  // subtract 메서드: 두 수를 빼서 반환
  // multiply 메서드: 두 수를 곱해서 반환
  // 여기에 코드를 작성하세요


// 테스트
console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50


