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

function toggleNavbar() {
    const actDiv = document.querySelector('.act');
    actDiv.classList.toggle('appear');
    
    // Add a delay before applying sliding animation
    setTimeout(function() {
      actDiv.classList.toggle('slide');
    }, 100); // Adjust the delay time as needed
  }