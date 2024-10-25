import styles from './WorkExperienceStyles.module.css'

function WorkExperience() {
  return (
    <section id="experience" className={styles.container}>
        <h1 className='sectionTitle'>Experience</h1>
        <div className={styles.workExperienceContainer}>

          <div className={styles.individualExperience}>
            <h2>Coding Tutor</h2>
            <ul>
            <li><p>Instructed 10+ students in 2 different 
              fields - web-development and python</p></li>
            <li><p>Involved in curriculum development and monitored student 
              progress</p></li>
            <li><p>Brainstormed with students in setting career goals, 
            designing customized materials
            based on student interest or connecting them with the
            relevant professionals</p></li>
            </ul>
          </div>

          <div className={styles.individualExperience}>
            <h2>Research Assistant</h2>
            <ul>
              <li><p>Study advanced machine learning topics including 
                MultiAgent Reinforment Learning</p></li>
              <li><p>Implemented a neural network based Deep Multi Agent 
                Reinforcement Learning system</p></li>
            </ul>
          </div>

          <div className={styles.individualExperience}>
            <h2>Workshop Leader</h2>
            <ul>
              <li><p>Guided a group of 25 adults through hands on experience in Python 
                via a series of exercises</p></li>
              <li><p>Offered personal help and taught necessary concepts the students
                didn't cover in the theoretical class</p></li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default WorkExperience