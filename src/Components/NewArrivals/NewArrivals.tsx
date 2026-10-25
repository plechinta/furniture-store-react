import React from 'react';
import './NewArrivals.css';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  isNew: boolean;
  link: string;
}

const newProducts: Product[] = [
  { id: '1', title: 'Сучасне крісло Lounge', price: 7490, image: '/images/prod-chair.jpg', isNew: true, link: '/product/1' },
  { id: '2', title: 'Журнальний столик Loft', price: 3200, image: '/images/prod-table.jpg', isNew: true, link: '/product/2' },
  { id: '3', title: 'Торшер Minimalist', price: 1850, image: '/images/prod-lamp.jpg', isNew: true, link: '/product/3' },
  { id: '4', title: 'Комод з дерева', price: 12400, image: '/images/prod-dresser.jpg', isNew: true, link: '/product/4' },
];

export const NewArrivals: React.FC = () => {
  return (
    <section className="new-arrivals-section">
      <div className="new-arrivals-container">
        <div className="section-header">
          <h2 className="section-title">Новинки каталогу</h2>
          <a href="/catalog/new" className="section-link">Дивитися всі</a>
        </div>
        <div className="products-grid">
          {newProducts.map((product) => (
            <div key={product.id} className="product-card">
              <a href={product.link} className="product-image-link">
                <div className="product-image-wrap">
                  {product.isNew && <span className="badge-new">New</span>}
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
              </a>
              <div className="product-info">
                <h3 className="product-title">
                  <a href={product.link}>{product.title}</a>
                </h3>
                <span className="product-price">{product.price} грн</span>
                <button className="add-to-cart-btn">У кошик</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;