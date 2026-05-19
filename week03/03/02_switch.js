// switch 문 기본 구조

// switch (변수) {
//     case 값1:
//         실행할 코드
//         break;
//     case 값2:
//         실행할 코드
//         break;
//     default:
//         아무 case에도 해당하지 않을 때
// }

// let day = "수요일";

// switch (day) {
//     case "월요일":
//         console.log("한 주의 시작! 화이팅!");
//         break;
//     case "화요일":
//         console.log("어제보다 나은 오늘!");
//         break;
//     case "수요일":
//         console.log("벌써 수요일! 반이나 왔어요!");
//         break;
//     case "목요일":
//         console.log("내일이면 금요일!");
//         break;
//     case "금요일":
//         console.log("불금! 주말이 기다려요!");
//         break;
//     case "토요일":
//         console.log("신나는 토요일!");
//         break;
//     case "일요일":
//         console.log("푹 쉬세요!");
//         break;
//     default:
//         console.log("올바른 요일을 입력해주세요.");
// }
// // → "벌써 수요일! 반이나 왔어요!"

// //  break를 안 쓰면 다음 case도 계속 실행됩니다!

// let fruit = "사과";

// //  break 없는 경우 (의도하지 않은 동작!)
// switch (fruit) {
//     case "사과":
//         console.log("사과를 선택하셨습니다.");
//         // break가 없어서 아래로 쭉 실행!
//     case "바나나":
//         console.log("바나나를 선택하셨습니다.");
//     case "포도":
//         console.log("포도를 선택하셨습니다.");
//     default:
//         console.log("과일이 없습니다.");
// }
// // 출력:
// // "사과를 선택하셨습니다."
// // "바나나를 선택하셨습니다."   ← 이것도 출력됨!
// // "포도를 선택하셨습니다."     ← 이것도!
// // "과일이 없습니다."           ← 이것도!

// //  break를 꼭 넣어주세요!
// switch (fruit) {
//     case "사과":
//         console.log("사과를 선택하셨습니다.");
//         break;  // 여기서 멈춤!
//     case "바나나":
//         console.log("바나나를 선택하셨습니다.");
//         break;
//     case "포도":
//         console.log("포도를 선택하셨습니다.");
//         break;
//     default:
//         console.log("과일이 없습니다.");
// }
// // 출력: "사과를 선택하셨습니다." (이것만!)

let month = 8;

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log('봄입니다.');
        break;
    case 6:
    case 7:
    case 8:
        console.log('여름입니다.');
        break;
    case 9:
    case 10:
    case 11:
        console.log('가을입니다.');
        break;
    case 12: 
    case 1:
    case 2:
        console.log('겨울입니다.');
        break;
    default:
        console.log('1~12 사이의 월을 입력해주세요');
}