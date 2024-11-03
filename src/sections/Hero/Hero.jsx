import styles from './HeroStyles.module.css'
import heroimg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}  
                src={heroimg} 
                alt = "Profile picture"
            />
            <img className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
          <h1>
            Din
            <br/>
            Iskakov
          </h1>
          <h2>Software Engineer</h2>
          <span>
            <a href='https://github.com/' target="_blank">
              <img src={githubIcon} alt='Github icon'/>
            </a>
            <a href='https://linkedin.com/' target="_blank">
              <img src={linkedinIcon} alt='Linkedin icon'/>
            </a>
          </span>
          <p className={styles.description}>
            2nd year Computer Science student driven to explore and apply knowledge across different programming fields
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
    </section>
  )
}
export default Hero