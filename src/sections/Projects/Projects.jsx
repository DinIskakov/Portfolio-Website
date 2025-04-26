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
                link={'https://github.com/DinIskakov/Data-Analysis-Dashboard'}
                h3="Data Analysis Dashboard"
                p="A tool for analysts to help decode their data"
                className={styles.description}
                />
            <ProjectCard 
                src={projectCode} 
                link={'https://github.com/DinIskakov/CalendarAI'}
                h3="AI Calendar Assistant"
                p="An AI-powered calendar assistant that helps you manage your schedule"
                />
            <ProjectCard 
                src={projectCode} 
                link={'https://github.com/DinIskakov/Customer-Churn'}
                h3="Customer Churn Prediction"
                p="Machine learning project to predict whether the customer will stop paying for the service"
                />
            
        </div>
    </section>
  )
}

export default Projects