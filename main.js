const button = document.querySelector('button');
const card = document.querySelector('#card');
const card1 = document.querySelector('#card1');
const lis = document.querySelectorAll('li');
const span = document.querySelector('span');

button.addEventListener('click', handleClick);

lis.forEach(li=>{
    li.addEventListener('click',()=>{
        li.classList.add('later');
        let num = li.innerText;
        span.innerText = num;
    });
})

function handleClick(){
    button.style.background = 'var(--White)';
    card.style.display = 'block';
    card1.style.display = 'none';
}