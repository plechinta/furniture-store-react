import React, { useState } from 'react';
import styles from './NewsletterForm.module.css';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("Будь ласка, дайте згоду на обробку даних.");
      return;
    }
    console.log('Form submitted:', { name, email });
    // Тут логіка відправки даних на сервер
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        
        {/* Заголовок та опис */}
        <div className={styles.header}>
          <h2 className={styles.title}>Виграйте подарункову картку JYSK на 500 грн</h2>
          <p className={styles.subtitle}>
            Підписуйтеся на нашу розсилку та отримуйте натхнення, інформацію про новинки та розіграші, 
            персоналізовані пропозиції на основі ваших особистих даних. Якщо ви дасте згоду на підписку, 
            ви автоматично будете брати участь у щомісячному розіграші подарункової картки JYSK на 500 грн.{' '}
            <a href="/rules" className={styles.link}>Умови проведення розіграшу</a>.
          </p>
        </div>

        {/* Сама форма */}
        <div className={styles.formWrapper}>
          <p className={styles.requiredText}>Всі поля, позначені зірочкою (*), обов'язкові для заповнення</p>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input 
                type="text" 
                placeholder="Ім'я*" 
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input 
                type="email" 
                placeholder="Імейл*" 
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.submitBtn}>
                Підписатися
              </button>
            </div>

            <div className={styles.checkboxRow}>
              <input 
                type="checkbox" 
                id="consent"
                className={styles.checkbox}
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="consent" className={styles.legalText}>
                Я бажаю отримувати розсилку, включно з персоналізованими листами, адаптованими спеціально 
                для мене на основі моїх особистих даних та поведінки, через електронну пошту та сторонні 
                медіа, що містять натхнення, вигідні пропозиції, новинки та акції в рамках всього асортименту товарів JYSK.<br />
                <a href="/details" className={styles.link}>Детальніше про згоду та використання персональних даних читайте тут.</a><br />
                Я завжди можу відкликати свою згоду на <a href="/" className={styles.link}>сайті JYSK</a>. 
                Я можу ознайомитися з тим, як JYSK обробляє мої персональні дані, 
                в Політиці <a href="/privacy" className={styles.link}>Політиці Конфіденційності</a>.
              </label>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;