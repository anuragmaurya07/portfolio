import imanshupic from '../../../src/assets/anu.jpg'
import pdf from '../../../src/assets/anurag_maurya_frontend.pdf'
import './hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export function HerioIndex() {
  return (
    <div className="container-fluid">
      <div id="hero" className="text-center py-5">

        {/* Profile Image */}
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <img 
            className='rounded-circle hero-img' 
            src={imanshupic} 
            alt="Anurag Maurya" 
          />
        </div>

        {/* Title */}
        <div id="titlemove" className='mt-4'>
          <h1 id='titleName'>
            <span id="persoalName">I'm Anurag Maurya</span>, frontend developer based in INDIA.
          </h1>
        </div>

        {/* Subtitle */}
        <div className='mt-3'>
          <p id="subtitle">
            Hi, I’m Anurag Maurya 👋<br/>
            UI Full-Stack Developer<br/>
            Certified from Naresh IT, Hyderabad<br/>
            I enjoy building responsive websites and full-stack applications<br/>
            with modern JavaScript & React technologies.
          </p>
        </div>

        {/* Buttons */}
        <div className='mt-4 d-flex justify-content-center align-items-center flex-wrap gap-3'>
          
          {/* Connect Button */}
          <AnchorLink 
            className="hero-btn btn-connect"
            href="#contact"
          >
            Connect With Me
          </AnchorLink>

          {/* Resume Button */}
          <a 
            href={pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-btn btn-resume"
          >
            My Resume
          </a>
        </div>

      </div>
    </div>
  )
}
