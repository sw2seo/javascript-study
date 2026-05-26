// ========================================
// .then() 방식 vs async/await 방식 비교
// ========================================

// 방식 1: .then() 체인
fetch('https://api.adviceslip.com/advice')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.slip.advice);
    })
    .catch(function(error) {
        console.error('에러:', error);
    });


// 방식 2: async/await (같은 동작, 더 깔끔!)
async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        console.log(data.slip.advice);
    } catch (error) {
        console.error('에러:', error);
    }
}

getAdvice();  // 함수 호출

//  async/await 해석

// async function getAdvice() {
// │
// │  async = "이 함수 안에서 await를 쓸 거야!"
// │
//     const response = await fetch('...');
//                       │
//                       await = "이 작업이 끝날 때까지 기다려!"
//                       (하지만 다른 코드의 실행을 막지는 않음)

//     const data = await response.json();
//                  │
//                  await = "JSON 변환이 끝날 때까지 기다려!"
// }

// 규칙:
// 1. await를 쓰려면 함수 앞에 async를 붙여야 함
// 2. await는 "이 Promise가 완료될 때까지 기다려"라는 뜻
// 3. try/catch로 에러 처리 (= .catch()와 같은 역할)