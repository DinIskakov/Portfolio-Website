import styles from './WorkExperienceStyles.module.css'

function WorkExperience() {
  return (
    <section id="experience" className={styles.container}>
        <h1 className='sectionTitle'>Experience</h1>
        <div className={styles.workExperienceContainer}>

          <div className={styles.individualExperience}>
            <h2>Coding Tutor</h2>
            <ul>
            <li><p>Taught 20+ students across two disciplines - web-development and Python programming</p></li>
            <li><p>Contributed to curriculum development and monitored student progress from beginner to advanced</p></li>
            {/*<li><p>Worked with students to set career goals, 
              designed custom material based on students' interests
              or connected them with the relevant professionals</p></li>*/}
            </ul>
          </div>
          <div className={styles.individualExperience}>
            <h2>Research Assistant</h2>
            <ul>
              <li><p>Studied advanced Machine Learning topics including Multiagent Reinforcement Learning</p></li>
              <li><p>Implemented a neural network based Deep Multi Agent 
                Reinforcement Learning system</p></li>
            </ul>
          </div>

          <div className={styles.individualExperience}>
            <h2>Workshop Leader</h2>
            <ul>
              <li><p>Led a group of 25 adult students through hands-on Python exercises, focusing on practical applications and skill building</p></li>
              <li><p>Offered personal help and taught necessary concepts the students didn’t cover in theory lessons</p></li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default WorkExperience