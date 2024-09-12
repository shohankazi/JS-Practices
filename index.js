const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click', function(e) {
        if (e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'skyblue'){
            body.style.backgroundColor = e.target.id
        }
    });
});