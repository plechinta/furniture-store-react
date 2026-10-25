import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './SortPanel.module.css';

interface SortPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SortPanel: React.FC<SortPanelProps> = ({ isOpen, onClose }) => {
  // Состояние для хранения выбранной сортировки
  const [selectedSort, setSelectedSort] = useState('Сортувати за релевантністю');

  // Массив опций согласно вашему скриншоту
  const sortOptions = [
    'Сортувати за релевантністю',
    'Спочатку найдешевші',
    'Спочатку найдорожчі',
    'Популярні'
  ];

  // Блокировка скролла основного сайта, когда панель открыта
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        
        {/* Шапка */}
        <div className={styles.header}>
          <h2 className={styles.title}>Сортувати</h2>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Закрити">
            <X size={24} color="#111827" />
          </button>
        </div>

        {/* Список опций сортировки */}
        <div className={styles.content}>
          {sortOptions.map((option) => (
            <label key={option} className={styles.sortOption}>
              <span className={styles.sortText}>{option}</span>
              
              {/* Кастомная радио-кнопка (синий кружочек) */}
              <div className={`${styles.radioCircle} ${selectedSort === option ? styles.radioSelected : ''}`}>
                {selectedSort === option && <div className={styles.radioInner} />}
              </div>
              
              {/* Скрытый инпут для логики */}
              <input
                type="radio"
                name="sort"
                value={option}
                checked={selectedSort === option}
                onChange={() => setSelectedSort(option)}
                className={styles.hiddenRadio}
              />
            </label>
          ))}
        </div>

        {/* Подвал */}
        <div className={styles.footer}>
          <button className={styles.clearBtn} onClick={onClose}>Прибрати все</button>
          <button className={styles.applyBtn} onClick={onClose}>Показати 45 результатів</button>
        </div>

      </div>
    </>
  );
};

export default SortPanel;