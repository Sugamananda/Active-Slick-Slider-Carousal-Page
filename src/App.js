import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
// import Slider from "react-slick";
import bg from "./image/3491319.webp";


function Swty() {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section className='h-screen w-screen' style={styles}>
          <div className='text-balance justify-center '>
            <h1 className=' text-white font-bold text-center text-5xl pt-9'>Mountains Climbing</h1>
            <h3 className='text-white text-center text-2xl pt-4 pb-40'>The word mount has many meanings, from a high hill to a way of attaching something.</h3>
          </div>
          <Card />
    </section>
  );
}

export default Swty;