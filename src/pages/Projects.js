import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'UBCGuessr',
    description: 'UBCGuessr is a web-based game, modeled after the wildly popular GeoGuessr, uniquely set in the picturesque University of British Columbia (UBC) campus.',
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

];

function Projects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
