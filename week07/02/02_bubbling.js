// ========================================
// 이벤트 버블링 확인 실험
// ========================================

// const grandparent = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');

// grandparent.addEventListener('click', function() {
//     console.log(' 할아버지 클릭!');
// });

// parent.addEventListener('click', function() {
//     console.log(' 부모 클릭!');
// });

// child.addEventListener('click', function() {
//     console.log(' 자식 클릭!');
// });

// "자식" div를 클릭하면 콘솔에:
//  자식 클릭!
//  부모 클릭!
//  할아버지 클릭!
// → 자식부터 위로 "버블링"!


//  버블링 시각화

// 자식 div를 클릭했을 때:

// [자식 div 클릭!]
//        ↓ 이벤트 발생
//        ↓
// [자식의 click 핸들러 실행] ← 1번째
//        ↓ 버블링 (위로!)
// [부모의 click 핸들러 실행] ← 2번째
//        ↓ 버블링 (계속 위로!)
// [할아버지의 click 핸들러 실행] ← 3번째
//        ↓ 버블링
// [body → html → document] 까지 올라감!

//  마치 물속 거품처럼 아래에서 위로!


// 버블링을 활용한 이벤트 위임(Event Delegation)

// ========================================
// 이벤트 위임 — 버블링의 실전 활용!
// ========================================

//  상황: 리스트에 아이템이 동적으로 추가될 수 있음

// const list = document.querySelector('#todoList');
// const addBtn = document.querySelector('#addBtn');
// const input = document.querySelector('#todoInput');

// // 리스트 전체에 클릭 이벤트 하나만 등록! (이벤트 위임)
// list.addEventListener('click', function(e) {
//     // 클릭된 게 삭제 버튼인지 확인
//     if (e.target.classList.contains('delete-btn')) {
//         // 삭제 버튼의 부모(li)를 제거
//         const li = e.target.parentElement;
//         li.remove();
//         console.log('아이템 삭제!');
//     }

//     // 클릭된 게 li인지 확인 (완료 토글)
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('completed');
//     }
// });

// // 새 아이템 추가
// addBtn.addEventListener('click', function() {
//     const text = input.value.trim();
//     if (text === '') return;

//     const li = document.createElement('li');
//     li.innerHTML = `${text} <button class="delete-btn">삭제</button>`;
//     list.appendChild(li);

//     input.value = '';  // 입력 필드 초기화
// });

//  이벤트 위임이 좋은 이유

//  개별 등록 방식:
// - 아이템 100개 → 이벤트 리스너 100개
// - 새로 추가된 아이템에는 이벤트가 없음!
// - 메모리 낭비

//  이벤트 위임 방식:
// - 부모에 이벤트 리스너 1개만!
// - 새로 추가된 아이템도 자동으로 동작!
// - 메모리 효율적
// - 코드가 깔끔함

// → 이벤트 위임은 실무에서 매우 많이 쓰이는 패턴입니다!


// 버블링 막기 — stopPropagation()

// ========================================
// 버블링을 막아야 할 때
// ========================================

const outer = document.querySelector('#grandparent');
const inner = document.querySelector('#child');

outer.addEventListener('click', function() {
    console.log('바깥 div 클릭!');
    outer.style.backgroundColor = 'yellow';
});

inner.addEventListener('click', function(e) {
    console.log('안쪽 div 클릭!');
    inner.style.backgroundColor = 'pink';

    //  여기서 버블링을 막음!
    e.stopPropagation();
    // → 바깥 div의 핸들러는 실행되지 않음
});

// inner를 클릭하면:
// "안쪽 div 클릭!" 만 출력 (바깥은 실행 안 됨)

//  stopPropagation 주의사항

// - 꼭 필요할 때만 사용하세요!
// - 무분별하게 사용하면 이벤트 위임이 안 됩니다.
// - 대부분의 경우 e.target으로 분기 처리하는 게 더 좋아요.