// 실습A

// let score = 85;

// if (score >= 90) {
//     console.log('A 훌륭합니다!');
// } else if (score >= 80) {
//     console.log('B 잘했습니다'); 
// } else if (score >= 70) {
//     console.log('C 보통입니다');
// } else if (score >= 60) {
//     console.log('D 조금 더 노력해요');
// } else {
//     console.log('F 재시험이 필요합니다');
// }


// 실습B
let heightCm = 180;
let heightM = heightCm / 100
let wightKg = 150;
let bmi = wightKg / (heightM * heightM);


if (bmi < 18.5) {
    console.log('저체중');
} else if (bmi < 23) {
    console.log('정상');
}  else if (bmi < 25) {
    console.log('과체중');
} else {
    console.log('비만');
}

if (bmi < 18.5) {
    console.log(`BMI : ${bmi.toFixed(1)} - 저체중입니다`);
} else if (bmi < 23) {
    console.log(`BMI : ${bmi.toFixed(1)} - 정상입니다`);
}  else if (bmi < 25) {
    console.log(`BMI : ${bmi.toFixed(1)} - 과체중입니다`);
} else {
    console.log(`BMI : ${bmi.toFixed(1)} - 비만입니다`);
}


// 과제C

// let distance = 3;
// let weather = '맑음'

// if (distance <= 1 && weather === '맑음') {
//     console.log(`${distance}Km이하 + ${weather} → 걸어가세요 `);
// } else if (distance <= 1 && weather ==='비') {
//     console.log(`${distance}Km이하 + ${weather} → 택시타세요`);
// } else if (distance <= 5) {
//     console.log('자전거 또는 버스를 추천합니다!');
// } else if (distance <= 10) {
//     console.log('버스 또는 지하철을 추천합니다!');
// } else {
//     console.log('지하철 또는 택시를 추천합니다!');
// }

// // 51~53번
// if (distance <= 1) {
//     if (weather === '맑음') {
//         console.log(`${distance}Km 이하 맑음 → 걸어가세요!`);
//     } else {
//         console.log(`${distance}km 이하 비 → 택시타세요!`);
//     }
    
// } else if (distance <= 5) {
//     console.log('자전거 또는 버스를 추천합니다!');
// } else if (distance <= 10) {
//     console.log('버스 또는 지하철을 추천합니다!');
// } else {
//     console.log('지하철 또는 택시를 추천합니다!');
// }

// step 1

// let num = 0;

// if (num > 0) {
//     console.log(`${num}은(는) 양수입니다`);
// } else if (num < 0) {
//     console.log(`${num}은(는) 음수입니다`);
// } else {
//     console.log('0입니다');
// }

// if (num % 2 ===0) {
//     console.log(`${num}은 짝수입니다`);
// } else {
//     console.log(`${num}은 홀수입니다`);
// }


// step 2 

// let age = 50;
// let hour = 5;
// let price = 0;

// if (age <= 7) {
//     price = '무료';
// } else if (age < 14) {
//     price = 5000;
// } else if (age < 19) {
//     price = 8000;
// } else if (age < 65) {
//     price = 12000;
// } else if (age <= 65) {
//     price = 15000;
// }

// console.log(`나이 : ${age}세 / 시간 : ${hour}시
// 기본가격 : ${price}`)
// if (hour < 10 && price > 0) {
// price -= 2000;
// console.log("조조 할인적용!")
// }
// console.log(`최종가격 : ${price}`);


// step 3

let correctId = 'admin';
let correctPw = '1234';
let inputId = 'asd';
let inputPw = '1234';

if (correctId === inputId && correctPw === inputPw) {
    console.log("로그인 성공! 환영합니다!");
} else if (correctId === inputId && correctPw !== inputPw) {
    console.log("비밀번호가 틀립니다");
} else if (correctId !== inputId) {
    console.log("존재하지 않는 아이디입니다.")
}


// if (inputId === correctId) {
//     // 아이디가 맞는 경우 → 비밀번호도 확인
//     if (inputPw === correctPw) {
//         // 아이디도 맞고, 비밀번호도 맞음
//         console.log("로그인 성공! 환영합니다!");
//     } else {
//         // 아이디는 맞지만, 비밀번호가 틀림
//         console.log("비밀번호가 틀립니다.");
//     }
// } else {
//     // 아이디가 틀린 경우
//     console.log("존재하지 않는 아이디입니다.");
// }