import React from 'react';
import styles from './Navbar.module.css';

// Типизация для пункта меню
interface CategoryItem {
  id: string;
  title: string;
  href: string;
}

// Массив с нашими категориями (в реальном проекте может приходить с сервера)
const categories: CategoryItem[] = [
  { id: '1', title: 'Усі товари', href: '/all' },
  { id: '2', title: 'Кімнати', href: '/rooms' },
  { id: '3', title: 'Меблі', href: '/furniture' },
  { id: '4', title: 'Сад', href: '/garden' },
  { id: '5', title: 'Спальня', href: '/bedroom' },
  { id: '6', title: 'Ванна кімната', href: '/bathroom' },
  { id: '7', title: 'Офіс', href: '/office' },
  { id: '8', title: 'Штори', href: '/curtains' },
  { id: '9', title: 'Декор', href: '/decor' },
  { id: '10', title: 'Освітлення', href: '/lighting' },
];

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.menuList}>
          {categories.map((category) => (
            <li key={category.id} className={styles.menuItem}>
              <a href={category.href} className={styles.menuLink}>
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;