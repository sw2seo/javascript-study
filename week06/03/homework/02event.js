// click 이벤트 - 토글 기능

const toggleBtn = document.querySelector("#toggleBtn")
const box = document.querySelector("#box")

let isActive = false;

toggleBtn.addEventListener("click", function() {
    // 상태반전 (true <-> false)
    isActive = !isActive;

    if (isActive) {
        // 활성상태로변경
        box.style.backgroundColor = "#3498db";
        box.style.color = "white";
        box.textContent = "on";
        toggleBtn.textContent = "끄기";
    }  else {
        //비활성 상태로 변경
        box.style.backgroundColor = "#ecf0f1";
        box.style.color = "#333";
        box.textContent = "off";
        toggleBtn.textContent = "켜기";
    }
});

//input 이벤트 - 실시간 미리보기

const nameInput = document.querySelector("#nameInput")
const preview = document.querySelector("#preview")

nameInput.addEventListener("input", function() {
    //this.value = 현재 입력 필드에 적힌 값
    const currentValue = nameInput.value;

    if (currentValue.length === 0) {
        preview.textContent = "이름을 입력해 주세요...";
        preview.style.color = "#999";
    } else {
        preview.textContent = `안녕하세요, ${currentValue}님!`;
        preview.style.color = "#333";
    }
});

const KeyDisplaty = document.querySelector("#keyDisplay")