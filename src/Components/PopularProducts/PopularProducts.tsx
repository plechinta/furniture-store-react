import React from 'react';
import './PopularProducts.css';

// Дані карток товарів на основі структури інтернет-магазину
const products = [
  {
    id: 1,
    title: 'Стелаж TRAPPEDAL 5 полиць',
    category: 'Стелажі',
    price: '2 499 грн',
    oldPrice: '3 299 грн',
    image: 'https://images.unsplash.com/photo-1594623930572-307a309f3935?auto=format&fit=crop&w=400&q=80',
    badge: 'Знижка',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Комод VEDDE 3 шухляди',
    category: 'Комоди',
    price: '4 500 грн',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=400&q=80',
    badge: 'EDLP', // Завжди низька ціна
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Крісло JONSTRUP сіре',
    category: 'Крісла',
    price: '5 999 грн',
    oldPrice: '6 999 грн',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80',
    badge: 'Акція',
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Письмовий стіл ABBETVED',
    category: 'Столи',
    price: '3 200 грн',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80',
    badge: null,
    rating: 4.7,
  },
];

export const PopularProducts: React.FC = () => {
  return (
    <section className="popular-products">
      <div className="popular-products__container">
        <div className="popular-products__header">
          <h2 className="popular-products__title">Популярні товари</h2>
          <a href="/catalog" className="popular-products__see-all">Дивитися всі</a>
        </div>

        <div className="popular-products__grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card__image-container">
                {product.badge && (
                  <span className={`product-badge ${product.badge === 'EDLP' ? 'product-badge--edlp' : ''}`}>
                    {product.badge}
                  </span>
                )}
                <img src={product.image} alt={product.title} className="product-card__img" />
                <button className="product-card__wishlist-btn" aria-label="Додати в обране">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                    <path d="M10 16.2L8.55 14.88C3.4 10.22 0 7.14 0 3.3C0 1.44 1.44 0 3.3 0C4.34 0 5.34 0.48 6 1.25C6.66 0.48 7.66 0 8.7 0C10.56 0 12 1.44 12 3.3C12 7.14 8.6 10.22 3.45 14.88L10 16.2Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>

              <div className="product-card__content">
                <span className="product-card__category">{product.category}</span>
                <h3 className="product-card__name">
                  <a href={`/product/${product.id}`}>{product.title}</a>
                </h3>
                
                <div className="product-card__rating">
                  {'★'.repeat(Math.floor(product.rating))}
                  <span>({product.rating})</span>
                </div>

                <div className="product-card__footer">
                  <div className="product-prices">
                    <span className="current-price">{product.price}</span>
                    {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                  </div>
                  <button className="product-card__buy-btn" aria-label="Купити">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 18C6.45 18 6.01 18.45 6.01 19C6.01 19.55 6.45 20 7 20C7.55 20 8 19.55 8 19C8 18.45 7.55 18 7 18ZM17 18C16.45 18 16.01 18.45 16.01 19C16.01 19.55 16.45 20 17 20C17.55 20 18 19.55 18 19C18 18.45 17.55 18 17 18ZM1 2H3L4.27 4.6L5.4 7H15.75C16.35 7 16.89 7.34 17.13 7.87L20 13.34C20.27 13.88 19.88 14.5 19.27 14.5H5.21L4.27 16.11C4.13 16.36 3.87 16.5 3.6 16.5H19V18.5H3.6C2.45 18.5 1.55 17.6 1.55 16.45C1.55 15.95 1.75 15.48 2.07 15.11L3.1 13.25L1 4V2Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};