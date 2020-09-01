  
//create an array to manipulate the different colored blocks
const blocks = document.querySelector('.blocks');
Array.from(blocks.children).forEach(item => {
  item.style.transition = '5s';

  //HELPER FUNCTIONS
  //function to move blocks to the top
  const top = () => blocks.prepend(item);
  //function to move blocks to the right
  const rocket = () => (item.style.transform = 'translateX(1000%)');
  //resets blocks to position
  const reset = () => (item.style.transform = '');

  //when mouse is held down, call rocket helper
  item.addEventListener('mousedown', event => rocket());

  //when mouse is let go, call reset helper
  item.addEventListener('mouseup', event => reset());

  //when mouse leaves target block, call rocket helper
  item.addEventListener('mouseleave', event => reset());
  
  //when mouse is clicked, call top helper
  item.addEventListener('click', event => top());
});

//allow block to go off screen ("infinite")
document.querySelector('html').style.overflowX = 'hidden';
