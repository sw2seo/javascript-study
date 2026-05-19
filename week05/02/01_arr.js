let prices = [10000, 1000, 50000, 2000, 25000];
let new_prices = prices.filter(price => price >= 10000);
new_prices = new_prices.map(price => price * 0.9);
console.log(new_prices);


// 메서드 체이닝
prices = [10000, 1000, 50000, 2000, 25000];
new_prices = prices //이렇게 쓰기도함
                .filter(price => price >= 10000)
                .map(price => price * 0.9);

    console.log(new_prices);