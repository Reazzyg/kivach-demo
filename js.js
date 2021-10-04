const tooltipElem = document.querySelector('.special-comment'),
  tab = document.querySelectorAll('.special-link'),
  circle = document.querySelectorAll('.special-link-little'),
  closeButton = document.querySelector('.special-comment__close'),
  myText = document.querySelector('.special-comment__about');
let text = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7'],
  moveTo = [
    { left: 50, top: 160 },
    { left: -580, top: 110 },
    { left: -630, top: 90 },
    { left: -610, top: 40 },
    { left: 280, top: -20 },
    { left: 400, top: -20 },
    { left: 430, top: 60 },
  ];

const circleReset = (circle) => {
  circle.forEach((item, i) => {
    circle[i].style.background = '#fff';
  });
};

tab.forEach((item, index) => {
  item.addEventListener('click', () => {
    let left = Math.floor(item.offsetLeft) + moveTo[index].left,
      top = Math.floor(item.offsetTop) + moveTo[index].top;

    // Задаем параметры всплывающего окна
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
    // Задаем текст подсказки
    myText.textContent = text[index];

    tooltipElem.classList.add('special-comment-active');
    // Закрашиваем круги
    circleReset(circle);
    circle[index].style.background = 'yellow';
  });
  closeButton.addEventListener('click', () => {
    circleReset(circle);
    tooltipElem.classList.remove('special-comment-active');
  });
});

//     ////////////////
// let tooltipElem = document.querySelector('.special-comment');
// let tab = document.querySelectorAll('.special-link');
// let circle = document.querySelectorAll('.special-link-little');

// let text = [
//   'По результатам анализа составляется индивидуальное, сохраняющее здоровье меню',
//   'text2',
//   'text3',
//   'text4',
//   'text5',
//   'text6',
//   'text7',
// ];
// let moveTo = [
//   { left: 50, top: 160 },
//   { left: -580, top: 110 },
//   { left: -630, top: 90 },
//   { left: -610, top: 40 },
//   { left: 280, top: -20 },
//   { left: 400, top: -20 },
//   { left: 430, top: 60 },
// ];

// tab.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     let left = Math.floor(item.offsetLeft) + moveTo[index].left;

//     if (left < 0) left = 0; // не заезжать за левый край окна

//     let top = Math.floor(item.offsetTop) + moveTo[index].top;

//     tooltipElem.style.left = left + 'px';
//     tooltipElem.style.top = top + 'px';

//     let myText = document.querySelector('.special-comment__about');
//     myText.textContent = text[index];

//     tooltipElem.classList.add('special-comment-active');
//     circle = document.querySelectorAll('.special-link-little');

//     circle.forEach((item, i) => {
//       circle[i].style.background = '#fff';
//     });
//     circle[index].style.background = 'yellow';
//   });
//   const closeButton = document.querySelector('.special-comment__close');
//   closeButton.addEventListener('click', () => {
//     circle.forEach((item, i) => {
//       circle[i].style.background = '#fff';
//     });
//     tooltipElem.classList.remove('special-comment-active');
//   });
// });
