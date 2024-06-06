let elemBody = document.body;
elemBody.style.backgroundColor = '#0000ff';
// let aCard = document.querySelector('.card:nth-child(2)');
// // html엘레먼트.addEventListener('이벤트종류', function () {할일});
// aCard.addEventListener('click', function () {
//   console.log('클릭!');
//   // aCard.style.backgroundColor = '#ff0000';
//   aCard.classList.toggle('card--state-clicked');
//   console.log(aCard.classList);
// });

// // document.querySelectorAll('.card');

let cards = document.querySelectorAll('.card');
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener('click', function () {
    eachCard.classList.toggle('card--state-clicked');
  });
}
