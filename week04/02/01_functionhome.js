// function introduce() {
//     console.log('----------');
//     console.log('이름 : 서상원');
//     console.log('목표 : javaS배우기');
//     console.log('취미 : 축구');
//     console.log('-----------')
// }

// introduce();
// console.log('');
// introduce();


// 매개변수
// function sayHello () {
//     console.log('안녕');
// }

// function sayHelloTo (name) {
//     console.log('안녕하니' + name + '야!');
// }

// sayHelloTo('길동');
// sayHelloTo('상원');

// function introduceUser(name, age) {
//     console.log("이름 :" + name);
//     console.log("나이 :" + age );
//     console.log("---------------");
// }

// introduceUser(25, "상원");
// introduceUser("축구", 55);

// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         console.log(num1 + "+" + num2 + "=" + (num1 + num2));
//     } else if (operator === "-") {
//         console.log(num1 + "-" + num2 + "=" + (num1 - num2));
//     } else if (operator === "*") {
//         console.log(num1 + "*" + num2 + "=" + (num1 * num2));
//     }
// }

// calculate(10, 3, "+");
// calculate(10, 3, "-");
// calculate(10, 3, "*");


// function addAndShow(a, b) {
//     console.log(a + b);
// }

// addAndShow(5, 3);
// 값을 저장할수없음? - 비교하기위해 쓴것임

// return
// function add(a, b) {
//     return a + b;
// }

// let result = add(3, 5);
// console.log(result);

// console.log(add(10, 20));

// let total = add(3, 5) + add(10, 20);
// console.log(total);

// return의 장점
// function checkAdult(age) {
//     if (age >= 18) {
//         return "성인입니다";
//     } 
//     return "미성년자 입니다";
// }

// console.log(checkAdult(25));
// console.log(checkAdult(15));

// function add(a, b) {
//     return a + b; 
// }
// let sum1 = add(10, 20);
// let sum2 = add(100, 200);

// console.log(sum1);
// console.log(sum2);
// console.log(add(sum1, sum2));

// function makeGreeting(name, time) {
//     if (time === "아침"){
//         return "좋은 아침이네요!" + name + "님";
//     } else if (time ===  "저녁") {
//         return "좋은 저녁이네요!" + name + "님";
//     } else
//         return "안녕하세요" + name + "님";
// }

// let message1 = makeGreeting("상원", "아침");
// let message2 = makeGreeting("구글", "저녁");
// let message3 = makeGreeting("카톡", "점심");

// console.log(message1);
// console.log(message2);
// console.log(message3);
// // 언제 ===이 3개고 언제 =이 하나인지 ===가 에러를 줄이는장점이 있음

// function getGrade(score) {
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else {
//         return "F";
//     }
// }

// let myGrade = getGrade(95);
// let friendGrade = getGrade(75);

// console.log("내 학점 :" + myGrade);
// console.log("친구 학점 :" + friendGrade);
// console.log("95점은" + getGrade(95) + "학점!");


// 연습문제
// 두 수를 받아서 큰 수를 반환하는 함수 getmax(a,b)를 만들어보세요!

// function getMax(a, b) {
//     if (a <= b) {
//         return b;
//     } else if (a >= b) {
//         return a;
//     }
// }
// console.log(getMax(10, 20));
// console.log(getMax(99, 1));
// console.log(getMax(50, 50));



//연습문제 2
// 이름(name)과 과목(subject)과 점수(score)를 받아서,
// "길동님의 수학 성적은 A입니다" 형태의 문자열을 반환하는 함수를 만들어보세요!
// (힌트: 위에서 만든 getGrade 함수를 활용해보세요)
function getGrade(score) {
    // score: 0~100 사이의 점수
    if (score >= 90) {
        return "A"; // 90점 이상이면 A
    } else if (score >= 80) {
        return "B"; // 80점 이상이면 B
    } else if (score >= 70) {
        return "C"; // 70점 이상이면 C
    } else {
        return "F"; // 70점 미만이면 F
    }
}

function getReport(name, subject, score) {
    let grade = getGrade(score);
    return `${name}의 ${subject} 성적은 ${grade} 입니다`
}


console.log(getReport("길동", "수학", 96));
// 기대 결과: "길동님의 수학 성적은 A입니다"

console.log(getReport("민수", "영어", 72));
// 기대 결과: "민수님의 영어 성적은 C입니다"