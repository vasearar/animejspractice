import { useState, useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Main = () => {
  const [mousePosition, setMousePosition] = useState({ x: 10000, y: 10000 });
  const [onText, setOnText] = useState(false);
  const images = ['text1.webp', 'text2.webp', 'text3.webp', 'text4.webp',];
  const [index, setIndex] = useState(0);
  const animationTimelineRef = useRef<any>(null);


  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const navAnimation = anime({
      targets: 'nav',
      opacity: 100, 
      delay: 50,
      duration: 300000,
      easing: 'linear',
      autoplay: true,
    });

    const verticalPathAnimation = anime({
      targets: '.vertical-path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 300,
      delay: 300,
      direction: 'normal',
      loop: false,
      autoplay: true,
    });

    const diagonalPathAnimation = anime({
      targets: '.diagonal-path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 300,
      delay: 0,
      direction: 'normal',
      loop: false,
      autoplay: true,
    });

    const sAnimation = anime({
      targets: '.s',
      translateY: [300, 0],
      delay: anime.stagger(100),
      easing: 'easeOutQuad',
      autoplay: true,
    });

    animationTimelineRef.current = anime.timeline({
      easing: 'linear',
      autoplay: true,
    });

    animationTimelineRef.current.add({
      targets: '.forAnime',
      translateX: ['13%', '-50%'],
      duration: 10000,
      easing: 'linear',
    });

    animationTimelineRef.current.add({
      targets: '.forAnime',
      translateX: ['0%', '-50%'],
      duration: 10000,
      easing: 'linear',
      loop: true,
    });

 
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationTimelineRef.current) {
        animationTimelineRef.current.pause();
      }
      navAnimation.pause();
      verticalPathAnimation.pause();
      diagonalPathAnimation.pause();
      sAnimation.pause();
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, 250);
    return () => clearInterval(intervalId);
  }, [onText]);

  const handleMouseEnter = () => {
    if (animationTimelineRef.current) {
      animationTimelineRef.current.pause();
    }
    setOnText(true);
  };

  const handleMouseLeave = () => {
    if (animationTimelineRef.current) {
      animationTimelineRef.current.play();
    }
    setOnText(false);
  };


  return (
    <div className="w-screen h-screen text-white bg-[#101010] main cursor-none relative overflow-hidden flex flex-col justify-between">
      <img
        src="firstcursor.svg"
        alt="cursor"
        className="absolute pointer-events-none transition-transform duration-150 ease-in z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-2%, -2%)',
        }}
      />

      <nav className='flex justify-between uppercase opacity-0 text-base m-4'>
        <p>Prodius Cătălin</p>
        <p className='tracking-[1.1rem]'>Pentru colaborări •</p>
        <a href='https://www.andys.md/ro/menu-page' target='_blank' className='tracking-[1.1rem] pl-4 -ml-4'>MENU</a>
      </nav>

      <article className='relative h-full flex items-center overflow-clip'>
        <div className='whitespace-nowrap w-max forAnime font-semibold text-[817px] -my-[270px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h1 className={`inline-block mx-16 bg-clip-text text-white hover:text-transparent bg-[url('${images[index % 4]}')] bg-cover`}>WEB</h1>
          <h1 className={`inline-block mx-16 bg-clip-text text-white hover:text-transparent bg-[url('${images[index % 4]}')] bg-cover`}>ESTE</h1>
          <h1 className={`inline-block mx-16 bg-clip-text text-white hover:text-transparent bg-[url('${images[index % 4]}')] bg-cover`}>VIITORUL</h1>
          <h1 className={`inline-block mx-16 bg-clip-text text-white hover:text-transparent bg-[url('${images[index % 4]}')] bg-cover`}>WEB</h1>
          <h1 className={`inline-block mx-16 bg-clip-text text-white hover:text-transparent bg-[url('${images[index % 4]}')] bg-cover`}>ESTE</h1>
          <h1 className={`inline-block mx-16 bg-clip-text text-white hover:text-transparent bg-[url('${images[index % 4]}')] bg-cover`}>VIITORUL</h1>
        </div>
      </article>

      <footer className='mx-4 mb-6 bottom-0 relative flex justify-between'>
        <div className='flex flex-col'>
          <h2 className='text-4xl s'>Eu sunt front-end developer și pot face </h2>
          <h2 className='text-4xl mb-8 s'>niște <i>lucruri cool</i> pentru <span className='text-[#986581]'>compania ta</span></h2>
          <div className='flex gap-8'>
            <a href="https://www.linkedin.com/in/prodius-c%C4%83t%C4%83lin-7237052ba/" target="_blank" className='s'>Linkedin</a>
            <a href="https://www.instagram.com/catalin.mp3/" target="_blank" className='s'>Instagram</a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <svg width="38" height="72" viewBox="0 0 40 80" className='mb-8'>
            <path className="diagonal-path" d="M19 77L34.5 63" stroke="#986581" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path className="diagonal-path" d="M18.5 77L3 63" stroke="#986581" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path className="vertical-path" d="M19 77V3" stroke="#986581" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <a href="mailto:prodius345@gmail.com" target="_blank" className='s'>Contactează-mă</a>
        </div>
      </footer>

    </div>
  );
};

export default Main;
