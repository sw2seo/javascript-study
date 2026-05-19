// 이벤트 객체는 함수의 첫 번째 매개변수로 전달됩니다
// 보통 event, e, evt 등으로 이름을 붙여요

// const button = document.querySelector('#myBtn');

// // event 객체 받기 (이름은 자유롭게!)
// button.addEventListener('click', function(event) {
//     console.log(event);  // 이벤트 객체 전체 출력
// });

// // 'e'로 줄여서 쓰는 것도 흔함
// button.addEventListener('click', function(e) {
//     console.log(e.type);    // "click"
//     console.log(e.target);  // 클릭된 요소
// });


// //이벤트 객체의 주요 속성

// // ========================================
// // 이벤트 객체 속성 탐험
// // ========================================

// document.addEventListener('click', function(e) {
//     console.log('--- 이벤트 상세 보고서 ---');

//     // 1) 이벤트 종류
//     console.log('이벤트 타입:', e.type);
//     // → "click"

//     // 2) 이벤트가 발생한 요소
//     console.log('클릭된 요소:', e.target);
//     // → <button id="myBtn">클릭</button>

//     // 3) 리스너가 등록된 요소
//     console.log('리스너 등록 요소:', e.currentTarget);
//     // → document

//     // 4) 마우스 좌표
//     console.log('화면 좌표:', e.clientX, e.clientY);
//     // → 마우스 클릭 위치 (브라우저 창 기준)

//     console.log('페이지 좌표:', e.pageX, e.pageY);
//     // → 마우스 클릭 위치 (페이지 전체 기준)

//     // 5) 타임스탬프
//     console.log('발생 시간:', e.timeStamp);
//     // → 페이지 로드 후 몇 ms 지났는지
// });

//  이벤트 객체 핵심 속성 정리

// 공통 속성:
// ├─ e.type           : 이벤트 종류 ("click", "keydown" 등)
// ├─ e.target         : 이벤트가 실제 발생한 요소 ⭐ 매우 중요! 많이씀
// ├─ e.currentTarget  : 리스너가 등록된 요소
// ├─ e.preventDefault(): 기본 동작 막기
// └─ e.stopPropagation(): 버블링 막기

// 마우스 이벤트:
// ├─ e.clientX / e.clientY : 브라우저 창 기준 좌표
// ├─ e.pageX / e.pageY     : 페이지 기준 좌표
// └─ e.button              : 어떤 마우스 버튼인지 (0:좌, 1:중, 2:우)

// 키보드 이벤트:
// ├─ e.key     : 눌린 키 ("Enter", "a" 등) ⭐ 이걸 쓰세요!
// ├─ e.code    : 물리적 키 코드 ("KeyA", "Space" 등)
// ├─ e.altKey  : Alt 키 동시에 눌렀는지 (true/false)
// ├─ e.ctrlKey : Ctrl 키 동시에 눌렀는지
// └─ e.shiftKey: Shift 키 동시에 눌렀는지


// e.target 활용방법
// ========================================
// e.target 활용 — 클릭된 요소 식별하기
// ========================================

// 여러 버튼에 각각 이벤트를 붙이는 방법 (비효율적)
//  이렇게 하면 버튼이 100개면 100번 해야 함
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', …);
// btn2.addEventListener('click', …);

//  부모에 하나만 등록하고 e.target으로 구별!
const buttonGroup = document.querySelector("#buttonGroup");

buttonGroup.addEventListener("click", function(e) {
    //클릭된 것이 버튼인지 확인
    if (e.target.tagName === "BUTTON") {
        const btnText = e.target.textContent;
        console.log(`${btnText} 버튼클릭됨`);

        const color = e.target.dataset.color;
        if (color) {
            document.body.style.backgroundColor = color;
        }
    }
})