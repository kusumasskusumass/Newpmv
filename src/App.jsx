import man from "./assets/man.jpg"
import linkdin from "./assets/link.png"
import git from "./assets/git.png"
import twit from "./assets/twit.png"
import './App.css'

function App() {


  return (
    <>

      <nav className='head'>
        <div>Vikram</div>
        <div><div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Resume</div></div>
        <div>
          <img className="ig" src={twit} alt="" />
          <img className="ig" src={git} alt="" />
          <img className="ig" src={linkdin} alt="" />
        </div>
      </nav>
      <div className='content'>
        <img src={man} alt="" />
        <div className="innercontent">
          <div className="about">About</div>
          <p className="para">My goal is to continue delivering impactful solutions that not only meet current needs but also set the stage for future innovation.The history of software engineering begins around the 1960s. Writing software has evolved into a profession concerned with how best to maximize the quality of software and of how to create it,Computers are now much more numerous and much more powerful, which has several effects on software. The larger market can support large projects to create commercial off the shelf software, as done by companies such as Microsoft.</p>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <h4>My Project</h4>
          <div class="box">
            <button>React js</button>
            <h4>Give me some Instruction about this</h4>
            <h6>The history of software engineering begins around the 1960s. Writing software has evolved into a profession concerned with how best to maximize the quality of software and of how to create it.</h6>
          </div>

        </div>
      <div>
        
     <div className="cont1">
     <div className="card1">
          <div>Skills</div>
          <button>React js</button>
          <button>Next js</button>
          <button>TypeCRM</button>
          <button>Typescript</button>
          <button>GraphQl</button>
          <button>Python</button>
          <button>Docker</button>
          <button>Storybook</button>
          <button>Jest</button>
          <button>PostgreSQL</button>
          <button>Flask</button>
          <button>Gatsby</button>
        </div>
        <div className="card2">

          <div>Resume</div>

          <div>More details about my carrer  &nbsp; &nbsp;
                <button>Open</button> 
          </div>
        </div>
     </div>
      </div>

      
      </div>
    </>
  )
}

export default App
