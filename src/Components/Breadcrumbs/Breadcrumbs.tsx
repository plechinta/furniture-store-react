import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string; // Робимо необов'язковим, бо останній елемент часто не є посиланням
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className={styles.breadcrumbContainer} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.listItem}>
              {/* Якщо це не останній елемент і є href — робимо посилання */}
              {!isLast && item.href ? (
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              ) : (
                /* Останній елемент (поточна сторінка) відображається просто текстом */
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              )}

              {/* Розділювач (шеврон) між елементами, крім останнього */}
              {!isLast && (
                <span className={styles.separator}>
                  <ChevronRight size={12} strokeWidth={2} color="#6b7280" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;