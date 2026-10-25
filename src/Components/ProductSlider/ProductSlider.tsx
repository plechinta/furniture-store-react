import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import type { Product } from '../ProductCard/ProductCard';
import styles from './ProductSlider.module.css';

interface ProductSliderProps {
    title: string;
    products: Product[];
    viewAllLink?: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products, viewAllLink }) => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {viewAllLink && (
                    <a href={viewAllLink} className={styles.viewAll}>
                        Дивитись усі
                    </a>
                )}
            </div>

            <div className={styles.grid}>
                {products.map((product) => (
                    // Оборачиваем ProductCard в div для правильной работы грида/флексбокса
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductSlider;