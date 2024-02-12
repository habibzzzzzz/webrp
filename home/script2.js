document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    });

    function updateSlider() {
        const translateValue = -currentIndex * 100 + '%';
        sliderContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    const header = document.querySelector("header");
    const fadeSection = document.getElementById("yourSectionId");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            header.style.boxShadow = "none";
        }

        var position = fadeSection.getBoundingClientRect();

        // Jika bagian atas elemen berada di bawah bagian atas jendela, tambahkan kelas show
        if (position.top > window.innerHeight) {
            fadeSection.classList.add("show");
        } else {
            fadeSection.classList.remove("show");
        }
    });

    // Tambahkan kelas show ketika elemen muncul di bagian atas jendela
    window.addEventListener("scroll", function () {
        var position = fadeSection.getBoundingClientRect();
        if (position.top <= window.innerHeight) {
            fadeSection.classList.add("show");
        }
    });

    function showResult() {
        var resultCard = document.getElementById("result-card");
        resultCard.style.display = "block";
    }
    
    function closeCard() {
        var resultCard = document.getElementById("result-card");
        resultCard.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.slide-up');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('slide-up');
            }
        });
    }

    // Panggil fungsi handleScroll saat halaman dimuat dan saat terjadi scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    const teamSections = document.querySelectorAll(".team-section");

    function checkFade() {
        teamSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (sectionTop < window.innerHeight && sectionBottom > 0) {
                // Section is in the viewport
                section.classList.add("fade-in");
            } else {
                // Section is not in the viewport
                section.classList.remove("fade-in");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    window.addEventListener("resize", checkFade);
    checkFade(); // Check initial state on page load
});

function animateCounting(element, target, duration) {
    let start = 0;
    const increment = target / duration;
    
    function updateCount() {
        start += increment;
        element.innerText = Math.floor(start);

        if (start < target) {
            requestAnimationFrame(updateCount);
        } else {
            element.innerText = target; // Ensure final value is accurate
        }
    }

    updateCount();
}

// Get elements with counting class
const countingElements = document.querySelectorAll('.counting');

// Loop through each counting element
countingElements.forEach(element => {
    const targetCount = parseInt(element.getAttribute('data-count'));
    const animationDuration = 180; // You can adjust the duration as needed

    // Trigger counting animation when element comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounting(element, targetCount, animationDuration);
                observer.disconnect(); // Stop observing once animation is triggered
            }
        });
    });

    observer.observe(element);
});


function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


$(document).ready(function () {
    var cards = $('.card');
    var cardIndex = 0;

    // Function to show the next card
    function showNextCard() {
        cards.removeClass('active'); // Hide all cards
        $(cards[cardIndex]).addClass('active'); // Show the next card
        cardIndex = (cardIndex + 1) % cards.length; // Increment index with wrap-around
    }

    // Show the first card initially
    showNextCard();

    // Set interval to automatically show next card every 5 seconds
    setInterval(showNextCard, 5000);
});

$(document).ready(function () {
    var newsCards = $('.news-card');
    var newsCardIndex = 0;

    // Function to show the next news card
    function showNextNewsCard() {
        newsCards.hide(); // Hide all news cards
        $(newsCards[newsCardIndex]).fadeIn(); // Show the next news card with fade-in effect
        newsCardIndex = (newsCardIndex + 1) % newsCards.length; // Increment index with wrap-around
    }

    // Show the first news card initially
    showNextNewsCard();

    // Set interval to automatically show next news card every 5 seconds
    setInterval(showNextNewsCard, 5000);
});


const menu = document.querySelector
('.menu');
document.querySelector('#hamburger-menu').
onclick = () =>{
    menu.classList.toggle('active');
};