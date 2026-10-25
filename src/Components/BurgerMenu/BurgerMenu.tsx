import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import styles from './BurgerMenu.module.css';
import logoImg from '../../assets/logo.jpg'; 

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mainCategories = [
    { title: 'Спальня', href: '/category/bedroom', hasSubmenu: true },
    { title: 'Ліжка та матраци', href: '/category/beds-mattresses', hasSubmenu: true },
    { title: 'Ванна', href: '/category/bathroom', hasSubmenu: true },
    { title: 'Офіс', href: '/category/office', hasSubmenu: true },
    { title: 'Вітальня', href: '/category/living-room', hasSubmenu: true },
    { title: 'Кухня та їдальня', href: '/category/kitchen', hasSubmenu: true },
    { title: 'Зберігання', href: '/category/storage', hasSubmenu: true },
    { title: 'Передпокій', href: '/category/hallway', hasSubmenu: true },
    { title: 'Для вікон', href: '/category/windows', hasSubmenu: true },
    { title: 'Для саду', href: '/category/garden', hasSubmenu: true },
    { title: 'Для дому', href: '/category/home', hasSubmenu: true },
    { title: 'Різдво та Новий Рік', href: '/category/christmas', hasSubmenu: true },
  ];

  const promoCategories = [
    { title: 'Новинки', href: '/new' },
    { title: 'Акція', href: '/sale' },
    { title: 'ЗАВЖДИ НИЗЬКА ЦІНА', href: '/edlp' },
    { title: 'Outlet', href: '/outlet' },
    { title: 'Подарункова картка', href: '/gift-card' },
  ];

  const footerLinks = [
    { title: 'Натхнення', href: '/inspiration' },
    { title: 'Акційний каталог', href: '/catalog' },
    { title: 'Магазини', href: '/stores' },
    { title: 'Питання-відповідь', href: '/faq' },
    { title: 'B2B', href: '/b2b' },
  ];

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} 
        onClick={onClose}
      />

      <aside className={`${styles.menuPanel} ${isOpen ? styles.menuOpen : ''}`}>
        
        <div className={styles.header}>
          <a href="/">
            <img src={logoImg} alt="JYSK" className={styles.logo} />
          </a>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Закрити меню">
            <X size={20} strokeWidth={2} color="#111827" />
          </button>
        </div>

        <div className={styles.content}>
          <nav className={styles.navGroup}>
            {mainCategories.map((item, index) => (
              <a key={index} href={item.href} className={styles.navItem}>
                <span>{item.title}</span>
                {item.hasSubmenu && <ChevronRight size={18} strokeWidth={1.5} color="#4b5563" />}
              </a>
            ))}
          </nav>

          <nav className={styles.navGroup}>
            {promoCategories.map((item, index) => (
              <a key={`promo-${index}`} href={item.href} className={styles.navItem}>
                <span>{item.title}</span>
              </a>
            ))}
          </nav>

          <div className={styles.divider} />

          <nav className={styles.navGroup}>
            {footerLinks.map((item, index) => (
              <a key={`footer-${index}`} href={item.href} className={styles.footerLink}>
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default BurgerMenu;