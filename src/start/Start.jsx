import React from 'react'
import { useState } from 'react'
import { useGlitch } from 'react-powerglitch'

  const Start = () => {

  const [glitch, setGlitch] = useState('base'); 

  const instantaneo = useGlitch({
    glitchTimeSpan: {
            start: 0,
            end: 0.7,
        },
        shake: {
            velocity: 5,
            amplitudeX: 0.1,
            amplitudeY: 0.1,
        }
      });
    
  const delay = useGlitch({
    glitchTimeSpan: {
            start: 0.4
        },
        shake: {
            velocity: 5,
            amplitudeX: 0.1,
            amplitudeY: 0.1,
        }
      });

   const handleClick = () => {
    setGlitch('glitch');
      console.log('Button clicked!');
      const timer = setTimeout(() => {
        setGlitch('cambio');
      }, 300);
      const timer2 = setTimeout(() => {
        setGlitch('glitch');
      }, 1500);
      const timer3 = setTimeout(() => {
        setGlitch('cambio');
      }, 2000);
      const timer4 = setTimeout(() => {
        setGlitch('base');
      }, 2200);
    };

  return (
    <section className='w-full'>
      <div className=" max-h-screen max-w-7xl mx-auto">
        <div className='flex justify-between items-center flex-row h-screen '>
            <div className=' flex flex-col gap-10 '>
                <p style={{ filter: 'saturate(150%) brightness(120%)' }} className='bg-black  text-cyan-300 font-serif tracking-[.25em] text-[11px] w-fit'>
                  {'>'} INITIALIZING PORTFOLIO..._
                </p>  
                <div className='flex flex-col gap-5 w-190'>
                  <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='text-lime-500 font-press-start text-6xl'>
                    HELLO_WORLD
                  </span>
                  <div className='flex flex-row gap-2 max-h-200'>
                  <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='text-purple-600 font-press-start text-6xl'>
                    SOY_
                  </span>
                  {glitch === 'base' && <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl'>
                    [ALVARO]
                  </span> }
                  <div className='fondo'>
                      <h1 className="glitch ">
                        <span ref={instantaneo.ref} style={{ filter: 'saturate(150%) brightness(120%)' }} className='texto-glitch bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl absolute' aria-hidden="true">{glitch === 'glitch' && '{ALVARO}'}{glitch === 'cambio' && '{PAIC}'}</span>
                        <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl absolute'>{glitch === 'glitch' && '{ALVARO}'}{glitch === 'cambio' && '{PAIC}'}</span>
                        <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='texto-glitch bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl absolute' aria-hidden="true">{glitch === 'glitch' && '{ALVARO}'}{glitch === 'cambio' && '{PAIC}'}</span>
                      </h1>
                  </div>
                  </div>
                  <div style={{ filter: 'saturate(150%) brightness(120%)' }} className='p-4 flex flex-col gap-2  w-full h-40 border-2 border-lime-500 shadow-lg/30 shadow-lime-500 bg-black response'>
                    <span className='text-green-700 font-serif font-extralight tracking-widest '>
                      {'<'} texto de ejemplo.exe {'>'}
                    </span>
                    <span className='text-green-700 font-serif font-extralight tracking-widest '>
                      {'<'} texto de ejemplo.exe {'>'}
                    </span>
                    <span className='text-green-700 font-serif font-extralight tracking-widest '>
                      {'<'} texto de ejemplo.exe {'>'}
                    </span>
                    <span className='text-green-700 font-serif font-extralight tracking-widest '>
                      {'<'} texto de ejemplo.exe {'>'}
                    </span>
                  </div>
                  <div className='flex flex-row gap-5 items-center'>
                    <button  type="button" onClick={handleClick}
                      className=" text-black py-2 px-6 bg-pink-500 rounded-md w-45 h-12 b"
                      >?
                    </button>
                    <a href="https://www.facebook.com/paicalva/">
                      <img src="/assets/facebook.svg" alt="Facebook"  style={{ filter: 'saturate(150%) brightness(150%)' }}  className='w-12 h-12' />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/alvaro-garcia-715b90320">
                      <img src="/assets/linkedin.svg" alt="Linkedin"  style={{ filter: 'saturate(150%) brightness(150%)' }}  className='w-12 h-12' />
                    </a>
                    <a target='_blank' href="https://wa.me/6951162732">
                      <img src="/assets/whatsapp.svg" alt="Whatsapp"  style={{ filter: 'saturate(150%) brightness(150%)' }}  className='w-12 h-12' />
                    </a>
                  </div>
                </div>
            </div>

            <div  className='glitch-img h-80 w-80  bg-gradient-to-r from-green-900 to-violet-900  border-12 border-black  outline-4 outline-lime-500  outline-offset-4   '>
                  
                  {glitch === 'base' &&
                    <div>
                      <img src="/assets/foto-alvaro.jpeg" alt="" className="glitch-img w-full h-full object-cover"/>
                    </div>}
                  {glitch === 'glitch' &&
                    <div>
                      <img ref={instantaneo.ref} src="/assets/foto-alvaro.jpeg" alt="" className="glitch-img w-full h-full object-cover"/>
                    </div>}
                  {glitch === 'cambio' &&
                    <div>
                      <img ref={delay.ref} src="/assets/gato-dudoso.jpeg" alt="" className="glitch-img w-full h-full object-cover"/>
                    </div>}
                  {/* <img
                  ref={glitch_library.ref} className="glitch-img w-full h-full object-cover"
                  src={
                    glitch === 'base'
                      ? '/assets/foto-alvaro.jpeg'
                      : glitch === 'glitch'
                      ? '/assets/foto-alvaro.jpeg'
                      : glitch === 'cambio'
                      ? '/assets/gato-dudoso.jpeg'
                      : ''
                  }/> */}
            </div>
        </div>
     </div>

    </section>
  )
}

export default Start