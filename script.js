
$(".scrolling-content").slick({
    speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
    slidesToShow: 4.5,
  	slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    swipe: false,
    draggable: false, 
    touchMove: false,  
    swipeToSlide: false, 
    focusOnSelect: false,
    centerMode: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnClick: false,
  	centerMode: true,
    focusOnSelect: true,
    responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
            ]
});


/* ------------------------------FAQ------------------------------ */

function toggleAnswer(questionNumber) {
  var answerId = 'answer' + questionNumber;
  var plusId = 'plus' + questionNumber;
  var faq_ansId = 'faq_ans' + questionNumber;
  var question_open = 'question' + questionNumber;

  var answerElement = document.getElementById(answerId);
  var plusElement = document.getElementById(plusId);
  var questionElement = document.getElementById(faq_ansId);
  var question_openElement = document.getElementById(question_open);

  // Змінюємо видимість відповіді
  if (answerElement.style.display === 'block') {
      answerElement.style.display = 'none';
      plusElement.classList.remove('open'); // Змінюємо колір при закритті
      plusElement.classList.remove('plus_open');
      questionElement.classList.remove('open');
      question_openElement.classList.remove('question_open');
  } else {
      answerElement.style.display = 'block';
      plusElement.classList.add('open'); // Змінюємо колір при відкритті
      plusElement.classList.add('plus_open');
      questionElement.classList.add('open');
      question_openElement.classList.add('question_open');
  }
}



/* ------------------------------header------------------------------ */

const depositMobileBtn = document.querySelector('.deposit__mobile-btn')
const depositCoinListBox = document.querySelector('.deposit__coin-list-box')
const depositCloseList = document.querySelector('.deposit__close-list')

window.addEventListener('click', elem => {
    if (!elem.target.classList.contains('deposit__coin-list-wrapper') && !elem.target.classList.contains('deposit__mobile-btn')){
        depositCoinListBox.classList.remove('active')
        // for lock scroll
        document.body.classList.remove('lock')
        // for lock scroll
    }
})

depositMobileBtn.addEventListener('click' , () => {
    depositCoinListBox.classList.add('active')
    // for lock scroll
    document.body.classList.add('lock')
    // for lock scroll
})
depositCloseList.addEventListener('click' , () => {
    depositCoinListBox.classList.remove('active')
    // for lock scroll
    document.body.classList.remove('lock')
    // for lock scroll
})



