function finally(){
    var name = document.getElementById('name');
    name.setAttribute('value', document.getElementById('n').innerText);

    var comment = document.getElementById('comment');
    comment.setAttribute('value', document.getElementById('c').innerText);
}

var submit = document.getElementById('finally');

submit.addEventListener('click', finally);
