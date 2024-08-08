import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#root');
const Hero = () => {
    const takeAssessment = () => {
        console.log("touched")
        setCloseModal(false)
        navigate('/assessmentPage');
    }
  const[modalOpen,setCloseModal] = useState(false)  
  const navigate = useNavigate()
  const closeModal = () => {
      setCloseModal(false)
  }

  const openModal = () => {
      setCloseModal(true)
  }
  
return (
    <div className='body'>
        <h2 className='text'>Unlocking The Full Potential Of SMEs</h2>
        <h3 className='subText'>Grow With Technology</h3>
        <div className='custom'>
        <h3>Unleash The Power Of</h3>
        <TypeAnimation
        className='typestyle'
           sequence={[
            'AI',
            1000, 
            'Big Data',
            1000,
            'Data Driven Systems',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.8em',}}
          repeat={Infinity}
        />
        </div>
        <button onClick={openModal}>Get Started</button>   
        <Modal 
        isOpen={modalOpen} 
        onRequestClose={closeModal} 
        contentLabel="Get Started Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Welcome to the SMEs Assessment Survey Tool</h2>
        <p>This tool will guide you through the process of assessing your SME's readiness for adopting technology.</p>
        <div className='modalButton'>
        <button onClick={closeModal} className='modalBottonStyle'>Close</button>
        <button onClick={takeAssessment} className='modalBottonStyle' >Take Survey</button>
        </div>
      </Modal>
    </div>
)
}

export default Hero;