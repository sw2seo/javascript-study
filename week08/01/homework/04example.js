// ====================================
// 실습: 랜덤 명언 가져오기
// ====================================

const quoteText = document.querySelector('#quoteText');
const getQuoteBtn = document.querySelector('#getQuoteBtn');

// async/await 방식으로 명언 가져오기
async function fetchQuote() {
    // 로딩상태표시
    quoteText.textContent = '명언을 가져오는 중...';
    getQuoteBtn.disabled = true;  // 이거 쓰는 이유?
    
    try {
        // 1. API에 요청
        const response = await fetch('https://api.adviceslip.com/advice');

        // 2. JSON으로 변환
        const data = await response.json();

        // 3. 화면에 표시
        quoteText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        // 에러처리
        quoteText.textContent = "명언을 가져오지 못했습니다";
        console.error("에러:", error);
    }finally {
        // 성공이든 신패든 버튼 다시 활성화
        getQuoteBtn.disabled = false;
    }
}

// 버튼 클릭 시 명언 가져오기
getQuoteBtn.addEventListener('click', fetchQuote);