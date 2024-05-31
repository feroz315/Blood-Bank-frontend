
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../Compotents/Navbar';
import Footer from '../Compotents/Footer';
import "../Styles/Navbar.css";



const Dashboard = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (

    <>

      <Navbar />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src='../../public/images/Laboraotory.jpg' className='nav-silder' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../../public/images/elderly_blood.jpg' className='nav-silder' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../../public/images/elderly_blood.jpg' className='nav-silder' />

        </Carousel.Item>
      </Carousel>

      <div className='Cards'>
        <img src='../../public/images/images.jpg' className='card_Img' />

        <p><span className='para'>World Blood Donation Day is an annual global event observed on June 14th to raise awareness about the importance of voluntary blood donation. It aims to recognize the life-saving contributions of blood donors, encourage regular donation,
          and ensure the availability of safe and ultimately saving countless lives worldwide.</span></p>

        <img src='../../public/images/images.jpg' className='card_Img' />

      </div>

      <div className='donor'>
        <img src='../../public/images/images2.jpg' className='donor_Img' />
        <img src='../../public/images/images2.jpg' className='donor_Img' />
        <img src='../../public/images/images2.jpg' className='donor_Img' />
      </div>

      <div className='search'>
        <input placeholder='search' type='text' className='search_Input' />
        <button className='search-btn'>Search</button>
      </div>

      <Footer />

    </>

  )
}



export default Dashboard;