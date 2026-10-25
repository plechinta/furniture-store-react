import React from 'react';
import './HeroBanner.css';

export const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner__container">
        <div className="hero-banner__wrapper">
          {/* Текстовий блок над або всередині банера */}
          <div className="hero-banner__header-text">
            <span>Грандіозний розпродаж</span>
            <h2>Знижки до 60%</h2>
          </div>
          
          {/* Фото-банер (коллаж інтер'єрів, як на макеті) */}
          <div className="hero-banner__image-container">
            <div className="hero-banner__slide">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80" 
                alt="JYSK Interior Sale" 
                className="hero-banner__img"
              />
              <div className="hero-banner__caption">
                <a href="/catalog" className="hero-banner__link-btn">Переглянути товари</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};