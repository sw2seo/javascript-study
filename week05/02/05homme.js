let calculator = {
  // add 메서드: 두 수를 더해서 반환
  add(a, b) {
    return a + b
  },
  // subtract 메서드: 두 수를 빼서 반환
  subtract(a, b) {
    return a - b
  },
  // multiply 메서드: 두 수를 곱해서 반환
  multiply(a, b) {
    return a * b
  },
  // 여기에 코드를 작성하세요
 divide(a, b) {
    if (b === 0) {
    return "0으로 나눌수 없습니다!";
    }
    return a / b
 }
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(10, 0));


let foods = [
    { title: "맥도날드", genre: "빅맥", rating: 8.9 },
    { title: "버거킹", genre: "와퍼", rating: 9.5 },
    { title: "롯데리아", genre: "새우버거", rating: 9.8 },
    { title: "맘스터치", genre: "싸이버거", rating: 9.2 },
    { title: "플랭크버거", genre: "불고기버거", rating: 8.5 }
];

foods.forEach((food, index) => {
    console.log((index + 1) +"." + food.title + "[" + food.genre + "]" + food.rating + "점");
});

let topFood = foods.filter(foods => foods.rating >= 9);

let foodTitle = foods.map(foods => foods.title);

let topTitle = foods.filter(foods => foods.rating >= 9)
                    .map(foods => foods.title);

console.log(topTitle);
// 1. `addItem(data)` -- 새 항목 추가 함수
// 2. `getAverage(key)` -- 특정 숫자 속성의 평균을 구하는 함수
// 3. `findByName(name)` -- 이름으로 검색하는 함수
// 4. `printAll()` -- 전체 목록을 보기 좋게 출력하는 함수

function addItem(title, genre, rating) {
  foods.push({title: title, genre: genre, rating: rating});
  console.log(title + "추가완료! 총" + foods.length + "개");
}
console.log(addItem("왓더버거", "새우마요버거", 9.3));


function getAverage() {
  let total = 0;
  foods.forEach(food => {
    total += food.rating;
  })
  return total / foods.length;
}

console.log(getAverage().toFixed(1));

function findByName(name) {
  let found = foods.find(food => food.title === name);
  if(found) {
    console.log("검색결과 : " + found.title + "[" + found.genre + "] - " + found.rating + "점");
  } else {
    console.log(name + "은(는) 목록에 없습니다");
  }
  return found;
}

console.log(findByName("버거킹"));
console.log(findByName("버거버거"));

function printAll() {
  foods.forEach((food, index) => {
    console.log((index + 1) + "." + food.title + "[" + food.genre + "] - " 
    + food.rating + "점")
  });
     console.log(getAverage().toFixed(1));
}
console.log(printAll());
