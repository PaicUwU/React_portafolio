import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './header/app.css'
import './start/start.css'
import Header from './header/App.jsx'
import Start from './start/Start.jsx'
import Skills  from './skills/Skills.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' bg-black'>
      <div
          className="absolute pointer-events-none inset-0 opacity-[0.10] "
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.06]">
        <div
          className="fixed inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.3) 2px, rgba(0,255,0,0.3) 4px)",
          }}
        ></div>
      </div>
      <Header />
      <Start />
      <Skills />
    </div>
  </StrictMode>,
)
