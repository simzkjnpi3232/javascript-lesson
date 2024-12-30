// Q1 変数
let nickname = 'じゅんじゅん';
let age = 30;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let javaScript = languages[0];
let python = languages[3];

console.log(`私の好きな言語は${javaScript}です。次は${python}を勉強してみたいです。`);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  sayHello: function() {
    console.log('Hello！');
  }
};

console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
let johnAge = playerList[0].age;
let bobAge = playerList[1].age;
let michaelAge = playerList[2].age;

console.log((johnAge + bobAge + michaelAge) / 3);

// Q6 関数
function sayHello() {
  console.log('Hello');
}

sayHello();

const sayWorld = function() {
  console.log('World');
}

sayWorld();

// Q7 メソッド
user.sayHello();

// Q8 引数
let calc = {
  add: function(x, y) {
    console.log(x + y);
  },
  subtract: function(x, y) {
    console.log(x - y);
  },
  multiply: function(x, y) {
    console.log(x * y);
  },
  divide: function(x, y) {
    console.log(x / y);
  }
};

calc.add(5, 2);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(10, 2);

// Q9 返り値
function remainder(x, y) {
  return console.log(x + 'を' + y + 'で割った余りは' + x % y + 'です。');
}

remainder(5, 3);

// Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);
// エラーが出力される理由は、console.log(x)が変数xをスコープの外から参照しようとしているためです。

// Q1 標準組み込みオブジェクト
let randomInteger = Math.floor(Math.random() * 10);
console.log(randomInteger);

// Q2 コールバック関数
function doFunc() {
  console.log('Hello World!');
}

setTimeout(doFunc, 3000);
