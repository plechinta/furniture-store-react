import React from 'react';
import styles from './CategoryGrid.module.css';
import CategorySection, { type CategoryData } from '../CategoriesSection/CategoriesSection'; // Використовуємо type-only імпорт для інтерфейсу

const categoriesData: CategoryData[] = [
  { id: '1', title: 'Спальня', href: '/category/bedroom' },
  { id: '2', title: 'Ванна', href: '/category/bathroom' },
  { id: '3', title: 'Офіс', href: '/category/office' },
  { id: '4', title: 'Вітальня', href: '/category/living-room' },
  { id: '5', title: 'Кухня та їдальня', href: '/category/kitchen' },
  { id: '6', title: 'Зберігання', href: '/category/storage' },
  { id: '7', title: 'Для вікон', href: '/category/windows' },
  { id: '8', title: 'Для саду', href: '/category/garden' },
  { id: '9', title: 'Для дому', href: '/category/home' },
  { id: '10', title: 'Передпокій', href: '/category/hallway' },
  { id: '11', title: 'Чудові пропозиції', href: '/offers' },
  { id: '12', title: 'ЗАВЖДИ НИЗЬКА ЦІНА', href: '/edlp' },
  { id: '13', title: 'Подарункова картка', href: '/gift-cards' },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Категорії товарів</h2>
      
      <div className={styles.grid}>
        {categoriesData.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;