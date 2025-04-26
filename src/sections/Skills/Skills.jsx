import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/skillList'

import { useTheme } from '../../common/ThemeContext'




function Skills() {
  const {theme} = useTheme();

  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
            <SkillList src={checkMarkIcon} skill="Python"></SkillList>
            <SkillList src={checkMarkIcon} skill="ML"></SkillList>
            <SkillList src={checkMarkIcon} skill="AI"></SkillList>
            <SkillList src={checkMarkIcon} skill="HTML"></SkillList>
            <SkillList src={checkMarkIcon} skill="CSS"></SkillList>
            <SkillList src={checkMarkIcon} skill="SQL"></SkillList>

        </div>
    </section>
  )
}
export default Skills; 