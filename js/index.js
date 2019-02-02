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

// Add Keypress Event 

body[0].addEventListener('keydown', e => {
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'violet';
})
body[0].addEventListener('keyup', e => {
    event.target.style.backgroundColor = 'yellow';
})

// Add Click Event 
buttons[0].addEventListener('click', e => {
    alert('Whoa there buddy.')
})

buttons[1].addEventListener('click', e => {
    alert(`You're going too far.`)
})

buttons[2].addEventListener('click', e => {
    alert(`You just dont quit huh?`)
})

// Add Contextmenu Event
window.addEventListener('contextmenu', function(e) {
    alert('That is a right click. Do it again.');
});
