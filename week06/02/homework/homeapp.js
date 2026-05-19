// todo list 앱

const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const totalCount = document.querySelector("#total-count");
const completedCounnt = document.querySelector("#completed-count");

console.log(todoInput);
console.log(addBtn);
console.log(todoList);
console.log(totalCount);
console.log(completedCounnt);
// step2. 할일 추가 함수 만들기

function addTodo() {
    // 1) 입력창 입력시 텍스트 가져오기
    const text = todoInput.value.trim();
    // .value = input에 적힌 텍스트를 가져오는 속성
    // .trim() = 앞뒤 공백제거 ("    안녕    " -> "안녕")


    // 2) 빈 텍스트만 추가하지 않기
    if (text === "") {
        alert("할 일을 입력해주세요");
        todoInput.focus();
        return;
    }

    // 3) 세 할 일 아이템 li 만들기
    const li = document.createElement("li");
    li.className = "todo-item";

    // 4) 텍스트 영역(span) 만들기
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = text;

    // 4.5) 날짜 시간표시
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeText = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);

    const timeSpan = document.createElement("span");
    timeSpan.textContent = " (" + timeText + ")";
    timeSpan.style.color = "#999"
    timeSpan.style.fontSize = "12px";
    span.appendChild(timeSpan);
    console.log(span);

    // 완료기능
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateCount();
    });

    // 5) 삭제버튼 만들기
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "삭제";

    // 삭제버튼에 클릭 이벤트
    deleteBtn.addEventListener("click", function (e) {
        console.log(e);
        li.remove();
        updateCount();
        checkEmptyList();
        console.log("삭제됨", text);
    });

    // 6) li 안에 span과 삭제버튼 넣기
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // 7) ul 할일목록에 li추가
    todoList.appendChild(li);

    // 8) 입력창 비우기 (다음입력을 위해)
    todoInput.value = "";
    todoInput.focus();

    // 9) 개수 업데이트(개별함수)
    updateCount();
    checkEmptyList();
    console.log("할 일 추가됨 : ", text);
}

// step3 추가 버튼에 이벤트 연결하기
addBtn.addEventListener("click", addTodo);

function updateCount() {
    // 전체 할 일 개수
    const allItems = document.querySelectorAll(".todo-item");
    const total = allItems.length;

    // 완료된 할 일 개수
    const completedItem = document.querySelectorAll(".todo-item.completed");
    const completed = completedItem.length;

    // 화면에 표시
    totalCount.textContent = "총" + total + "개";
    completedCounnt.textContent = "완료" + completed + "개";
}

// 엔터키를 누르면 추가하기
todoInput.addEventListener("keydown", function (event) {
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

    // 할일이 0개면 안내 메시지 표시
    if (allItems.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.className = "empty-message";
        emptyMsg.textContent = "할 일이 없습니다 새로운 할일을 추가해 보세요";
        todoList.appendChild(emptyMsg);
    }
}

checkEmptyList();
todoInput.focus();

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", function () {
    const allItems = document.querySelectorAll(".todo-item");
    allItems.forEach(function (item) {
        item.remove();
    });
    updateCount();
    checkEmptyList();
});



