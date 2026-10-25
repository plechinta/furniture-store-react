import React from 'react';
import styles from './HeroSection.module.css';

// Описываем тип для карточек под баннером
interface QuickLink {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
}

// Данные для 4 маленьких картинок
const quickLinks: QuickLink[] = [
  { 
    id: '1', 
    title: 'Вітальня', 
    imageSrc: '/images/living-room.jpg', 
    href: '/category/living-room' 
  },
  { 
    id: '2', 
    title: 'Спальня', 
    imageSrc: '/images/bedroom.jpg', 
    href: '/category/bedroom' 
  },
  { 
    id: '3', 
    title: 'Робочий кабінет', 
    imageSrc: '/images/office.jpg', 
    href: '/category/office' 
  },
  { 
    id: '4', 
    title: 'Колесо фортуни', 
    imageSrc: '/images/fortune-wheel.jpg', 
    href: '/campaign/fortune' 
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      
      {/* 1. Одна большая картинка (Баннер) */}
      <div className={styles.mainBanner}>
        <a href="/sale">
          <img 
            src="/images/main-banner.jpg" 
            alt="Грандіозний розпродаж — знижки до 60%" 
          />
        </a>
      </div>

      {/* 2. 4 маленькие картинки с текстом под ними */}
      <div className={styles.quickLinksGrid}>
        {quickLinks.map((link) => (
          <a key={link.id} href={link.href} className={styles.quickLinkCard}>
            <div className={styles.imageWrapper}>
              <img 
                src={link.imageSrc} 
                alt={link.title} 
              />
            </div>
            <span className={styles.quickLinkTitle}>{link.title}</span>
          </a>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;