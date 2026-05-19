// todo list 앱

const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const totalCount = document.querySelector("#total-count");
const completedCounnt = document.querySelector("#completed-count");

function addTodo() {
    //입력창 입력시 텍스트 가져오기
    const text = todoInput.value.trim();

    //빈 텍스트만 추가하지 않기
if (text === "") {
    alert("할 일을 입력해주세요")
    todoInput.focus();
    return;
}

// 새 할 일 아이템(li) 만들기
const li = document.createElement("li");
li.className = "todo-item";

//텍스트 영역 만들기
const span = document.createElement("span");
span.className = "todo-text";
span.textContent = text;

//완료기능 텍스트를 클릭하면 완료 미완료 토글
span.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateCount();
});

//삭제버튼
const deleteBtn = document.createElement("button");
deleteBtn.className = "delete-btn";
deleteBtn.textContent = "삭제";

//삭제 버튼에 클릭 이벤트 추가
deleteBtn.addEventListener("click", function(e) {
    console.log(e);
    li.remove();
    updateCount();
    checkEmptyList();
    console.log("삭제됨", text);
});

//li안에 span과 삭제버튼 넣기
li.appendChild(span);
li.appendChild(deleteBtn);

// ul에 li 추가 [이걸 해야 목록에 나오네]
todoList.appendChild(li);

// 입력창 비우기
todoInput.value = "";
todoInput.focus();

// 개수 업데이트 (개별함수)
updateCount();
checkEmptyList();
console.log("할 일 추가됨 : ", text);
}

// 추가 버튼에 이벤트 연결하기
addBtn.addEventListener("click", addTodo);

//개수 업데이트 하는 함수
function updateCount() {
    //전체 할일 개수
    const allItems = document.querySelectorAll(".todo-item");
    const total = allItems.length;

    // 완료된 할 일 개수
    const completedItem = document.querySelectorAll(".todo-item.completed");
    const completed = completedItem.length;

    //화면에 표시
    totalCount.textContent = "총" + total + "개";
    completedCounnt.textContent = "완료" + completed + "개";
}

//엔터키를 누르면 추가하기
todoInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        addTodo();
    }
});

//빈 목록 안내 메시지
function checkEmptyList() {
    const allItems = document.querySelectorAll(".todo-item");

    //기존 빈 목록 메시지가 있으면 먼저 제거
    const existingMessage = document.querySelector(".empty-message");
    if (existingMessage) {
        existingMessage.remove();
    }

    // 할일이 0개면 안내 메시지 표시
    if (allItems.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.className = "empty-message";
        emptyMsg.textContent = "할 일이 없습니다. 새로운 할 일을 추가해보세요"
        todoList.appendChild(emptyMsg);
    }
}
     
checkEmptyList();
todoInput.focus();
