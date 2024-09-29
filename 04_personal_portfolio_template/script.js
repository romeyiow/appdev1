for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        document.querySelector('.animated-element').classList.add('animateClass');
    }, 2000); // Trigger the animation after a 2000ms (2 seconds) delay
    setTimeout(function () {
        document.querySelector('.animated-element').classList.remove('animateClass');
    }, 2000); // Trigger the animation after a 2000ms (2 seconds) delay

}



// var scrollThreshold = 7;
// document.addEventListener('DOMContentLoaded', function () {
//     var navbar = document.querySelector('#nav');

//     window.addEventListener('scroll', function () {
//         if (window.scrollY > (scrollThreshold / 100) * window.innerHeight) {
//             navbar.classList.add('sticky');
//             //    hero.classList.add('parallax');
//         } else {
//             navbar.classList.remove('sticky');
//             // hero.classList.remove('parallax');
//         }
//     });
// });

