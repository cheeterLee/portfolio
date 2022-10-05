import type { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import CollegeExperience from '../components/CollegeExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Link from 'next/link'
import { Experience, PageInfo, Skill, Social, Project  } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Cheeter's Portfolio</title>
      </Head>
      
      <Header socials={socials} />
      
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      
      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <CollegeExperience />
      </section>
      
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="https://user-images.githubusercontent.com/87960642/193728023-95749f4d-fca0-4aca-b50d-070b34d06e50.png" 
              alt=""
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 1000,
  }
}