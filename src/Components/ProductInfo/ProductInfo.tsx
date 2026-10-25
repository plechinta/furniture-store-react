import React, { useState, useEffect } from 'react';
import { Heart, Star, Check, Info, RefreshCcw, ShieldCheck, Truck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProductInfo.module.css';

interface ProductInfoProps {
  images: string[];
  series: string;
  title: string;
  rating: number;
  reviewsCount: number;
  price: number;
  badge?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  images,
  series,
  title,
  rating,
  reviewsCount,
  price,
  badge,
}) => {
  // Логика покупки
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [quantity, setQuantity] = useState(1);

  // Логика полноэкранной галереи (лайтбокса)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleAddToCart = () => {
    console.log(`Додано до кошика: ${quantity} шт., метод: ${deliveryMethod}`);
  };

  // Функции для лайтбокса
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset'; // Возвращаем скролл
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Чтобы клик не закрыл галерею
    setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  // Очистка скролла при размонтировании компонента
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        
        {/* ЛЕВАЯ КОЛОНКА: Галерея картинок */}
        <div className={styles.leftColumn}>
          <div className={styles.galleryGrid}>
            {images.map((image, index) => (
              <div 
                key={index} 
                className={styles.imageWrapper}
                onClick={() => openLightbox(index)} // Открываем картинку по клику
              >
                {index === 0 && badge && (
                  <span className={styles.badge}>{badge}</span>
                )}
                <img src={image} alt={`Фото товару ${index + 1}`} className={styles.image} />
              </div>
            ))}
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: Вся информация и покупка */}
        <div className={styles.rightColumn}>
          
          {/* Заголовок и цена */}
          <div className={styles.topRow}>
            <div>
              <h1 className={styles.series}>{series}</h1>
              <h2 className={styles.title}>{title}</h2>
            </div>
            <button className={styles.favoriteBtn} aria-label="Додати в обране">
              <Heart size={24} strokeWidth={1.5} color="#111827" />
            </button>
          </div>

          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(rating) ? "#111827" : "none"} 
                  color="#111827"
                  strokeWidth={1}
                />
              ))}
            </div>
            <a href="#reviews" className={styles.reviewsLink}>({reviewsCount})</a>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>{price} грн.</span>
            <span className={styles.unit}>/шт</span>
          </div>

          {/* Выбор доставки */}
          <h3 className={styles.deliveryTitle}>Доставка чи самовивіз?</h3>
          
          <div className={styles.deliveryOptions}>
            <div 
              className={`${styles.optionCard} ${deliveryMethod === 'delivery' ? styles.optionActive : ''}`}
              onClick={() => setDeliveryMethod('delivery')}
            >
              <div className={styles.optionContent}>
                <span className={styles.optionName}>Доставка</span>
                <div className={styles.statusRow}>
                  <span className={styles.greenDot}></span>
                  <span className={styles.statusText}>Доступний до замовлення</span>
                </div>
              </div>
              {deliveryMethod === 'delivery' && (
                <div className={styles.checkCircle}>
                  <Check size={14} strokeWidth={3} color="#fff" />
                </div>
              )}
            </div>

            <div 
              className={`${styles.optionCard} ${deliveryMethod === 'pickup' ? styles.optionActive : ''}`}
              onClick={() => setDeliveryMethod('pickup')}
            >
              <div className={styles.optionContent}>
                <span className={styles.optionName}>Замов та Забери</span>
                <div className={styles.statusRow}>
                  <span className={styles.greenDot}></span>
                  <span className={styles.statusText}>
                    В наявності у <a href="#stores" className={styles.link}>115 магазинах</a>
                  </span>
                </div>
                <p className={styles.subText}>Безкоштовна послуга, замовлення готове до видачі за 30 хвилин</p>
              </div>
              {deliveryMethod === 'pickup' && (
                <div className={styles.checkCircle}>
                  <Check size={14} strokeWidth={3} color="#fff" />
                </div>
              )}
            </div>
          </div>

          {/* Счетчик и кнопка */}
          <div className={styles.cartRow}>
            <div className={styles.quantityWrapper}>
              <span className={styles.quantityLabel}>Кількість</span>
              <div className={styles.counter}>
                <button onClick={handleDecrease} className={styles.counterBtn}>-</button>
                <input type="text" value={quantity} readOnly className={styles.counterInput} />
                <button onClick={handleIncrease} className={styles.counterBtn}>+</button>
              </div>
            </div>
            
            <button onClick={handleAddToCart} className={styles.addToCartBtn}>
              Додати до кошика
            </button>
          </div>

          {/* Инфо и преимущества */}
          <div className={styles.storeExhibition}>
            <Info size={18} color="#6b7280" />
            <a href="#exhibition" className={styles.link}>На виставці у 116 магазинах</a>
          </div>

          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <RefreshCcw size={20} strokeWidth={1.5} className={styles.benefitIcon} />
              <div>
                <div className={styles.benefitTitle}>Повернення без обмежень</div>
                <div className={styles.benefitDesc}>Без часових обмежень - повертайте в будь-якому магазині JYSK</div>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <ShieldCheck size={20} strokeWidth={1.5} className={styles.benefitIcon} />
              <div>
                <div className={styles.benefitTitle}>Гарантія ціни</div>
                <div className={styles.benefitDesc}>30 днів гарантії ціни на всі товари</div>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <Truck size={20} strokeWidth={1.5} className={styles.benefitIcon} />
              <div>
                <div className={styles.benefitTitle}>Різні варіанти доставки</div>
                <div className={styles.benefitDesc}>Швидка та зручна доставка на ваш вибір</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ПОЛНОЭКРАННЫЙ ЛАЙТБОКС */}
      {lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          {/* Кнопка закрытия */}
          <button className={styles.lightboxCloseBtn} onClick={closeLightbox} aria-label="Закрити">
            <X size={32} strokeWidth={1.5} color="#111827" />
          </button>

          {/* Кнопка Назад */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={showPrevImage}>
            <ChevronLeft size={32} strokeWidth={1.5} color="#111827" />
          </button>

          {/* Сама картинка */}
          <img 
            src={images[lightboxIndex]} 
            alt="Fullscreen" 
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()} // Клик по самой картинке не закрывает галерею
          />

          {/* Кнопка Вперед */}
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={showNextImage}>
            <ChevronRight size={32} strokeWidth={1.5} color="#111827" />
          </button>

          {/* Индикаторы (точки) внизу */}
          <div className={styles.dotsContainer}>
            {images.map((_, idx) => (
              <span 
                key={idx}
                className={`${styles.dot} ${idx === lightboxIndex ? styles.activeDot : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(idx);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;