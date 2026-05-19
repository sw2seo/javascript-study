// 반복문
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}번 학생 출석!`);
// }

//  패턴2
// for (let i = 10; i >= 1; i--) {
//     console.log(`${i}`)
// }
// console.log('발사!')

//  패턴3
// for (let i = 2; i <= 20; i +=2) {
//     console.log(i);
// }

// // 패턴 4
// for (let i = 1; i <= 20; i +=2) {
//     console.log(i);
// }

// 패턴 5

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(`1부터 100까지의 합 : ${sum}`);


// 패턴 6 - 왜 안나오지??

// for (let i = 1; i < 20; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i}는 3의 배수`);
//     }
// }

// let = evenSum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 === 0) {
//         evenSum += i;
//     }
// }
// console.log(`1~30 중 짝수의 합 : ${evenSum}`);

// while (조건)
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let = i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++
// }

// 예제 1 

// let count = 5;
// while (count > 0) {
//     console.log(`${count}...`);
//     count--;
// }
// console.log('발사!');

// 예제 2 - 설명 다시듣기
// let savings = 0;
// const goal = 1000000;
// let month = 0;

// while (savings < goal) {
//     month++;
//     savings += 200000;
//     console.log(`${month}개월째: ${savings.toLocaleString()}원 모음`);
// }
// console.log(`\n ${month}개월 만에 목표 달성!`);
// console.log(`총 저축액: ${savings.toLocaleString()}원`);


// 예제 3 - 설명 더 듣기

let number = 12345;
let digits = 0;
let temp = number;

while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++
}
console.log(`${number}은(는) ${digits}자리 수 입니다`);

// break 문
// for (let i = 1; i <= 100; i++) {
//     if (i === 7){
//     console.log(`${i}을(를) 찾았습니다! 반복종료`);
//     break;
// }
// console.log(`${i}확인중...`);
// }

// // 예시 2 
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
//     if (sum > 100) {
//         console.log(`i=${i}일 때 합계가 100을 넘었습니다.`);
//         console.log(`합계: ${sum}`);
//         break;
//     }
// }

// countinue  예시 1 - 얜 왜 또 안나옴
// for (let i = 1; i <= 10; i++) {
//     if (1 % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// 예시 2
// for (let i = 1; i <= 10; i++) {
//     if (i === 4) {
//         continue;
//     }
//     console.log(`${i}층`)
// }

// 예시3 얘도 안나옴
// let total = 0;
// for (let i = 1; i <= 20; i++){
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(`1~20에서 3의 배수를 제외한 합 : ${total}`);
// }

// // 중첩 반복문
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 4; j++) {
//         console.log(`i=${i}, j=${j}`);
//     }
//     console.log('---');
// }

// let dan = 7;
// console.log(`=== ${dan} ===`);

// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} x ${i} = ${dan * i}`);
// }