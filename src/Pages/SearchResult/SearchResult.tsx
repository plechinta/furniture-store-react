import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Breadcrumbs, { type BreadcrumbItem } from '../../Components/Breadcrumbs/Breadcrumbs';
import FilterPanel from '../../Components/FilterPanel/FilterPanel';
import SortPanel from '../../Components/SortPanel/SortPanel';
import ProductCard, { type Product } from '../../Components/ProductCard/ProductCard'; // Импортируем компонент и тип Product
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import styles from './SearchResult.module.css';

import sofaIcon from '../../assets/226903.jpg';

function SearchResult() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const breadcrumbData: BreadcrumbItem[] = [
        { label: 'Домашня сторінка', href: '/' },
        { label: 'Вітальня', href: '/living-room' },
        { label: 'Дивани' }
    ];

    // Массив товаров, строго соответствующих интерфейсу Product из ProductCard.tsx
    const products: Product[] = [
        {
            id: '1',
            series: 'FALSLEV',
            title: 'Диван кутовий FALSLEV оливк. зелений',
            image: sofaIcon,
            price: 17500,
            oldPrice: 22999,
            qualityLevel: 'Gold',
            rating: 4,
            storesCount: 15
        },
        {
            id: '2',
            series: 'FALSLEV',
            title: 'Диван кутовий FALSLEV сірий тканина',
            image: sofaIcon,
            price: 17500,
            oldPrice: 22999,
            qualityLevel: 'Gold',
            rating: 5,
            storesCount: 42
        },
        {
            id: '3',
            series: 'FALSLEV',
            title: 'Диван кутовий FALSLEV чорний',
            image: sofaIcon,
            price: 18500,
            oldPrice: 24999,
            qualityLevel: 'Gold',
            rating: 4,
            storesCount: 8
        },
        {
            id: '4',
            series: 'FALSLEV',
            title: 'Диван FALSLEV 2-шт. сірий',
            image: sofaIcon,
            price: 23000,
            oldPrice: 25999,
            qualityLevel: 'Plus',
            rating: 5,
            storesCount: 3
        },
        {
            id: '5',
            series: 'FALSLEV',
            title: 'Диван FALSLEV 3-м. чорний шт.шкіра',
            image: sofaIcon,
            price: 26999,
            qualityLevel: 'Gold',
            rating: 0,
            storesCount: 11
        },
        {
            id: '6',
            series: 'GLOSTRUP',
            title: 'Диван GLOSTRUP 2-місний кремовий тедді',
            image: sofaIcon,
            price: 10000,
            oldPrice: 12000,
            qualityLevel: 'Basic',
            rating: 4.5,
            storesCount: 12
        },
        {
            id: '7',
            series: 'GEDVED',
            title: 'Диван GEDVED 2-місний світло-сірий',
            image: sofaIcon,
            price: 11000,
            qualityLevel: 'Plus',
            rating: 4,
            storesCount: 27
        },
        {
            id: '8',
            series: 'GEDVED',
            title: 'Диван GEDVED 2-місний сірий',
            image: sofaIcon,
            price: 11000,
            qualityLevel: 'Plus',
            rating: 4.5,
            storesCount: 18
        }
    ];

    return (
        <>
            <Header />
            <Breadcrumbs items={breadcrumbData} />

            <main className={styles.mainContainer}>
                <section className={styles.headerSection}>
                    <h1 className={styles.title}>Сучасні дивани для дому та офісу</h1>
                    <p className={styles.description}>
                        Диван є одним із головних елементів вітальні, зони відпочинку або робочого простору. В JYSK представлені дивани різних розмірів і форматів: від компактних моделей для невеликих кімнат до просторих рішень для всієї родини... <a href="#more" className={styles.link}>Переглянути</a>
                    </p>

                    <div className={styles.subcategories}>
                        <div className={styles.subcatItem}>
                            <div className={styles.subcatImageWrapper}>
                                <img src={sofaIcon} alt="Дивани розкладні" />
                            </div>
                            <span>Дивани розкладні</span>
                        </div>
                        <div className={styles.subcatItem}>
                            <div className={styles.subcatImageWrapper}>
                                <img src={sofaIcon} alt="Модульні дивани" />
                            </div>
                            <span>Модульні дивани</span>
                        </div>
                    </div>
                </section>

                {/* Панель инструментов */}
                <section className={styles.toolbar}>
                    <div className={styles.toolbarLeft}>
                        <button className={styles.filterBtn}>Ціна (грн.) <ChevronDown size={16} /></button>
                        <button className={styles.filterBtn}>Тип софи <ChevronDown size={16} /></button>
                        <button className={styles.filterBtn}>Ширина (см) <ChevronDown size={16} /></button>

                        <button className={styles.filterBtn} onClick={() => setIsSortOpen(true)}>
                            Сортувати <ChevronDown size={16} />
                        </button>

                        <div className={styles.divider}></div>

                        <button className={styles.allFiltersBtn} onClick={() => setIsFilterOpen(true)}>
                            <SlidersHorizontal size={16} /> Всі фільтри
                        </button>
                    </div>

                    <div className={styles.toolbarRight}>
                        <span className={styles.resultsCount}>45 товарів</span>
                        <label className={styles.toggleLabel}>
                            Товари в акції
                            <input type="checkbox" className={styles.toggleSwitch} />
                        </label>
                    </div>
                </section>

                {/* Сетка товаров */}
                <section className={styles.productGrid}>
                    <div className={styles.grid}>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />

            <FilterPanel
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
            />

            <SortPanel
                isOpen={isSortOpen}
                onClose={() => setIsSortOpen(false)}
            />
        </>
    );
}

export default SearchResult;