// 이벤트(Event)
// 사용자가 하는 모든 행동입니다.
// 클릭, 키보드 입력, 마우스 이동, 스크롤 등등
// addEventListener() 는 이런 이벤트가 발생했을 때
// 어떤 함수를 실행할지 정해줍니다

// 기본 문법
// 요소.addEventListener("이벤트종류", 실행할함수);

// // 예시: 버튼을 클릭하면 인사하기
// const button = document.querySelector("#add-btn");

// button.addEventListener("click", function() {
//     console.log("버튼이 클릭되었습니다!");
// });

// 이벤트 종류 예시:
// "click"    — 클릭했을 때
// "keydown"  — 키보드를 눌렀을 때
// "keyup"    — 키보드에서 손을 뗐을 때
// "input"    — 입력창에 뭔가를 입력할 때
// "submit"   — 폼을 제출할 때

// ============================================
//  To-Do List 앱
// ============================================

// --- STEP 1: 필요한 요소들 찾기 ---
// (DOM 요소를 변수에 저장해두면 나중에 편하게 쓸 수 있어요!)
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const totalCount = document.querySelector("#total-count");
const completedCounnt = document.querySelector("#completed-count");

// --- STEP 2: 할 일 추가 함수 만들기 ---

function addTodo() {
    // 1) 입력창입력시 텍스트 가져오기
    const text = todoInput.value.trim();
    // .value = input에 적힌 텍스트를 가져오는 속성
    // .trim() = 앞뒤 공백제거 ("    안녕    " -> "안녕")

    // 2) 빈 텍스타만 추가하지 않기
    if (text === "") {
        alert("할 일을 입력해주세요");
        todoInput.focus();
        return;  // 함수 종료
    }

    // 3) 세 할 일 아이템(li) 만들기
    const li =document.createElement("li");
    li.className = "todo-item";

    // 4) 텍스트 영역(span) 만들기
    const span  = document.createElement("span");
    span.className = "todo-text";
    span.textContent = text;

    // 2일 차 진도 나중에 추가한내용
    // 완료기능
    // 텍스트를 클릭하면 완료 / 미완료 토글
    span.addEventListener("click", function (){
        li.classList.toggle("completed");       // completed 클래스 토글
        updateCount();      // 개수업데이트
    });

    // 5) 삭제 버튼 만들기
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "삭제";

    //2일차 진도 나중에 추가한 내용
    // 삭제 버튼에 클릭 이벤트 추가
    deleteBtn.addEventListener("click", function(e) {
        console.log(e);
        li.remove();        // 이 li를 DOM에서 삭제
        updateCount();      // 개수 업데이트
        checkEmptyList();
        console.log("삭제됨", text);
    });

    // 6) li 안에 span과 삭제버튼 넣기
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // 7) ul(할 일 목록)에 li 추가
    todoList.appendChild(li);

    // 8) 입력창 비우기(다음 입력을 위해)
    todoInput.value = "";
    todoInput.focus();

    // 9) 개수 업데이트 (개별함수)
    updateCount();
    checkEmptyList();
    console.log("할 일 추가됨: ", text);
}

// --- STEP 3: 추가 버튼에 이벤트 연결하기 ---
// "추가 버튼이 클릭되면, addTodo 함수를 실행합니다!"
addBtn.addEventListener("click", addTodo);

// 개수를 업데이트 하는 함수 - 2일차
function updateCount() {
    //전체 할 일 개수
    const allItems = document.querySelectorAll(".todo-item");
    const total = allItems.length;

    // 완료된 할 일 개수
    const completedItem = document.querySelectorAll(".todo-item.completed");
    const completed = completedItem.length;

    //화면에 표시
    totalCount.textContent = "총" + total + "개";
    completedCounnt.textContent = "완료" + completed + "개";
}


// 엔터키를 누르면 추가하기 - 2일차
todoInput.addEventListener("keydown", function(event) {
    //event.key에 어떤 키를 눌렀는지 정보가 들어있습니다.
    if (event.key === "Enter") {
        addTodo();
    }
});

// 빈 목록 안내 메시지
function checkEmptyList() {
    const allItems = document.querySelectorAll(".todo-item");

    // 기존 빈 목록 메시지가 있으면 먼저 제거
    const existingMessage = document.querySelector(".empty-message");
    if (existingMessage) {
        existingMessage.remove();
    }

    //할 일이 0개면 안내 메시지 표시
    if (allItems.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.className = "empty-message";
        emptyMsg.textContent = "할 일이 없습니다. 새로운 할 일을 추가해보세요";
        todoList.appendChild(emptyMsg);
    }
}

checkEmptyList();
todoInput.focus();