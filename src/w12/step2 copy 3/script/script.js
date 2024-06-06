let elemBody = document.body;
elemBody.style.backgroundColor = '#00ff00';
let container = document.querySelector('container');
let cards = document.querySelectedAll('card');
for (let i = o; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.dataset.nth = i + 1;
  eachCard.addEventListner('click', function (evt) {
    container.dataset.selected = evt.currentTarget.dataset.nth;
  });
}
