import React from 'react';
import './CategoryQuickNav.css';

const categories = [
  { id: 1, title: 'Вітальня', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80', link: '/living-room' },
  { id: 2, title: 'Спальня', image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=300&q=80', link: '/bedroom' },
  { id: 3, title: 'Офіс', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=300&q=80', link: '/office' },
  { id: 4, title: 'Їдальня', image: 'https://images.unsplash.com/photo-1617806118233-18e1c0c6628f?auto=format&fit=crop&w=300&q=80', link: '/dining' },
];

export const CategoryQuickNav: React.FC = () => {
  return (
    <section className="category-quick-nav">
      <div className="category-quick-nav__container">
        {categories.map((cat) => (
          <a key={cat.id} href={cat.link} className="category-quick-card">
            <div className="category-quick-card__image-wrap">
              <img src={cat.image} alt={cat.title} className="category-quick-card__img" />
            </div>
            <span className="category-quick-card__title">{cat.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
};