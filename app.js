

window.addEventListener('keydown', () => {
 
switch (event.code) {
  
  case 'Space':
  document.getElementById('boomSound').play();
  break;

  case 'KeyZ':
  document.getElementById('zSound').play();
  break;

  case 'KeyX':
  document.getElementById('xSound').play();
  break;
  
  case 'KeyC':
  document.getElementById('cSound').play();
  break;
  
  case 'KeyV':
  document.getElementById('vSound').play();
  break;
  
  case 'KeyB':
  document.getElementById('bSound').play();
  break;

  case 'KeyN':
  document.getElementById('nSound').play();
  break;

  case 'KeyM':
  document.getElementById('mSound').play();
  break;

  case 'KeyF':
  document.getElementById('fSound').play();
  break;

  case 'KeyP':
  document.getElementById('pSound').play();
  break;

  case 'KeyW':
  document.getElementById('wSound').play();
  break;

  case 'KeyJ':
  document.getElementById('jSound').play();
  break;

  case 'KeyL':
  document.getElementById('lSound').play();
  break;

  default:
  document.getElementById('allSound').play();
}


  
console.log(event);
});



window.addEventListener('click', (event) => {
  
  if (event.path[1].id != 'spaceBar') {
   
      switch (event.path[0].id) {
        
        case 'spaceBar':
        document.getElementById('boomSound').play();
        break;

        case 'zKey':
        document.getElementById('zSound').play();
        break;

        case 'xKey':
        document.getElementById('xSound').play();
        break;

        case 'cKey':
        document.getElementById('cSound').play();
        break;

        case 'vKey':
        document.getElementById('vSound').play();
        break;

        case 'bKey':
        document.getElementById('bSound').play();
        break;

        case 'nKey':
        document.getElementById('nSound').play();
        break;

        case 'mKey':
        document.getElementById('mSound').play();
        break;

        case 'logo':
        document.getElementById('boomSound').play();
        break;

      default:
      document.getElementById('allSound').play();
      }
      
    console.log(event);
  } else {
    document.getElementById('boomSound').play();
  }
});

  window.addEventListener('click', (event) => {

   
  });