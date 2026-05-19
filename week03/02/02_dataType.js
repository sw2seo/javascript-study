// 자료형(Data Types)
// 문자열(String) - 텍스트 데이터
// 문장열 = 글자들의 나열 = 텍스트
// 따옴표 (" " 또는 ' ')로 감싸서 사용

// let greeting = '안녕하세요';
// let empty = ""; //빈문자열도 가능

// console.log(greeting);
// console.log(empty);

// // 문자열 연결하기

// let fullName = "홍" + "길동";
// console.log(fullName);

// let intro = "제 이름은" + fullName + "입니다";
// console.log(intro);

// // 주의 숫자 + 문자열 = 문자열
// console.log("나이" + 25);
// console.log("10" + 5);

// // 문자열 기능
// let text = "Hello, JavaScript";

// console.log(text.length);

// // 대문자 변환
// console.log(text.toUpperCase());

// // 소문자 변환
// console.log(text.toLowerCase());

// // 특정 텍스트가 포함되어 있는지 확인
// console.log(text.includes("Java"));
// console.log(text.includes("Python"));

// 숫자(Number) - 숫자 데이터

// let age = 25;
// let height = 180.5;
// let temperature = -5;
// let zero = 0;

// console.log(age);
// console.log(height);
// console.log(temperature)

// console.log(10 + 3);
// console.log(10 - 3);
// console.log(10 * 3);
// console.log(10 / 3);
// console.log(10 % 3); //나눈 나머지

// console.log(8 % 2);
// // 나머지 연산(%)는 주로 이런곳에 쓰임
// // * 짝수 / 홀수 판별 (% 2의 결과가 0이면 짝수 1이면 홀수)
// // * 배수 판별(% 3의 결과가 0이면 3의 배수)


// // 변수끼리 계산하기
// let price = 15000;          // 상품 가격
// let quantity = 3;           // 수량
// let total = price * quantity; // 총액 계산
// console.log(total);         // 45000

// // 할인 적용하기
// let discount = 0.1;         // 10% 할인
// let finalPrice = total - (total * discount);
// console.log(finalPrice);    // 40500

// // 연산 후 값 업데이트
// let score = 80;
// score = score + 10;         // 점수에 10점 추가
// console.log(score);         // 90

// // 줄여 쓰기 (축약 연산자)
// score += 5;    // score = score + 5 와 같음 → 95
// score -= 3;    // score = score - 3 와 같음 → 92
// score *= 2;    // score = score * 2 와 같음 → 184
// score /= 4;    // score = score / 4 와 같음 → 46
// console.log(score); // 46

// // 1씩 증가/감소 (나중에 반복문에서 많이 씀!)
// let count = 0; 
// count++;    // count = count + 1 → 1
// count++;    // → 2
// count++;    // → 3
// console.log(count); // 3

// 전위 연산자 예제 
count = 0;
count++;    // 후위연산자 count = count + 1 → 1
console.log(count++);     // → 1 (단 해당 console.log() 함수가 마무리되고 증가함 → 2) 
console.log(count);       // → 2
console.log(++count);    // 전위연산자 (바로 증가함 → 3)
console.log(count++);    // → 4
count++;    // → 5
console.log(count); // 5

// count--;    // count = count - 1 → 2
// console.log(count); // 2

//  불리언(Boolean) — 참/거짓

// 불리언은 딱 2개의 값만 존재: true 또는 false
// true = 참 (맞다, 예)
// false = 거짓 (틀리다, 아니오)

// let isStudent = true;       // 학생인가? → 네(true)
// let isMarried = false;      // 결혼했는가? → 아니오(false)
// let isRaining = true;       // 비가 오는가? → 네(true)
// let hasLicense = false;     // 면허가 있는가? → 아니오(false)

// console.log(isStudent);     // true
// console.log(isMarried);     // false

// // 비교 연산의 결과도 불리언!
// console.log(10 > 5);        // true  (10은 5보다 크다 → 맞다)
// console.log(3 > 7);         // false (3은 7보다 크다 → 틀리다)
// console.log(5 === 5);       // true  (5는 5와 같다 → 맞다)
// console.log(5 === 3);       // false (5는 3과 같다 → 틀리다)

// // 💡 불리언은 내일 배울 "조건문"의 핵심입니다!
// // "만약 isStudent가 true이면 학생 할인 적용"
// // 이런 식으로 사용하게 될 거예요.


// // 예외적인 2가지 자료형
// // undefined : 값이 없음(미정의)
// // null : 의도적으로 비어있는 값을 부여함
// // let word;
// // let em = null;
// // console.log(word);
// // console.log(em);


// // 템플릿 리터럴(Template Literals)
// // 기존 방식: + 로 문자열 연결 (불편함)
// let name = "홍길동";
// let age = 25;

// let intro1 = "제 이름은 " + name + "이고, " + age + "살입니다.";
// console.log(intro1); // 제 이름은 홍길동이고, 25살입니다.

// // ✨ 템플릿 리터럴: 백틱(`)과 ${} 사용 (편리함!)
// let intro2 = `제 이름은 ${name}이고, ${age}살입니다.`;
// console.log(intro2); // 제 이름은 홍길동이고, 25살입니다.

// // ${} 안에 변수를 넣으면 그 값으로 바뀝니다!
// // ${변수이름} → 변수의 값으로 치환

// let product = "커피";
// let price = 4500;
// let quantity = 3;
// let total = price * quantity;

// // ❌ + 연결 방식 (읽기 어려움)
// console.log(product + " " + quantity + "잔, 총 " + total + "원입니다.");

// // ✅ 템플릿 리터럴 (읽기 쉬움!)
// console.log(`${product} ${quantity}잔, 총 ${total}원입니다.`);

// // ${} 안에서 계산도 가능!
// console.log(`총 금액: ${price * quantity}원`);
// console.log(`1인당 금액: ${total / 2}원`);

// // 여러 줄 문자열도 가능!
// let poem = `장미는 빨갛고
// 바이올렛은 파랗다
// JavaScript는 멋지고
// 프로그래밍은 재밌다`;
// console.log(poem);
// // 일반 따옴표로는 여러 줄을 쓸 수 없어요!
// // 백틱만 가능합니다!



// typeof 변수이름 → 자료형을 문자열로 알려줌

// let name = "홍길동";
// let age = 25;
// let isStudent = true;

// console.log(typeof name);        // "string"  (문자열)
// console.log(typeof age);         // "number"  (숫자)
// console.log(typeof isStudent);   // "boolean" (불리언)

// // 값을 직접 넣어도 됨
// console.log(typeof "안녕");       // "string"
// console.log(typeof 42);          // "number"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"

// //  주의! 따옴표 안의 숫자는 문자열!
// console.log(typeof 42);          // "number"   ← 숫자
// console.log(typeof "42");        // "string"   ← 문자열!

//  이건 디버깅(오류 찾기)할 때 정말 유용해요!
// "왜 계산이 안 되지?" → typeof로 확인 →
// "아, 이게 숫자가 아니라 문자열이었구나!"