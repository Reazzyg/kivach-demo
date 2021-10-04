const tooltipElem = document.querySelector('.special-link__comment'),
      tab = document.querySelectorAll('.special-link'), 
      circle = document.querySelectorAll('.special-link-little'),
      closeButton = document.querySelector('.special-link__close'),
      myText = document.querySelector('.special-link__about'),
      details = document.querySelectorAll('.special-link__span');

let text = [
  'text1', 
  'text2', 
  'text3', 
  'text4', 
  'text5', 
  'text6', 
  'text7'], 

moveTo = [
  {left: 20, top: 20},
  {left: 20, top: 20},
  {left: 20, top: 20},
  {left: 20, top: 20},
  {left: 20, top: 20},
  {left: 20, top: 20},
  {left: 20, top: 20}
];

const circleReset = (circle) => {
  circle.forEach((item, i) => {
      circle[i].style.background = '#fff';
  });
};

const toggleDetails = (detail) => {
  if (detail.textContent == 'подробнее>>'){
    detail.textContent = 'свернуть>>';
  } else {
    detail.textContent = 'подробнее>>';
  }

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
    tooltipElem.classList.add('special-link__comment-active');
    // Закрашиваем круги
    circleReset(circle);
    circle[index].style.background = 'yellow';
  });
});

closeButton.addEventListener('click', () => {
    circleReset(circle);
    tooltipElem.classList.remove('special-link__comment-active');
  });

details.forEach((item) => {
  item.addEventListener('click', () => {
  toggleDetails(item);
});
});