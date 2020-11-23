import React from 'react';

import Skill from './Skill';
import styles from './styles/skillCategory.module.css';

const SkillCategory = ({ skills, categoryName }) => {
  skills = skills.filter(s => s.category.categoryName === categoryName);

  return (
    <section className={styles.skillCategorySection}>
      <h3 className={styles.skillCategoryTitle}>{categoryName}</h3>
      {skills.map(s => (
        <Skill key={s.name} name={s.name} description={s.description} />
      ))}
    </section>
  );
};

export default SkillCategory;
