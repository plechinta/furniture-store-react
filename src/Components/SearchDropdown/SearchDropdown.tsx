import React from 'react';
import styles from './SearchDropdown.module.css';

interface ViewedItem {
  id: string;
  image: string;
  href: string;
}

interface SearchDropdownProps {
  isVisible: boolean;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  // Мокові дані для "Нещодавно переглянуто"
  // Замініть шляхи на ваші реальні картинки
  const recentlyViewed: ViewedItem[] = [
    { id: '1', image: '/images/recent1.jpg', href: '/product/1' },
    { id: '2', image: '/images/recent2.jpg', href: '/product/2' },
    { id: '3', image: '/images/recent3.jpg', href: '/product/3' },
    { id: '4', image: '/images/recent4.jpg', href: '/product/4' },
    { id: '5', image: '/images/recent5.jpg', href: '/product/5' },
    { id: '6', image: '/images/recent6.jpg', href: '/product/6' },
    { id: '7', image: '/images/recent7.jpg', href: '/product/7' },
    { id: '8', image: '/images/recent8.jpg', href: '/product/8' },
  ];

  return (
    <div className={styles.dropdownContainer}>
      <h4 className={styles.title}>Нещодавно переглянуто</h4>
      
      <div className={styles.itemsScroll}>
        {recentlyViewed.map((item) => (
          <a key={item.id} href={item.href} className={styles.itemCard}>
            <img src={item.image} alt="Переглянутий товар" className={styles.itemImage} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;