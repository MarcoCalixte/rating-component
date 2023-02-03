let ratingGroup = document.getElementById("rating-group");
let ratingBtns = document.querySelectorAll('[role="button"]');
let starsCore = 0;

let submitBtn = document.getElementById('submit-button')
let cardContent1 = document.querySelector('#feedback-box')
let cardContent2 = document.querySelector('#thank-you-box')
let selectedRating = document.getElementById('selected-rating')

submitBtn.addEventListener('click', onSubmit);

ratingBtns.forEach(function (btn) {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() { // toggle between cardsContent
    cardContent1.classList.add('hide');
    selectedRating.textContent = starsCore;
    cardContent2.classList.remove('hide');
}

function handleRatingBtnClick(event) { // handle buttons onclick
    ratingBtns.forEach(function (btn) {
        btn.classList.remove('active');
        console.log(handleRatingBtnClick)
    });

    if (event.currentTarget.classList.contains('rating-state')) { // target the rating state
        event.currentTarget.classList.add('active');
        console.log(event.currentTarget);
    } else {
        event.currentTarget.parentElement.classList.add('active')
        console.log(event.currentTarget.parentElement);
    }

    starsCore = event.target.textContent; // target the numbers
    console.log(starsCore);
    // console.log('rating btn clicked');
}

console.log(ratingBtns)