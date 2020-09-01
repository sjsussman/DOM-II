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


//change color to h2
let h2 = document.querySelectorAll('h2')
h2.forEach((h2) => {
    h2.addEventListener('dblclick', () => {
      h2.style.color = 'blue'
    });
  });


//change color of the nav links when space is hit
document.addEventListener('keydown', (event) => {
    //if the event object contains the key 'escape' kill modal
    if (event.key === 'Escape'){
        document.body.style.backgroundColor = 'red';
    }
})



//add script to alert when image is moved
const imgs = document.querySelectorAll('img')
imgs.forEach(img => {
    img.addEventListener('drag', () => alert('Hi friend! Please put me back :)'));
  });

//change header font size when window is resized
window.addEventListener('resize', (event) =>{
     header.style.fontSize = '10em'
    });


//Create an alert when there is a selection change
document.addEventListener('selectionchange', (event) => {
    alert('What was wrong with me!?'); 
    event.stopPropagation();
    });


    //propagation?
