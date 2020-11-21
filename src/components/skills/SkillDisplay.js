import React from 'react';

import SkillCategory from './SkillCategory';

const SkillDisplay = ({ skills }) => {
  const categories = skills.map(s => s.category.categoryName);
  const uniqueCategories = [...new Set(categories)].sort();

  return uniqueCategories.map(cat => (
    <SkillCategory key={cat} categoryName={cat} skills={skills} />
  ));
};

export default SkillDisplay;
