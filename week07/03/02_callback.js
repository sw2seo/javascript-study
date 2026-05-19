// ========================================
// 콜백(Callback) = "끝나면 이 함수 실행해"
// ========================================

// 사실 우리는 이미 콜백을 써왔습니다!
const button = document.querySelector("button");
// addEventListener의 두 번째 매개변수 = 콜백!
button.addEventListener('click', function() {
    // 이 함수가 콜백! "클릭이 일어나면 나를 불러줘!"
});

// setTimeout의 첫 번째 매개변수 = 콜백!
setTimeout(function() {
    // 이 함수도 콜백! "시간이 지나면 나를 불러줘!"
}, 1000);


// 콜백의 정의:
// "다른 함수에 매개변수로 전달되어, 나중에 호출되는 함수"
// call(부르다) + back(다시) = 나중에 다시 불러줘!