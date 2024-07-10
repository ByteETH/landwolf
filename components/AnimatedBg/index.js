// React y CSS
import { useEffect } from "react";
import styles from './Background.module.css';

const AnimatedBg = () => {
  useEffect(() => {
    const animatedBg = document.getElementById('animated-background');

    // Función para generar un número aleatorio entre un rango
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Función para generar un ángulo de rotación aleatorio
    function getRandomRotation() {
      return Math.random() * 360; // En grados
    }

    // Función para agregar una nueva imagen al contenedor
    function addImage() {
      const img = document.createElement('img');
      img.src = '/heart.webp'; // Cambia la ruta a la ubicación de tu imagen
      animatedBg.appendChild(img);

      // Tamaño personalizado de la imagen
      img.style.width = '70px'; // Cambia el ancho según tus necesidades
      img.style.height = '60px'; // Cambia la altura según tus necesidades
      

      // Asegúrate de que la imagen tenga posición absoluta
      img.style.position = 'absolute';

      // Posicionamiento aleatorio en la pantalla
      img.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
      img.style.top = `${getRandomNumber(0, window.innerHeight)}px`;

      // Aplicar una rotación mínima aleatoria
      img.style.transform = `rotate(${getRandomRotation()}deg)`;

      // Desvanecer y eliminar la imagen después de un tiempo aleatorio
      setTimeout(() => {
        img.style.opacity = 0;
        setTimeout(() => {
          img.remove();
        }, 1000); // Ajusta el tiempo de desaparición según tus necesidades
      }, getRandomNumber(1000, 5000)); // Ajusta el tiempo de aparición según tus necesidades
    }

    // Agregar imágenes continuamente en un bucle infinito
    const intervalId = setInterval(addImage, 200); // Ajusta el intervalo según tus necesidades

    // Limpiar el intervalo cuando el componente se desmonte para evitar pérdidas de memoria
    return () => clearInterval(intervalId);
  }, []);

  return <div id="animated-background" className={styles.animatedBg}></div>;
};

export default AnimatedBg;