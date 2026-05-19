let calculator = {
  // add 메서드: 두 수를 더해서 반환
  add(a, b) {
    return a + b;
  },
  // subtract 메서드: 두 수를 빼서 반환
  subtract(a, b) {
    return a - b;
  },
  // multiply 메서드: 두 수를 곱해서 반환
  multiply (a, b) {
    return a * b;
  }
  // 여기에 코드를 작성하세요
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50


let epls = [
    { title: "아스널", win: "21승", ranking: 1 },
    { title: "첼시", win: "13승", ranking: 6 },
    { title: "맨유", win: "15승", ranking: 3 },
    { title: "토트넘", win: "7승", ranking: 18 },
    { title: "맨시티", win: "19승", ranking: 2 }
];

epls.forEach((epl , index) => {
    console.log((index + 1) + "." + epl.title + " [" + epl.win + "] " + epl.ranking + "등");
});

let topRanking = epls.filter(epl => epl.ranking <= 5);
console.log(topRanking);

let title = epls.map(epl => epl.title);
console.log(title);

let topTitle = epls.filter(epl => epl.ranking <= 5)
                    .map(epl => epl.title);
console.log(topTitle);

function addItem(title, win, ranking) {
    epls.push({title: title, win: win, ranking: ranking});
    console.log(title + "추가완료! (총 " + epls.length + "개)");
}
addItem("리버풀", "15승", 5);

function getAverage() {
    let total = 0;
    epls.forEach(epl => {
        total += epl.ranking;
    })
    return total / epls.length;
}
console.log(getAverage().toFixed(1));


function findByName(name) {
    let found = epls.find(epl => epl.title === name);
    if (found) {
        console.log("검색결과 : " + found.title + "[" + found.win + "]" + found.ranking + "등");
    } else {
        console.log(name + "은(는) 목록에 없습니다");
    }
    return found;
}

console.log(findByName("첼시"));
console.log(findByName("뉴캐슬"));

function printAll () {
    console.log("=====================================");
    console.log("EPL 빅6 클럽목록 (" + epls.length + ")개");
    console.log("=====================================");
    epls.forEach((epl, index) => {
        console.log((index + 1) + "." + epl.title + " [" +  epl.win + "] " + epl.ranking + "등"
    )}
)};

console.log(printAll());