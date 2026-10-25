import React from 'react';
import { MessageCircle } from 'lucide-react'; // Залишаємо тільки іконку чату
import styles from './Footer.module.css';
import logoImg from '../../assets/logo.jpg'; // Імпортуємо ваш головний логотип

const Footer: React.FC = () => {
  const categoryLinks = [
    { title: 'Спальня', href: '/category/bedroom' },
    { title: 'Ванна', href: '/category/bathroom' },
    { title: 'Офіс', href: '/category/office' },
    { title: 'Вітальня', href: '/category/living-room' },
    { title: 'Кухня та їдальня', href: '/category/kitchen' },
    { title: 'Зберігання', href: '/category/storage' },
    { title: 'Для вікон', href: '/category/windows' },
    { title: 'Для саду', href: '/category/garden' },
    { title: 'Для дому', href: '/category/home' },
    { title: 'Різдво та Новий Рік', href: '/category/christmas' },
    { title: 'Передпокій', href: '/category/hallway' },
  ];

  const infoLinks = [
    { title: 'Відділ по роботі з клієнтами', href: '/customer-service' },
    { title: 'Магазини та графіки роботи', href: '/stores' },
    { title: 'Клієнтські переваги', href: '/benefits' },
    { title: 'Подарункова картка', href: '/gift-card' },
    { title: 'Умови та положення', href: '/terms' },
    { title: 'Доставка', href: '/delivery' },
    { title: 'Повернення', href: '/returns' },
    { title: 'Рекламації', href: '/claims' },
    { title: 'Політика конфіденційності', href: '/privacy' },
    { title: 'Змінити згоду на використання cookies', href: '/cookies' },
    { title: 'Безпека', href: '/security' },
    { title: 'Відмовитися від угоди', href: '/cancel' },
  ];

  const jyskLinks = [
    { title: 'Все про JYSK', href: '/about' },
    { title: 'JYSK.com', href: 'https://jysk.com' },
    { title: 'Преса', href: '/press' },
    { title: 'Робота в JYSK', href: '/career' },
    { title: 'Імейл-розсилка', href: '/newsletter' },
    { title: 'Натхнення', href: '/inspiration' },
    { title: 'JYSK B2B', href: '/b2b' },
    { title: 'Благодійність', href: '/charity' },
    { title: 'Екораціональність', href: '/sustainability' },
    { title: 'Доступність', href: '/accessibility' },
  ];

  const paymentMethods = [
    { name: 'Apple Pay', src: '/images/payments/apple-pay.svg' },
    { name: 'Google Pay', src: '/images/payments/google-pay.svg' },
    { name: 'Mastercard', src: '/images/payments/mastercard.svg' },
    { name: 'Maestro', src: '/images/payments/maestro.svg' },
    { name: 'Privat24', src: '/images/payments/privat24.svg' },
    { name: 'ПриватБанк', src: '/images/payments/privatbank.svg' },
    { name: 'Visa', src: '/images/payments/visa.svg' },
    { name: 'Portmone', src: '/images/payments/portmone.svg' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Категорії товарів</h3>
            <ul className={styles.linkList}>
              {categoryLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={styles.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Інформація</h3>
            <ul className={styles.linkList}>
              {infoLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={styles.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>JYSK</h3>
            <ul className={styles.linkList}>
              {jyskLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={styles.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.contactBlock}>
              <h3 className={styles.columnTitle}>ЦЕНТРАЛЬНИЙ ОФІС</h3>
              <p className={styles.text}>ТОВ "ЮСК УКРАЇНА"</p>
              <p className={styles.text}>м. Київ</p>
              <p className={styles.text}>вул. Іоанна Павла ІІ, 21</p>
              <p className={styles.text}>01042</p>
            </div>

            <div className={styles.contactBlock}>
              <h4 className={styles.subTitle}>JYSK BUSINESS TO BUSINESS</h4>
              <p className={styles.text}>
                Тел: <a href="tel:+380442325144" className={styles.phoneLink}>+380442325144</a>
              </p>
              <a href="/b2b-contact" className={styles.link}>Зв'яжіться з нами</a>
            </div>

            <div className={styles.contactBlock}>
              <h4 className={styles.subTitle}>Відділ по роботі з клієнтами:</h4>
              <p className={styles.text}>
                Тел: <a href="tel:+380442470786" className={styles.phoneLink}>+380442470786</a>
              </p>
              <a href="/contact" className={styles.link}>Зв'язатися з нами</a>
            </div>

            <div className={styles.contactBlock}>
              <h4 className={styles.subTitle}>Слідкуйте за JYSK</h4>
              <div className={styles.socialIcons}>
                {/* Замінили іконки на ваш логотип */}
                <a href="https://facebook.com" aria-label="Facebook" className={styles.socialIcon}>
                  <img src={logoImg} alt="JYSK" style={{ height: '20px', width: 'auto' }} />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className={styles.socialIcon}>
                  <img src={logoImg} alt="JYSK" style={{ height: '20px', width: 'auto' }} />
                </a>
                <a href="https://youtube.com" aria-label="YouTube" className={styles.socialIcon}>
                  <img src={logoImg} alt="JYSK" style={{ height: '20px', width: 'auto' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.paymentMethods}>
            {paymentMethods.map((method, idx) => (
              <img 
                key={idx} 
                src={method.src} 
                alt={method.name} 
                className={styles.paymentIcon}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ))}
            <span className={styles.paymentPlaceholder}>Apple Pay • Google Pay • Mastercard • Visa • Privat24</span>
          </div>
        </div>
      </div>

      <button className={styles.chatButton} aria-label="Відкрити чат">
        <MessageCircle size={24} color="#fff" />
      </button>
    </footer>
  );
};

export default Footer;