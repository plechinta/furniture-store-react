import React from 'react';
import styles from '../CategoryGrid/CategoryGrid.module.css';

// Імпортуємо картинку-заглушку з папки assets
// (шлях може відрізнятися залежно від глибини папки компонента)
import catBedImg from '../../assets/CatBed.png';

export interface CategoryData {
  id: string;
  title: string;
  href: string;
}

const CategorySection: React.FC<{ category: CategoryData }> = ({ category }) => {
  return (
    <a href={category.href} className={styles.categorySection}>
      <div className={styles.imageWrapper}>
        <img src={catBedImg} alt={category.title} className={styles.image} />
      </div>
      <div className={styles.itemTitle}>{category.title}</div>
    </a>
  );
};

export default CategorySection;