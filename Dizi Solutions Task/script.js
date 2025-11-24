const slider = document.getElementById('cardSlider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const visibleCards = 4;
const totalCards = slider.children.length;

// Clone first & last cards for infinite loop
const firstClones = [];
const lastClones = [];
for (let i = 0; i < visibleCards; i++) {
    firstClones.push(slider.children[i].cloneNode(true));
    lastClones.push(slider.children[totalCards - 1 - i].cloneNode(true));
}
lastClones.reverse().forEach(card => slider.insertBefore(card, slider.firstChild));
firstClones.forEach(card => slider.appendChild(card));

let position = -visibleCards;
slider.style.transform = `translateX(${position * 25}%)`;

function updateSlider() {
    slider.style.transition = "transform 0.6s ease";
    slider.style.transform = `translateX(${position * 25}%)`;
}

function nextSlide() {
    position--;
    updateSlider();
    if (Math.abs(position) >= totalCards + visibleCards) {
        setTimeout(() => {
            slider.style.transition = "none";
            position = -visibleCards;
            slider.style.transform = `translateX(${position * 25}%)`;
        }, 600);
    }
}

function prevSlide() {
    position++;
    updateSlider();
    if (position > -1) {
        setTimeout(() => {
            slider.style.transition = "none";
            position = -totalCards;
            slider.style.transform = `translateX(${position * 25}%)`;
        }, 600);
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 3s
setInterval(nextSlide, 5000);

// PKG

const dealTrack = document.getElementById('dealCardTrack');
const prevDealBtn = document.querySelector('.prev-deal');
const nextDealBtn = document.querySelector('.next-deal');

let dealIndex = 0;
const visibleDeals = 4;
const totalDeals = dealTrack.children.length;

// Clone cards for loop effect
const firstDealClones = [];
const lastDealClones = [];
for (let i = 0; i < visibleDeals; i++) {
    firstDealClones.push(dealTrack.children[i].cloneNode(true));
    lastDealClones.push(dealTrack.children[totalDeals - 1 - i].cloneNode(true));
}
lastDealClones.reverse().forEach(card => dealTrack.insertBefore(card, dealTrack.firstChild));
firstDealClones.forEach(card => dealTrack.appendChild(card));

let dealPos = -visibleDeals;
dealTrack.style.transform = `translateX(${dealPos * 25}%)`;

function updateDealSlider() {
    dealTrack.style.transition = "transform 0.6s ease";
    dealTrack.style.transform = `translateX(${dealPos * 25}%)`;
}

function nextDeal() {
    dealPos--;
    updateDealSlider();
    if (Math.abs(dealPos) >= totalDeals + visibleDeals) {
        setTimeout(() => {
            dealTrack.style.transition = "none";
            dealPos = -visibleDeals;
            dealTrack.style.transform = `translateX(${dealPos * 25}%)`;
        }, 600);
    }
}

function prevDeal() {
    dealPos++;
    updateDealSlider();
    if (dealPos > -1) {
        setTimeout(() => {
            dealTrack.style.transition = "none";
            dealPos = -totalDeals;
            dealTrack.style.transform = `translateX(${dealPos * 25}%)`;
        }, 600);
    }
}

nextDealBtn.addEventListener('click', nextDeal);
prevDealBtn.addEventListener('click', prevDeal);

// Auto slide
setInterval(nextDeal, 4500);


// Popular destinations


const dealTrack2 = document.getElementById('dealCardTrack2');
const prevDealBtn2 = document.querySelector('.prev-deal2');
const nextDealBtn2 = document.querySelector('.next-deal2');

let visibleDeals2 = 4;
let totalDeals2 = dealTrack2.children.length;

// Clone first and last slides (with correct order)
const firstClones2 = [];
const lastClones2 = [];
for (let i = 0; i < visibleDeals2; i++) {
    let firstClone = dealTrack2.children[i].cloneNode(true);
    let lastClone = dealTrack2.children[totalDeals2 - 1 - i].cloneNode(true);
    firstClones2.push(firstClone);
    lastClones2.unshift(lastClone); // maintain order
}
firstClones2.forEach(clone => dealTrack2.appendChild(clone));
lastClones2.forEach(clone => dealTrack2.insertBefore(clone, dealTrack2.firstChild));

let dealPos2 = -visibleDeals2;
dealTrack2.style.transform = `translateX(${dealPos2 * 25}%)`;

function moveDealSlider2() {
    dealTrack2.style.transition = "transform 0.6s ease";
    dealTrack2.style.transform = `translateX(${dealPos2 * 25}%)`;
}

function nextDeal2() {
    dealPos2--;
    moveDealSlider2();

    if (Math.abs(dealPos2) === totalDeals2 + visibleDeals2) {
        setTimeout(() => {
            dealTrack2.style.transition = "none";
            dealPos2 = -visibleDeals2;
            dealTrack2.style.transform = `translateX(${dealPos2 * 25}%)`;
        }, 600);
    }
}

function prevDeal2() {
    dealPos2++;
    moveDealSlider2();

    if (dealPos2 === 0) {
        setTimeout(() => {
            dealTrack2.style.transition = "none";
            dealPos2 = -totalDeals2;
            dealTrack2.style.transform = `translateX(${dealPos2 * 25}%)`;
        }, 600);
    }
}

nextDealBtn2.addEventListener('click', nextDeal2);
prevDealBtn2.addEventListener('click', prevDeal2);

// Auto Slide
setInterval(nextDeal2, 4390);

// Trip

const holidayTrack = document.getElementById('holidayCardTrack');
const prevHolidayBtn = document.querySelector('.prev-holiday');
const nextHolidayBtn = document.querySelector('.next-holiday');

let holidayVisible = 4;
let holidayTotal = holidayTrack.children.length;

// Clone first and last slides
const firstSlides = [];
const lastSlides = [];
for (let i = 0; i < holidayVisible; i++) {
    let firstClone = holidayTrack.children[i].cloneNode(true);
    let lastClone = holidayTrack.children[holidayTotal - 1 - i].cloneNode(true);
    firstSlides.push(firstClone);
    lastSlides.unshift(lastClone); // maintain order
}
firstSlides.forEach(clone => holidayTrack.appendChild(clone));
lastSlides.forEach(clone => holidayTrack.insertBefore(clone, holidayTrack.firstChild));

let holidayPos = -holidayVisible;
holidayTrack.style.transform = `translateX(${holidayPos * 25}%)`;

function moveHolidaySlider() {
    holidayTrack.style.transition = "transform 0.6s ease";
    holidayTrack.style.transform = `translateX(${holidayPos * 25}%)`;
}

function nextHoliday() {
    holidayPos--;
    moveHolidaySlider();

    if (Math.abs(holidayPos) === holidayTotal + holidayVisible) {
        setTimeout(() => {
            holidayTrack.style.transition = "none";
            holidayPos = -holidayVisible;
            holidayTrack.style.transform = `translateX(${holidayPos * 25}%)`;
        }, 600);
    }
}

function prevHoliday() {
    holidayPos++;
    moveHolidaySlider();

    if (holidayPos === 0) {
        setTimeout(() => {
            holidayTrack.style.transition = "none";
            holidayPos = -holidayTotal;
            holidayTrack.style.transform = `translateX(${holidayPos * 25}%)`;
        }, 600);
    }
}

nextHolidayBtn.addEventListener('click', nextHoliday);
prevHolidayBtn.addEventListener('click', prevHoliday);

// Auto Slide
setInterval(nextHoliday, 4900);

// For search box

// Array of example placeholders
window.onload = function () {
    const staticText = "Search ";  // constant part
    const words = ["Kashmir Tour Packages", "Kashmir Family Tour Packages", "Kashmir Honeymoon Tour Packages", "Kashmir Group Tour Packages", "Leh Ladakh Tour Packages"];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const searchBox = document.getElementById("searchBox");

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            // erase letters from dynamic word
            searchBox.setAttribute("placeholder", staticText + currentWord.substring(0, charIndex--));
            if (charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // move to next word
            }
        } else {
            // type letters
            searchBox.setAttribute("placeholder", staticText + currentWord.substring(0, charIndex++));
            if (charIndex > currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200); // pause before deleting
                return;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100); // speed
    }

    typeEffect(); // start animation
}

// For Enquiry Form

// Get modal elements
const modal = document.getElementById("enquiryModal");
const openBtns = document.querySelectorAll(".openModalBtn");
const closeBtn = document.querySelector(".close");

// Loop through all "Connect with Expert" buttons
openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

// Close modal on "X"
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};
