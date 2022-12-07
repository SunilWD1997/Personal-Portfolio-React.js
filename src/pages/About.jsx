import './about.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


const About = () => {
  return (
    <div className="about">
      <Navbar/>
      <div className="about_container">
        <div className="left_section">
          <img src="/images/image1.jpg" alt="remote_image" />
        </div>
        <div className="right_section">
          <h2>About Me</h2>
          <p> I am a Front-End developer with a passion for creating engaging websites and applications. I have a deep understanding of HTML(Hypertext Markup Language), CSS(Cascading Style Sheet), JavaScript and other Web technolgies, and have several years of experience developing and maintaining Web-based applications. My goal is to use my knowlwdge and skills to create user-friendly and responsive web experiences that are both visually appealing  and functional. I also have experience with graphic design and creating content for webpages. I strive to stay up to date with the latest web technolgies, and contineously improve my skills so that I can create the best possibilities user experience.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About;