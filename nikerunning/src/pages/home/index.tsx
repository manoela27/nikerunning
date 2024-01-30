import '../../assets/css/style.css';
import IconFlower from '../../components/icons/iconflower';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/running");
  }
  
  return (
    <div className='c-home d-flex justify-content-center flex-column align-items-center'>
    <IconFlower width={64} className='home-icon'/>
      <h1 className='home-title'>Nike running</h1>
      <h1 className='home-title yellow'>shoe finder</h1>
        <button onClick={handleNext} className='home-button'>
          Let's Go!
        </button>
    </div>
  )
}

export default Home
