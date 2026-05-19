// ========================================
// click 이벤트 — 토글(Toggle) 기능
// ========================================

const toggleBtn = document.querySelector('#toggleBtn');
const box = document.querySelector('#box');

// 상태를 추적할 변수
let isActive = false;  // 처음에는 비활성 상태

toggleBtn.addEventListener('click', function() {
    // 상태 반전 (true ↔ false)
    isActive = !isActive;

    if (isActive) {
        // 활성 상태로 변경
        box.style.backgroundColor = '#3498db';
        box.style.color = 'white';
        box.textContent = 'ON';
        toggleBtn.textContent = '끄기';
    } else {
        // 비활성 상태로 변경
        box.style.backgroundColor = '#ecf0f1';
        box.style.color = '#333';
        box.textContent = 'OFF';
        toggleBtn.textContent = '켜기';
    }
});


// ========================================
// input 이벤트 — 실시간 미리보기
// ========================================

const nameInput = document.querySelector('#nameInput');
const preview = document.querySelector('#preview');

nameInput.addEventListener('input', function() {
    // this.value = 현재 입력 필드에 적힌 값
    const currentValue = nameInput.value;

    if (currentValue.length === 0) {
        preview.textContent = '이름을 입력해 주세요...';
        preview.style.color = '#999';
    } else {
        preview.textContent = `안녕하세요, ${currentValue}님!`;
        preview.style.color = '#333';
    }
});


// ========================================
// keydown 이벤트 — 키보드 입력 감지
// ========================================

// 문서 전체에서 키보드 입력 감지
document.addEventListener('keydown', function(event) {
    // event.key = 어떤 키를 눌렀는지 알려줌
    const display = document.querySelector('#keyDisplay');

    display.textContent = `눌린 키: ${event.key}`;

    // 특정 키에 반응하기
    if (event.key === 'Enter') {
        display.style.backgroundColor = '#2ecc71';
        display.textContent = '엔터를 누르셨네요! ';
    } else if (event.key === 'Escape') {
        display.style.backgroundColor = '#e74c3c';
        display.textContent = 'ESC를 누르셨네요! ';
    } else if (event.key === ' ') {
        // 스페이스바
        display.style.backgroundColor = '#3498db';
        display.textContent = '스페이스바! ';
    }
});

// ========================================
// submit 이벤트 — 폼 전송 처리
// ========================================

const myForm = document.querySelector('#myForm');
const resultDiv = document.querySelector('#result');

myForm.addEventListener('submit', function(event) {
    //  매우 중요! 기본 동작(페이지 새로고침) 막기!
    event.preventDefault();

    // 폼 안의 입력값 가져오기
    const nameValue = document.querySelector('#formName').value;
    const emailValue = document.querySelector('#formEmail').value;

    // 유효성 검사
    if (nameValue.trim() === '') {
        resultDiv.textContent = '이름을 입력해 주세요!';
        resultDiv.style.color = 'red';
        return;  // 여기서 함수 종료
    }

    // 결과 표시
    resultDiv.textContent = `이름: ${nameValue}, 이메일: ${emailValue}`;
    resultDiv.style.color = 'green';

    // 폼 초기화
    myForm.reset();
});