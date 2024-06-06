console.log('안녕하세요?');
let elemBody = document.body;
console.log(elemBody);

elemBody.style.backgroundColor = 'oklch(0.8, 0.05 , 0)'; //  " " 여야 함

let aCard = document.querySelector('.card'); // 첫번째 card 1개만 적용
//document.querySelectorAll('.card'); // 모든 card 에 다 적용
console.log(aCard);
aCard.addEventListener('click', function () {
  console.log('클릭! ');
  aCard.classList.toggle('card--state-clicked');
  console.log(aCard.classList);
  // aCard.style.backgroundColor = 'ff0000';
}); //html엘레멘트.addEventListener('이벤트종류, function() {할일});//어떤 종류의 이벤트인지. 어떤 것을 실행할지?
