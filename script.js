const questions = document.getElementsByClassName('question')

let index = 0
questions[0].style.display = 'block';
questions[0].children[4].style.display = 'none';
questions[20].children[4].style.display = 'none';

function next() {
    if(![questions[index].children[1].children[0], questions[index].children[2].children[0]].some(c => c.checked)) {
        return;
    }
    questions[index].style.display = 'none';
    index++;
    questions[index].style.display = 'block';
}

function prev() {
    questions[index].style.display = 'none';
    index--;
    questions[index].style.display = 'block'
}

function enable() {
    questions[index].children[5].style.color = 'black'
}

var submit = function(event) {
    alert("Noice");
    event.preventDefault();
};
var form = document.getElementById("form");
form.addEventListener("submit", submit, true);