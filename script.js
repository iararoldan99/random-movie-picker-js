
(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      // Desactiva el botón una vez que la rueda está girando 
      startButton.style.pointerEvents = 'none';
      // Calcula una nueva rotación entre 5000 y 10 000
      deg = Math.floor(5000 + Math.random() * 7000);
      // settea la transición a la rueda 
      wheel.style.transition = 'all 10s ease-out';
      // gira la rueda
      wheel.style.transform = `rotate(${deg}deg)`;
      // apply blur
      wheel.classList.add('blur');
    });
  
    wheel.addEventListener('transitionend', () => {
      // quitar blur
      wheel.classList.remove('blur');
      // activa nuevamente el boton cuando la rueda dejó de girar
      startButton.style.pointerEvents = 'auto';
      // set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value from 360
      const actualDeg = deg % 360;
      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
  })();
  