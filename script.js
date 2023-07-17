document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});
setTimeout(function() {
    const aboutH2 = document.querySelector('.about-content h2');
    aboutH2.classList.add('appear');
}, 1000);

setTimeout(function() {
    const aboutP = document.querySelector('.about-content p');
    aboutP.classList.add('appear');
}, 2000);

setTimeout(function() {
    const buttons = document.querySelector('.buttons');
    buttons.classList.add('appear');
}, 3000);

setTimeout(function() {
    const buttons = document.querySelector('.home-image');
    buttons.classList.add('appear');
}, 4000);