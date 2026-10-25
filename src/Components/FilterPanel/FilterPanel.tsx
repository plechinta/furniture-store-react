import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import styles from './FilterPanel.module.css';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'Ціна (грн.)': true,
  });

  const MIN_LIMIT = 0;
  const MAX_LIMIT = 50000;
  const [minPrice, setMinPrice] = useState(9500);
  const [maxPrice, setMaxPrice] = useState(38000);

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev => ({ ...prev, [sectionName]: !prev[sectionName] }));
  };

  // Правильная логика для двойного ползунка, чтобы они не заходили друг за друга
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value);
  };

  const minPercent = ((minPrice - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100;
  const maxPercent = ((maxPrice - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filtersData = [
    { title: 'Тип софи', type: 'checkbox', options: [{ label: 'Розкладний', count: 15 }, { label: 'Модульний', count: 8 }] },
    { title: 'Ширина (см)', type: 'empty' },
    { title: 'Висота (см)', type: 'empty' },
    { title: 'Колір', type: 'checkbox', options: [{ label: 'Сірий', count: 18 }, { label: 'Чорний', count: 5 }] },
    { title: 'Статус запасів', type: 'empty' },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Фільтри</h2>
          <button onClick={onClose} className={styles.closeBtn}><X size={24} color="#111827" /></button>
        </div>

        <div className={styles.content}>
          <div className={styles.filterSection}>
            <button className={styles.accordionTrigger} onClick={() => toggleSection('Ціна (грн.)')}>
              <span>Ціна (грн.)</span>
              <ChevronDown size={20} className={`${styles.chevron} ${openSections['Ціна (грн.)'] ? styles.chevronOpen : ''}`} />
            </button>
            
            {openSections['Ціна (грн.)'] && (
              <div className={styles.accordionContent}>
                
                {/* ДВОЙНОЙ СЛАЙДЕР */}
                <div className={styles.sliderContainer}>
                  {/* Задний серый фон */}
                  <div className={styles.sliderTrack}></div>
                  {/* Синяя заполненная часть между ползунками */}
                  <div className={styles.sliderFill} style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }} />
                  
                  {/* Инпуты */}
                  <input type="range" min={MIN_LIMIT} max={MAX_LIMIT} value={minPrice} onChange={handleMinChange} className={styles.rangeInput} />
                  <input type="range" min={MIN_LIMIT} max={MAX_LIMIT} value={maxPrice} onChange={handleMaxChange} className={styles.rangeInput} />
                </div>

                {/* Ввод вручную */}
                <div className={styles.priceInputsContainer}>
                  <div className={styles.priceInputBox}>
                    <span className={styles.priceLabel}>Мін</span>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className={styles.priceInput} />
                  </div>
                  <div className={styles.priceInputBox}>
                    <span className={styles.priceLabel}>Макс</span>
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className={styles.priceInput} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Остальные списки */}
          {filtersData.map((filter, idx) => {
            const isSecOpen = openSections[filter.title] || false;
            return (
              <div key={idx} className={styles.filterSection}>
                <button className={styles.accordionTrigger} onClick={() => toggleSection(filter.title)}>
                  <span>{filter.title}</span>
                  <ChevronDown size={20} className={`${styles.chevron} ${isSecOpen ? styles.chevronOpen : ''}`} />
                </button>
                {isSecOpen && filter.type === 'checkbox' && (
                  <div className={styles.accordionContent}>
                    {filter.options?.map((opt, oIdx) => (
                      <label key={oIdx} className={styles.checkboxLabel}>
                        <span className={styles.checkboxText}>{opt.label}</span>
                        {opt.count && <span className={styles.checkboxCount}>{opt.count}</span>}
                        <input type="checkbox" className={styles.checkbox} />
                      </label>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <button className={styles.clearBtn} onClick={onClose}>Прибрати все</button>
          <button className={styles.applyBtn} onClick={onClose}>Показати 45 результатів</button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;