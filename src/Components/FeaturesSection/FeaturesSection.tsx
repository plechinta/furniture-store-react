import React from 'react';
import './FeaturesSection.css';

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: '1',
    icon: '🚚',
    title: 'Швидка доставка',
    description: 'Доставка по всій країні у найкоротші терміни',
  },
  {
    id: '2',
    icon: '🛡️',
    title: 'Гарантія якості',
    description: 'Тільки сертифіковані та перевірені товари',
  },
  {
    id: '3',
    icon: '💳',
    title: 'Зручна оплата',
    description: 'Готівковий та безготівковий розрахунок',
  },
  {
    id: '4',
    icon: '💬',
    title: 'Підтримка 24/7',
    description: 'Завжди готові відповісти на ваші запитання',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {features.map((item) => (
            <div key={item.id} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <div className="feature-content">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;