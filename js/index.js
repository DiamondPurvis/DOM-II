// Your code goes here
const navigationHeader = document.getElementsByClassName('logo-heading');
const body = document.getElementsByTagName('body')
const buttons = document.getElementsByClassName('btn');
// setTimeout();

function hello() {
    alert(`Golly Gee! It's Fun Bus Time!`);
}
setTimeout(hello, 500)

// Change color to magenta with mouseover Event
navigationHeader[0].addEventListener('mouseover', e => {
    event.target.style.color = "magenta";
    event.stopPropagation();
});
// Change color to black with mouseout Event
navigationHeader[0].addEventListener('mouseout', e => {
    event.target.style.color = "black";
});

// // Add Scroll Event 
window.addEventListener('scroll', e => {
    alert(`Crazy things will happen if you click the buttons or press a key...`);
    event.stopPropagation();
});
