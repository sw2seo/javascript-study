// console.log(5 === 5);
// console.log(5 === '5');
// console.log(5 === false);

// console.log(5 == '5');
// console.log(0 == false);
// console.log('' == false);

// console.log(4 === 3);
// console.log('안녕' === '안녕');
// console.log('반갑' === '안녕');

// console.log(5 !== 3);
// console.log(5 !== 5);

// let age = 25;
// let hasLicense = true;
// // 나이가 18 이상 그리고 면허가 있으면 -> 운전가능
// console.log(age >=18 && hasLicense);

// let age2 = 16;
// console.log(age2 >= 18 && hasLicense);

// let hasCash = false;
// let hasCard = true;

// // 현금이 있거나 또는 카드가 있으면 결제 가능

// console.log(hasCard || hasCash);

// let isRaining = true;
// console.log(!isRaining);


// let age = 20;
// let isMember = true;
// let hasTicket = false;

// console.log(age >= 18 && isMember);
// console.log(age < 18 || hasTicket);
// console.log(!age >= 18);

// let score = 85;
// console.log(score >= 80 && score <= 100);
// console.log(score <= score <= 100);

// let attendance = 95;
// console.log(attendance >= 90 || score >= 90);

// let temperature = 35;

// if (temperature >= 30) {
//     console.log('오늘은 정말 덥네요');
//     console.log('물을 많이 마시세요');

// }

// let temperature2 = 20;
// if (temperature2 >= 30) {
//     console.log('이 메세지는 출력되지 않습니다');
// }

// let age = 16;

// if (age >= 18) {
//     console.log('성인입니다. 입장 가능합니다.');
// } else {
//     console.log('미성년자 입니다. 입장 불가능합니다.');
// }

// let number = 7;
// if (number % 2 === 0) {
//     console.log(`${number}은(는) 짝수입니다.`);
// } else {
//     console.log(`${number}은(는) 홀수입니다. `);
// }


// let score = 85;

// if (score >= 90) {
//     console.log('A등급입니다. 훌륭합니다!');
// } else if (score >= 80) {
//     console.log('B등급입니다. 잘했습니다!');
// } else if (score >= 70) {
//     console.log('C등급입니다. 조금 더 노력해봐요.');
// } else if (score >= 60) {
//     console.log('D등급입니다. 분발해주세요');
// } else {
//     console.log('F등급입니다. 다시 한 번 도전해봐요')
// }

let hasTicket = true;
let age = 20;

if (!hasTicket) {
    console.log('티켓 확인 완료');
if (age >= 18) {
    console.log('성인 좌석으로 안내합니다 ');
} else {
    console.log('청소년 좌석으로 안내합니다');
}
} else {
    console.log('티켓이 없습니다. 매표소를 이용해주세요');
}