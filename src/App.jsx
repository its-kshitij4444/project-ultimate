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
    <p class="mt-6 text-base md:text-lg lg:text-2xl w-full md:w-4/5 leading-relaxed">
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
              src="/src/images/me.png"
              class="hidden md:block absolute bottom-0 left-0 h-[60%] filter brightness-70"
              alt="Profile"
            />
    <p class="relative text-base md:text-lg lg:text-2xl w-full md:w-[85%] md:ml-auto mt-6 leading-relaxed">
              Hey there! My name is Kshitij Jagtap, and welcome to my static portfolio
              website. Here, I'd like to share a bit about myself, the projects I've
              worked on, and showcase some of the work I've put into developing these
              ideas. This website is part of a personal initiative I've been calling
              <span class='text-yellow-400'> "Project Ultimate" </span>—a collection of ideas and innovations that I aim to
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

    <ContainerComp id='projects' styles='flex-col bg-black/40 overflow-scroll' text='Projects'>
      <ProjectDisplay item='Project Name'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laboriosam, quia repudiandae dolorem ad consequuntur, maiores natus harum enim labore ea deserunt delectus. Cupiditate, blanditiis eos nobis perspiciatis eaque harum!</p>
      </ProjectDisplay>
    </ContainerComp>

    <ContainerComp id='contact' styles='flex-row justify-around items-center bg-black/40'>
      <ContactCard link='https://github.com/its-kshitij4444/' item='Github' hover='hover:bg-black transition-colors duration-500'>
      <LogoGithub
        color={'#fff'} 
        title={'Github'}
        height="200px"
        width="200px"
      />
      </ContactCard>
      <ContactCard link='https://linkedin.com/in/y0urstru1ykshitij' item='LinkedIn' hover='hover:bg-[#0077B5] transition-colors duration-500'>
      <LogoLinkedin
        color={'#fff'} 
        title={'LinkedIn'}
        height="200px"
        width="200px"
      />
      </ContactCard>
    </ContainerComp>
    <Navbar />
    <Footer />
    </>
  )
}