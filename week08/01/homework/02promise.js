// promise - ".then()의 정체"

// promise = "약속"

// fetch()는 Promise를 반환합니다.
// Promise = "지금은 데이터가 없지만, 나중에 줄게!" 라는 약속

// 택배비유 :
// 1. 인터넷 쇼핑 주문 = fetch() 호출
// 2. 주문 확인 문자 = Promise (약속 받음!)
// 3. 택배 배송중... = Pending (대기 상태)
// 4-a. 택배 도착! = Fulfilled (이행됨)  -> .then() 실행
// 4-b. 배송 실패! = Rejected (거부됨) -> .catch() 실행

