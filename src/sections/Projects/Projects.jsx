import styles from './ProjectStyles.module.css'

import projectCode from '../../assets/projectCode.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={projectCode} 
                link={'https://github.com'}
                h3="Data Analysis Dashboard"
                p="A tool for analysts to help decode their data"
                className={styles.description}
                />
            <ProjectCard 
                src={projectCode} 
                link={'https://github.com'}
                h3="Battleships"
                p="A web app game"
                />
            <ProjectCard 
                src={projectCode} 
                link={'https://github.com'}
                h3="ML Engineering"
                p="Machine learning project"
                />
            
        </div>
    </section>
  )
}

export default Projects