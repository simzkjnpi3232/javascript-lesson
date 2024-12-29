// q1
let nickname = 'じゅんじゅん';
let age = 30;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let javaScript = languages[0];
let python = languages[3];

console.log(`私の好きな言語は${javaScript}です。次は${python}を勉強してみたいです。`);

//q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// q4
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