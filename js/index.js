// Your code goes here

//change h1 color on mouse over
let header = document.querySelector('h1');
header.addEventListener('mouseenter', ()=>
{
    header.style.color = 'red'
});

//bus image enlarged on click
let busPhoto = document.querySelector('img')
busPhoto.addEventListener('click', () => 
{
    busPhoto.src = 'https://s3.amazonaws.com/ocn-media/169ca9ec-702d-4e13-9f55-5066534e1f86.webp'
})

//copyright enlarge on hover
let copyright = document.querySelector('.footer')
copyright.addEventListener('mouseover', ()=>
{
    copyright.style.transform = 'scale(1.5)'
    copyright.style.transform = 'transform 1s'
})
