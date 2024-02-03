import React from 'react';
import ProjectCard from '../components/ProjectCard';
import useTypewriter from 'react-typewriter-hook'; 

const projects = [
  {
    title: 'UBCGuessr',
    description: 'UBCGuessr is a web-based game, modeled after the wildly popular GeoGuessr, but uniquely set in the picturesque University of British Columbia (UBC) campus.',
    category: 'Built using HTML, CSS, and JavaScript',
    image: 'https://camo.githubusercontent.com/c662498752f046334cc5e5363b1617af690523e27345495749e560a230362d57/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578597a55784d4777324d57527764585931655868365a3368774d484a724e33426f627a4277623346765a546c315954683064446b315a695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f524d574254594f42495a67527a6e384433692f67697068792e676966',
    link: 'https://github.com/gurmangill125/UBCGuessr',
  },
  {
    title: 'Regular Expression Helper',
    description: 'The Regular Expression Helper is a user-friendly web application engineered to simplify and enhance the efficiency of working with regular expressions (regex).',
    category: 'Built using HTML, CSS, and JavaScript',
    image: 'https://camo.githubusercontent.com/16b08ef466aa56cfadae5703cc725c228cb9ad7ad2f869dba567419f8e2ceb39/68747470733a2f2f692e696d6775722e636f6d2f454b68613170362e706e67',
    link: 'https://github.com/gurmangill125/RegularExpressionHelper',
  },
  {
    title: 'PlatterPedia',  
    description: 'PlatterPedia is a user-friendly Java application designed to serve as a personal culinary database. It enables users to store, view, and manage their favorite recipes in an efficient manner.',
    category: 'Built using Java and SwingUI',
    image: 'https://raw.githubusercontent.com/gurmangill125/PlatterPedia/main/data/resources/splashscreen.gif',
    link: 'https://github.com/gurmangill125/PlatterPedia',
  },
  {
    title: 'Personal Website',  
    description: 'My personal website to display my portfolio of projects, some information about me, my skills, and contact form.',
    category: 'Built using React and Tailwind',
    image: 'https://i.imgur.com/c53oalR.png',
    link: 'https://github.com/gurmangill125/PersonalPortfolio',
  },
];


function Home() {

  const GurmanTypewriter = useTypewriter("Hey, I'm Gurman.");
  
  return (
    <div> 
      {/* Hero Section */}
<section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-1/6 md:w-1/3 w-1/4 mb-10 object-cover object-center rounded-full" src="https://i.imgur.com/agaTQro.png" alt="hero"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {GurmanTypewriter}
        </h1>
      <p className="mb-8 leading-relaxed">I'm a second-year Computer Science student currently attending The University of British Columbia. Welcome to my portfolio website, where you can explore my work and get to know more about me.</p>
      <div className="mb-8">
        
        {/* Social Icons */}
        <div className="flex justify-center">
  <a href="https://www.linkedin.com/in/gurman-gill-85908b25b/" className="ml-4">
    <img src="https://cdn-icons-png.flaticon.com/256/61/61109.png" alt="LinkedIn" className="social-icon" />
  </a>
  <a href="https://github.com/gurmangill125" className="ml-4">
    <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="GitHub" className="social-icon" />
  </a>
  <a href="mailto:gurmangill125@gmail.com" className="ml-4">
    <img src="https://cdn-icons-png.flaticon.com/256/83/83968.png" alt="Email" className="social-icon" />
  </a>
</div>

      </div>
      <div className="flex justify-center">
        <a href="/projects" className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">View Projects</a>
        <a href="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Me</a>
      </div>
    </div>
  </div>

  <div className="mt-5"></div>
</section>

{/* Skills Section */}

<section className="text-gray-700 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-bold">My Skills</h2>
    </div>
    <div className="flex flex-wrap -m-4 justify-center mt-6">
      {/* Skills Items */}
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-23-1174949.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">JavaScript</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">React</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">Python</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">Java</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">HTML</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-css-alt-3628710-3029935.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">CSS</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">Git</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">Docker</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">R</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">C</p>
      </div>
      <div className="lg:w-1/6 md:w-1/4 p-4 flex flex-col items-center">
        <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="JavaScript" className="skill-icon mb-2" />
        <p className="text-center">Node.js</p>
      </div>
    </div>
  </div>
</section>

        {/* Projects Section */}
      <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Check Out My Projects</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">These are some of the projects I've worked on. Take a look!</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}


export default Home;
