// 1
const button1 = document.querySelector('#one');
console.log(button1);
// alert(`You clicked the first button! Congrats!`)
button1.onclick = () => alert(`You clicked the first button! Congrats!`);


// 2
const h3 = document.querySelector('h3');
h3.addEventListener('mouseover', () => alert(`You hovered over the h3 element! Congrats!`), {once:true});
// console.log(h3);



// 3
const form = document.querySelector('form');

console.log(form.entry.value);

form.addEventListener('submit',() =>{
    alert(`${form.entry.value}`);
});




// 4
const star = document.querySelector('*')
const darkMode = document.querySelector('#dm');
darkMode.addEventListener('click',() =>{
    star.classList.toggle('dark-mode');
});


// 5
let num = 3;
const times = document.querySelector(`#times`);
times.addEventListener('click', () => {
    num--;
    if(num > 0){
        alert(`You clicked the last button! Congrats!`)
    } else if (num <= 0) {
        alert(`OH NO! This button is NOT going to work anymore`);
        // times.remove();
        times.disabled = true;
    } else{
        alert(`How the fuck!`)
    }
})