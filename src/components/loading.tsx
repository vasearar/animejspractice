import { useEffect, useState } from "react";
import anime from 'animejs/lib/anime.es.js';

const loading = () => {
  const images = ['first.png', 'second.png', 'third.png', 'fourth.png'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, 150);
    
    anime({
      targets: '.black',
      top: 0,
      easing: 'easeInOutExpo',
      delay: 1000
    });
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-screen h-screen background flex justify-center items-center loading">
      <h1 className="text-white font-semibold text-[3.25rem] dropshadow absolute select-none">
        PRODIUS
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        CĂTĂLIN
      </h1>
      <img src={images[index % 4]} alt="attention" />
      <div className="w-screen h-screen bg-[#101010] absolute top-full black"></div>
    </div>
  )
}

export default loading