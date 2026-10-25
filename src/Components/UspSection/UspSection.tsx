import React from 'react';
import './UspSection.css';

// Дані взяті безпосередньо з figma-layout_2.json
const uspItems = [
  {
    id: 1,
    title: '47 РОКІВ ЧУДОВИХ ПРОПОЗИЦІЙ',
    subtitle: 'Вже більше 3600 магазинів у 49 країнах.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    link: '/about-us'
  },
  {
    id: 2,
    title: 'СКАНДИНАВСЬКЕ КОРІННЯ',
    subtitle: 'Ми пишаємося своїм скандинавським корінням. Початок - Данія, 1979.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="9" y1="4" x2="9" y2="20" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
    link: '/scandinavian-roots'
  },
  {
    id: 3,
    title: 'B2B',
    subtitle: 'Чудова пропозиція для вашої компанії',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    link: '/b2b'
  },
  {
    id: 4,
    title: 'Натхнення',
    subtitle: 'Створіть дім мрії',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    link: '/inspiration'
  }
];

export const UspSection: React.FC = () => {
  return (
    <section className="usp-section">
      <div className="usp-section__container">
        {uspItems.map((item) => (
          <a key={item.id} href={item.link} className="usp-card">
            <div className="usp-card__icon">
              {item.icon}
            </div>
            <div className="usp-card__text">
              <h3 className="usp-card__title">{item.title}</h3>
              <p className="usp-card__subtitle">{item.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};