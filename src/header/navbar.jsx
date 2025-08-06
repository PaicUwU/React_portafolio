
const Header = ({scrollToSection, startRef, skillsRef}) => {

  return (  
    <div className=' absolute w-full py-5 h-19w bg-black border-b-4  border-lime-500 z-50'>
      <div className='flex flex-row justify-between items-center max-w-[1328px] mx-auto'>
        <div className='flex flex-row justify-between  gap-8'>
          <div className='flex flex-row gap-2'>
            <svg width="35" height="35" className="text-black fill-current bg-lime-500">
              <use href="/assets/sprites.svg#arrow" />
            </svg>
            <h2 style={{ filter: 'saturate(150%) brightness(120%)' }} className='text-blue-300 font-black text-3xl tracking-wide'>Portafolio.exe</h2>
          </div>
          <a onClick={(e) => { e.preventDefault(); scrollToSection(startRef); }} style={{ filter: 'saturate(150%) brightness(120%)' }} className=' text-lime-400 p-2 border-2 border-black font-serif text-xs font-bold tracking-widest transition transform delay-75 hover:text-cyan-300 hover:border-2 hover:border-cyan-300'>[SOBRE MI]</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection(skillsRef); }} style={{ filter: 'saturate(150%) brightness(120%)' }} className=' text-lime-400 p-2 border-2 border-black font-serif text-xs font-bold tracking-widest transition transform delay-75 hover:text-purple-500 hover:border-2 hover:border-purple-500'>[HABILIDADES]</a>
          <a style={{ filter: 'saturate(150%) brightness(120%)' }} className=' text-lime-400 p-2 border-2 border-black font-serif text-xs font-bold tracking-widest transition transform delay-75 hover:text-amber-300 hover:border-2 hover:border-amber-300' href="">[PROYECTOS]</a>
          <a style={{ filter: 'saturate(150%) brightness(120%)' }} className=' text-lime-400 p-2 border-2 border-black font-serif text-xs font-bold tracking-widest transition transform delay-75 hover:text-red-500 hover:border-2 hover:border-red-600' href="">[EXPERIENCIA]</a>
        </div>
          <button
            style={{ filter: 'saturate(150%) brightness(120%)' }} 
            className=' flex gap-2 text-black bg-lime-500 font-serif  tracking-widest py-2 px-6 rounded-md shadow-[0px_4px_11px_rgba(101,_163,_13,_1)] shadow-lime-300
            hover:bg-blue-300 hover:cursor-pointer hover:shadow-blue-200 hover:-translate-0.5'> 
          <svg width="20" height="20" >
              <use href="/assets/sprites.svg#arrow-down-icon" />
          </svg>
          {' '}Descargar_CV.zip
          </button>
      </div>
    </div>
   
  )

}

export default Header
