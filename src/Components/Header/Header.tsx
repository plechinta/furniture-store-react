import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Heart, User, ShoppingCart, MapPin, ChevronDown } from 'lucide-react';
import BurgerMenu from '../BurgerMenu/BurgerMenu'; 
import SearchDropdown from '../SearchDropdown/SearchDropdown';
import styles from './Header.module.css';
import logoImg from '../../assets/logo.jpg'; 

interface HeaderProps {
  topBannerText?: string;
  cartItemsCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  topBannerText = 'Дні меблів - Знижки до 60% >',
  cartItemsCount = 0,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Реф для отслеживания кликов вне области поиска
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Ссылки для нижнего ряда шапки
  const secondaryLinks = [
    { title: 'Натхнення', href: '/inspiration' },
    { title: 'Акційний каталог', href: '/catalog' },
    { title: 'Магазини', href: '/stores' },
    { title: 'Питання-відповідь', href: '/faq' },
    { title: 'B2B', href: '/b2b' },
    { title: 'Робота', href: '/career' },
  ];

  // Эффект для закрытия поиска при клике в любое другое место экрана
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Затемненный фон, который появляется только при клике на поиск */}
      <div 
        className={`${styles.searchOverlay} ${isSearchFocused ? styles.searchOverlayVisible : ''}`}
      />

      <header className={`${styles.header} ${isSearchFocused ? styles.headerActive : ''}`}>
        {/* 1. Верхняя темно-синяя полоса */}
        <div className={styles.topBanner}>
          <a href="/sale" className={styles.topBannerLink}>
            {topBannerText}
          </a>
        </div>

        {/* 2. Основной (центральный) ряд шапки */}
        <div className={styles.mainRow}>
          
          {/* Логотип и кнопка Бургер-меню */}
          <div className={styles.logoAndMenu}>
            <a href="/" className={styles.logoLink}>
              <img src={logoImg} alt="JYSK" className={styles.logo} />
            </a>
            <button 
              className={styles.burgerBtn} 
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
              <span className={styles.burgerText}>Меню</span>
            </button>
          </div>

          {/* Строка поиска с логикой фокуса и выпадающим меню */}
          <div 
            className={`${styles.searchContainer} ${isSearchFocused ? styles.searchContainerFocused : ''}`}
            ref={searchContainerRef}
          >
            <input
              type="text"
              placeholder="Шукати товар або категорію..."
              className={styles.searchInput}
              onFocus={() => setIsSearchFocused(true)}
            />
            <button type="button" className={styles.searchBtn} aria-label="Шукати">
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Выпадающее меню с историей просмотра */}
            <SearchDropdown isVisible={isSearchFocused} />
          </div>

          {/* Иконки действий */}
          <div className={styles.actionsContainer}>
            <a href="/favorites" className={styles.actionItem}>
              <Heart size={20} strokeWidth={1.5} />
              <span>Обране</span>
            </a>
            <a href="/login" className={styles.actionItem}>
              <User size={20} strokeWidth={1.5} />
              <span>Вхід</span>
            </a>
            <a href="/cart" className={styles.actionItem}>
              <div className={styles.cartIconWrapper}>
                <ShoppingCart size={20} strokeWidth={1.5} />
                {cartItemsCount > 0 && (
                  <span className={styles.badge}>{cartItemsCount}</span>
                )}
              </div>
              <span>Кошик</span>
            </a>
          </div>
        </div>

        {/* 3. Нижний ряд шапки (Локация и ссылки) */}
        <div className={styles.secondaryRow}>
          <button className={styles.locationBtn}>
            <MapPin size={16} strokeWidth={2} />
            <span>Виберіть магазин JYSK</span>
            <ChevronDown size={16} strokeWidth={2} />
          </button>

          <nav className={styles.secondaryNav}>
            {secondaryLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.secondaryLink}>
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Вызов компонента BurgerMenu */}
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;