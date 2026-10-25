import React from 'react';
import './PromoBanner.css';

export const PromoBanner: React.FC = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        <div className="promo-content">
          <span className="promo-subtitle">Знижка сезону</span>
          <h2 className="promo-title">Знижки до -30% на колекцію для спальні</h2>
          <p className="promo-description">
            Оновіть свій інтер'єр за найкращими цінами. Комфорт, затишок та сучасний дизайн для вашого дому.
          </p>
          <a href="/catalog/sale" className="promo-button">
            Переглянути акцію
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;