const buttons =  document.querySelectorAll('.button');
const body =  document.querySelector('.body-tag');

buttons.forEach(function (button)  {
 button.addEventListener('click', function (e) {
    const color = e.target.id;

    if (color === 'grey') {
        body.style.backgroundColor = color;
    }
    if (color === 'Red') {
        body.style.backgroundColor = color;
    }
    if (color === 'Black') {
        body.style.backgroundColor = color;
    }
    if (color === 'Blue') {
        body.style.backgroundColor = color;
    }
    if (color === 'Green') {
        body.style.backgroundColor = color;
    }
}
)
})