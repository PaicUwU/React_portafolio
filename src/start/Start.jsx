import React, { Suspense } from 'react'
import { useState, useEffect } from 'react'
import { useGlitch } from 'react-powerglitch'
import { fetchData } from '../api/fetchData'

  const apiData = fetchData('http://127.0.0.1:8000/api/aboutme');

  const Start = ({startRef}) => {
    
  const data = apiData.read();
  const [glitch, setGlitch] = useState('base'); 

  const instan = useGlitch({
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
    <section ref={startRef} className='w-full'>
      <div className=" max-h-screen max-w-[1328px] mx-auto">
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
                  <Suspense fallback={<div>Loading...</div>}>
                  {glitch === 'base' && <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl'>
                    [{data?.[0]?.about_name}]
                  </span> }
                  <div className='fondo'>
                      <h1 className="glitch ">
                        <span ref={instan.ref} style={{ filter: 'saturate(150%) brightness(120%)' }} className='texto-glitch bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl absolute' aria-hidden="true">{glitch === 'glitch' && `{${data[0].about_name}}`}{glitch === 'cambio' && '{PAIC}'}</span>
                        <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl absolute'>{glitch === 'glitch' && `{${data[0].about_name}}`}{glitch === 'cambio' && '{PAIC}'}</span>
                        <span style={{ filter: 'saturate(150%) brightness(120%)' }} className='texto-glitch bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent font-press-start text-6xl absolute' aria-hidden="true">{glitch === 'glitch' && `{${data[0].about_name}}`}{glitch === 'cambio' && '{PAIC}'}</span>
                      </h1>
                  </div>
                  </Suspense>
                  </div>
                  <div style={{ filter: 'saturate(150%) brightness(120%)' }} className='p-4 flex flex-col gap-2 w-full h-40 border-2 border-lime-500 shadow-lg/30 shadow-lime-500 bg-black response ring-1 ring-lime-500'>
                    <Suspense fallback={<div>Loading...</div>}>
                    <span className='text-green-700 font-serif font-extralight tracking-widest leading-loose'>
                      {'<'} {data?.[0]?.about_description} {'>'}
                    </span>
                    </Suspense>
                  </div>
                  <div className='flex flex-row gap-5 items-center'>
                    <button  type="button" onClick={handleClick}
                      className=" text-black py-2 px-6 bg-pink-500 rounded-md w-45 h-12 b flex items-center justify-center cursor-help "
                      >
                        <img className='w-8 h-8' src="/assets/question_mark.svg" alt="No tocar" />
                    </button>
                    <a target='_blank' href="https://www.facebook.com/paicalva/">
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
          <div className="flex items-center justify-center">
            <div className="relative">
              <div  className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-rose-600 blur-3xl opacity-80 animate-pulse"></div>
              <div className="relative border-4 border-lime-400 bg-black p-4 shadow-2xl shadow-green-400/50">
                <div className="w-80 h-80 bg-gradient-to-br from-green-400/20 via-cyan-400/20 to-magenta-400/20 flex items-center justify-center text-6xl font-bold">
                  <div className="text-center">
                    <Suspense fallback={<div>Loading...</div>}>
                    {glitch === 'base' &&
                    <div>
                      <img src={data?.[0]?.about_img} alt="yo" className="glitch-img w-full h-full object-cover"/>
                    </div>}
                  {glitch === 'glitch' &&
                    <div>
                      <img ref={instan.ref} src={data?.[0]?.about_img} alt="" className="glitch-img w-full h-full object-cover"/>
                    </div>}
                    </Suspense>
                  {glitch === 'cambio' &&
                    <div>
                      <img ref={delay.ref} src="/assets/alpha-y-yo.jpeg" alt="" className="glitch-img w-full h-full object-cover"/>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
     </div>


    </section>
  )
}

export default Start