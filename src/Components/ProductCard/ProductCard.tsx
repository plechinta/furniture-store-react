import React from 'react';
import { Heart, Star } from 'lucide-react';
import styles from './ProductCard.module.css';
import SHAFA from '../../assets/SHAFA.png';

export interface Product {
  id: string;
  series: string;       // Название серии (FANDRUP, KARLSTAD и т.д.)
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  qualityLevel?: string; // Уровень качества (Gold, Plus и т.д.)
  rating: number;        // От 1 до 5
  storesCount: number;   // Количество магазинов в наличии
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const hasDiscount = !!product.oldPrice;

  // Массив всех возможных маркеров (отображаем все сразу по вашей просьбе)
  const allBadges = [
    { text: 'ЗАВЖДИ НИЗЬКА ЦІНА', className: styles.badgeBlack },
    { text: '-50%', className: styles.badgeRed },
    { text: 'Чудова пропозиція', className: styles.badgeBlue },
    { text: 'Новинка', className: styles.badgeTeal },
    { text: 'Акція', className: styles.badgeOrange },
    { text: 'До Останньої Одиниці На Складі', className: styles.badgeGrey }
  ];

  return (
    <div className={styles.card}>
      
      {/* Контейнер с изображением и маркерами */}
      <div className={styles.imageContainer}>
        <button className={styles.favoriteBtn} aria-label="Додати в обране">
          <Heart size={24} strokeWidth={1.5} color="#000" />
        </button>
        
        <img src={SHAFA} alt={product.title} className={styles.image} />
        
        {/* Вывод всех маркеров в левом нижнем углу */}
        <div className={styles.badgesContainer}>
          {allBadges.map((badge, idx) => (
            <span key={idx} className={`${styles.badge} ${badge.className}`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      {/* Текстовый контент карточки */}
      <div className={styles.content}>
        
        {/* Название серии и качество */}
        <div className={styles.seriesRow}>
          <span className={styles.seriesName}>{product.series}</span>
          {product.qualityLevel && (
            <span className={styles.qualityBadge}>{product.qualityLevel}</span>
          )}
        </div>
        
        <h3 className={styles.title}>{product.title}</h3>
        
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              strokeWidth={1}
              fill={i < Math.floor(product.rating) ? "#000" : "none"} 
              color="#000"
            />
          ))}
        </div>
        
        {/* Блок цены */}
        <div className={styles.priceContainer}>
          <div className={styles.currentPriceRow}>
            <span className={`${styles.currentPrice} ${hasDiscount ? styles.priceRed : styles.priceBlack}`}>
              {product.price} грн.
            </span>
            <span className={styles.priceUnit}>/шт</span>
          </div>
          
          {hasDiscount && (
            <div className={styles.oldPriceRow}>
              <span className={styles.oldPrice}>{product.oldPrice} грн. /шт</span>
            </div>
          )}
        </div>

        {/* Наличие и доставка */}
        <div className={styles.availability}>
          <div className={styles.availabilityRow}>
            <span className={styles.greenDot}></span>
            <span className={styles.availabilityText}>Доступно для доставки</span>
          </div>
          <div className={styles.availabilityRow}>
            <span className={styles.greenDot}></span>
            <span className={styles.availabilityText}>
              В наявності у <a href="#" className={styles.storeLink}>{product.storesCount} магазинах</a>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;