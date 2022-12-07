import './project.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


const Project = () => {
  return (
    <div className="project">
      <Navbar />

      <div className="content">
        <h1>Projects</h1>

        <ol className='Project_list'>
          <li> <span>1</span> Weather Forcasting(React.js)</li>
          <li> <span>2</span> ToDo List(React.js)</li>
          <li> <span>3</span> Weather forcasting(React.js)</li>
          <li> <span>4</span> Temperature Converter(HTML, CSS & JS)</li>
          <li> <span>5</span> Quiz Website(HTML, CSS & JS)</li>
          <li> <span>6</span> Music Player(HTML, CSS & JS)</li>
          <li> <span>7</span> Product Landing Page(React.js)</li>
          <li> <span>8</span> Blog Website (React.js)</li>
          
        </ol>


      </div>
       
       <Footer/>
    </div>
  )
}

export default Project