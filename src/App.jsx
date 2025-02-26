import Header from '/src/components/Header'
import ContainerComp from '/src/components/ContainerComp'
import Navbar from '/src/components/Navbar'
import Footer from '/src/components/Footer'
import ContactCard from '/src/components/ContactCard'
import ProjectDisplay from './components/ProjectDisplay'
import { LogoGithub, LogoLinkedin } from 'react-ionicons'

export default function App() {
  return (
    <>
      <Header />
      <ContainerComp id='home' styles='flex-col bg-black/40 items-center' text='Welcome to my website!'>
        <p className="mt-6 text-base md:text-lg lg:text-2xl w-full md:w-4/5 leading-relaxed">
          Hello there! This is my Portfolio Website, a digital canvas that
          reflects my passion and expertise. As you navigate through these virtual
          pages, you'll discover a collection of my most noteworthy projects,
          showcasing my skills in web development, design, and problem-solving.
          Each project tells a unique story of challenges overcome and creative
          solutions implemented. <br />
          <br />My journey in the world of technology and design is depicted here,
          from the early days of learning to the current state of polished
          proficiency. Feel free to explore the various sections to gain insights
          into my professional background, skill set, and the innovative projects
          that have shaped my career. Thank you for visiting, and I hope you enjoy
          the glimpse into my world of creativity and dedication.
        </p>
      </ContainerComp>

      <ContainerComp id='about' styles='flex-col bg-black/40' text='About me'>
        <img
          src="/images/me.png"
          className="hidden md:max-xl:h-[200px] md:block absolute bottom-0 left-0 h-[60%] filter brightness-70"
          alt="Profile"
        />
        <p className="relative text-base md:text-lg lg:text-2xl w-full md:w-[85%] md:ml-auto mt-6 leading-relaxed">
          Hey there! My name is Kshitij Jagtap, and welcome to my static portfolio
          website. Here, I'd like to share a bit about myself, the projects I've
          worked on, and showcase some of the work I've put into developing these
          ideas. This website is part of a personal initiative I've been calling
          <span className='text-yellow-400'> "Project Ultimate" </span>—a collection of ideas and innovations that I aim to
          bring to life, starting with this very platform.
          <br />
          <br />
          I'm excited to finally see this project take shape with the creation of
          this site. However, this is just the beginning. There are countless more
          ideas I want to implement, gradually building them into smaller,
          meaningful projects that will come together as a cohesive whole under
          the "Project Ultimate" banner. I hope to continuously evolve this space,
          incorporating new skills, fresh designs, and innovative solutions as I
          grow as a developer. Stay tuned for more updates as Project Ultimate
          unfolds!
        </p>
      </ContainerComp>

      <ContainerComp id='projects' styles='flex-col bg-black/40 overflow-auto' text='Projects'>
        <ProjectDisplay item='Project - Pharmacy Management System' images={['/images/p-m-1.png','/images/p-m-2.png','/images/p-m-3.png']}>
          <p className='text-lg'>The Pharmacy Management System is a GUI-based application developed using Python (Tkinter) and MySQL, designed to streamline the management of pharmacy operations. <br />
            <a className='hover:text-blue-500' href='https://github.com/its-kshitij4444/Pharmacy-Management-Mini-Project'>GitHub Link to Project</a>
          </p>
        </ProjectDisplay>

        {/* <ProjectDisplay item='Project - Tic Tac Toe Game' images={['/images/ttt1.png','/images/ttt2.png','/images/ttt3.png']}>
          <p className='text-lg'>This Tic Tac Toe game was created using Vite + React, Tailwind CSS, and it uses state management and event handling concepts. <br />
            <a className='hover:text-blue-500' href='https://github.com/its-kshitij4444/tic-tac-toe'>GitHub Link to Project</a>
          </p>
        </ProjectDisplay> */}
      </ContainerComp>

      <ContainerComp id='contact' styles='flex-col md:flex-row justify-center md:justify-around items-center gap-8 bg-black/40'>
        <ContactCard link='https://github.com/its-kshitij4444/' item='Github' hover='hover:bg-black transition-colors duration-500'>
          <LogoGithub
            color={'#fff'} 
            title={'Github'}
            height="150px"
            width="150px"
          />
        </ContactCard>
        <ContactCard link='https://linkedin.com/in/y0urstru1ykshitij' item='LinkedIn' hover='hover:bg-[#0077B5] transition-colors duration-500'>
          <LogoLinkedin
            color={'#fff'} 
            title={'LinkedIn'}
            height="150px"
            width="150px"
          />
        </ContactCard>
      </ContainerComp>
      <Navbar />
      <Footer />
    </>
  )
}