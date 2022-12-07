import './home.css';
import Navbar from '../components/navbar/Navbar';
import { LinkedIn, Email, GitHub } from '@material-ui/icons';
import Footer from '../components/footer/Footer';



const Home = () => {
  return (
   <div className="home">
<Navbar/>
  <div className="main">

    <h2>Hi, My name is Sunil</h2>
    <p>A Front-End developer with a passion for learning </p>
    <p>and creating. </p>
    <div className="social_media_links">
      <a href='https://www.linkedin.com/in/sunil-patra1997' target='_blank' rel="noreferrer"><LinkedIn/></a>
      <a href='mailto:www.npatra412@gmail.com' target='_blank' rel="noreferrer"><Email/></a>
      <a href='https://www.github.com/SunilWD1997' target='_blank' rel="noreferrer"><GitHub/></a>
    </div>
  </div>
  <Footer/>
   </div>

  )
}

export default Home;