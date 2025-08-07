import { useState, useEffect, Suspense } from 'react'
import { fetchData } from '../api/fetchData'

const apiData = fetchData('http://127.0.0.1:8000/api/skill');

const Skills = ({skillsRef}) => {

  const skills = apiData.read();

  const mapSettings = [
    {
      borderColor: 'border-cyan-300',
      bgColor: 'bg-cyan-300',
      icon: 'assets/svg/open.svg',
      text: 'text-cyan-300',
      ring: 'ring-cyan-300',
      shadow: 'shadow-cyan-500'
    },
    {
      borderColor: 'border-amber-300',
      bgColor: 'bg-amber-300',
      icon: 'assets/svg/3points.svg',
      text: 'text-amber-300',
      ring: 'ring-amber-300',
      shadow: 'shadow-amber-500'
    },
    {
      borderColor: 'border-pink-500',
      bgColor: 'bg-pink-500',
      icon: 'assets/svg/close.svg',
      text: 'text-pink-500',
      ring: 'ring-pink-500',
      shadow: 'shadow-pink-500'
    },
  ];

  const subMapSettings =[
    {
      subText: 'bg-pink-500',
    },
    {
      subText: 'bg-red-500',
    },
    {
      subText: 'bg-amber-500',
    },
    {
      subText: 'bg-blue-500',
    },
    {
      subText: 'bg-green-500',
    }
  ]

  const lista_skills = skills?.map((skill) => {
  const settings = mapSettings[(skill.id - 1) % mapSettings.length];

    return(
      <Suspense key={skill.id} fallback={<div>Loading...</div>}>
        <div style={{ filter: 'saturate(150%) brightness(120%)' }} className={`${settings.borderColor} ${settings.shadow} shadow-lg/20 border-2 w-107 h-62 rounded-md p-5 flex flex-col gap-6 ring-1 ${settings.ringColor}`}  >
          <div className={`w-12 h-12  flex items-center justify-center ${settings.bgColor}`}>
            <img src={settings.icon} alt="" className="w-10 h-10 object-contain" />
          </div>
          <div className='flex flex-col gap-1'>
            <p style={{ filter: 'saturate(150%) brightness(120%)' }} className={`${settings.text} font-serif text-2xl tracking-widest`}>
              {skill.skill_name}.exe
            </p>
            <p style={{ filter: 'saturate(150%) brightness(120%)' }} className={`${settings.text} font-extralight text-sm tracking-widest [word-spacing:.2rem]`}>
              {`<`}{skill.skill_sub_name}{`/>`}
            </p>
          </div>
          <div className='flex flex-row flex-wrap gap-2'>
            {
              skill.skill_categories?.map((skill_cat) => {

                const subSettings = subMapSettings[skill_cat.id % subMapSettings.length];

                return (
                  <span style={{ filter: 'saturate(150%) brightness(120%)' }} key={skill_cat.id} className={`${subSettings.subText} text-black font-extrabold text-xs uppercase tracking-wide rounded-2xl p-2 h-6 flex items-center justify-center`}>
                    {skill_cat.skill_category_name}
                  </span>
                )
              })
            }
          </div>
        </div>
      </Suspense>
    )
  })


  return (
    <section ref={skillsRef} className='w-full'>
      <div className='max-h-screen max-w-[1328px] mx-auto'>
        <div className='flex justify-center items-center flex-row h-screen w-full'>
          <div className='flex flex-col gap-10 w-full'>
            <div className='flex flex-col gap-5 items-center'>
              <p style={{ filter: 'saturate(150%) brightness(120%)' }} className='  text-cyan-300 font-mono tracking-wider text-4xl w-fit'>
                {'>_'}CONOCIMIENTO.txt 
              </p>
              <p style={{ filter: 'saturate(150%) brightness(110%)' }} className='text-green-600 tracking-widest font-serif text-sm'>
                {'// '} Tecnologias Durante mi viaje como programador
              </p>
            </div>
            <div className='flex flex-row justify-between w-full'>
                {lista_skills}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
