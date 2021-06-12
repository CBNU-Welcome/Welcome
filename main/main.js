$(window).scroll(function (event) {
    hasScrolled();
});

function hasScrolled() {
    const STANDARD_HEIGHT = 920;
    const scrollTop = $(this).scrollTop();
    const headerElement = document.querySelector('header');

    if (scrollTop > STANDARD_HEIGHT) {
        headerElement.classList.add('visible');
    } else {
        headerElement.classList.remove('visible');
    }
}