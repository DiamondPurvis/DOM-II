// Your code goes here
const navigationHeader = document.getElementsByClassName('logo-heading');
const body = document.getElementsByTagName('body')
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
