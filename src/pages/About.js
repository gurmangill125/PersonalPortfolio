import React from 'react';

function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-1/4 md:w-1/2 w-3/4 mb-10 object-cover object-center rounded-full" src="https://i.imgur.com/l2KgI9D.png" alt="avatar"/>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Heres some things about me..</h1>
          <p className="mb-8 leading-relaxed">
          I'm passionate about building projects that hold meaning to others. Ever since I was a kid, I've always wanted to create and be a part of something bigger than me, whether that was stealing my mom's old clothes to create my own fashion brand or teaching myself Lua so I could program my own games in Roblox as a kid, I've always wanted to create things others can appreciate and enjoy.
          </p>
          <p className="mb-8 leading-relaxed">
          Outside of school and programming, I'm passionate about Formula One, music, and animals. I attended 10 concerts in 2023 and I'm planning on beating that number in 2024 as many of my favourite artists are bringing their tours to beautiful British Columbia. I am also going to be travelling to Montreal later this year to attend the Canadian Formula One Grand Prix and show my support for my favourite drivers.
          </p>
          <div className="flex justify-center">
            <a href="/projects" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View My Work</a>
            <a href="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Get In Touch</a>
          </div>
        </div>
      </div>
      <div className="container px-5 py-16 mx-auto">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Highlights</h1>
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img src="https://www.svgrepo.com/show/383207/head-cog-brainstorm-thinking-ideas.svg" className="w-10 h-10" alt="Creative Thinking"/>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Creative Problem Solving</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                As a student passionate about coding, I've learned that the real magic happens when tackling tough problems with a bit of creativity. I love diving deep to understand the root of a challenge and coming up with solutions that are outside the box, ensuring that what might start as a complex issue turns into an opportunity for innovation.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img src="https://www.svgrepo.com/show/308032/reading-a-book-learn-understand-forecast.svg" className="w-10 h-10" alt="Learning"/>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Eagerness to Learn and Grow</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                My journey in computer science is fueled by an insatiable curiosity and a drive to create interesting projects that others can learn from. Whether it's learning a new programming language or exploring new and cutting-edge technologies, I'm all about pushing the boundaries of what I know to ensure I can bring the most current and effective solutions to any project.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img src="https://www.svgrepo.com/show/433450/edit-o.svg" className="w-10 h-10" alt="Accessibility"/>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">User-Focused Approach</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                I believe that the best software solutions are those crafted with the end-user in mind. My approach to design and development is deeply rooted in accessibility, aiming to create experiences that are not only functional but also intuitive and enjoyable for people to use. It's all about making technology work for us, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
