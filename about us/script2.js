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
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
});

