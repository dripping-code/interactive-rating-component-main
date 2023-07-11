const submitBtn = document.querySelector('.submitBtn');
const rateBtn = document.querySelectorAll('.btn');
const ratingNo = document.querySelector('.ratingNo');
const thankYou = document.querySelector('.thank-you');
const mainContainer = document.querySelector('.box-container');
const rating = document.querySelector('.rating');



submitBtn.addEventListener('click', () => {
    thankYou.classList.remove("hidden");
    mainContainer.style.display = "none";
})

ratingNo.addEventListener('click', () => {
    thankYou.classList.add("hidden");
    mainContainer.style.display = "block";
})

rateBtn.forEach((rate) => {
    rate.addEventListener('click', () =>{
        rating.innerHTML = rate.innerHTML;
    })
});