import Header from '../../Components/Header/Header'
// import HeroSection from './Components/HeroSection/HeroSection'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import Footer from '../../Components/Footer/Footer'
import CategoryGrid from '../../Components/CategoryGrid/CategoryGrid'
import NewsletterForm from '../../Components/NewsletterForm/NewsletterForm'

function App() {
  // Оновлені тестові дані, які точно відповідають інтерфейсу Product
const mockProducts = [
  {
    id: '1',
    series: 'FANDRUP',
    title: 'Шафа FANDRUP 97х176см 2дв 3шух білий',
    image: '/images/product1.jpg', // Переконайтеся, що тут правильні шляхи до ваших картинок-заглушок
    price: 7500,
    oldPrice: 10500,
    qualityLevel: 'Basic',
    rating: 4,
    storesCount: 99
  },
  {
    id: '2',
    series: 'KARLSTAD',
    title: 'Килимок для ванної KARLSTAD 50x80см світло-сірий',
    image: '/images/product2.jpg',
    price: 350,
    oldPrice: 699,
    qualityLevel: 'Gold',
    rating: 4.5,
    storesCount: 119
  },
  {
    id: '3',
    series: 'HUNDESTED',
    title: 'Крісло HUNDESTED лляний тедді/колір натур. дуб',
    image: '/images/product3.jpg',
    price: 7499,
    rating: 5,
    storesCount: 40
  },
  {
    id: '4',
    series: 'PROBOX',
    title: 'Короб PROBOX 14л з кришкою прозорий',
    image: '/images/product4.jpg',
    price: 225,
    oldPrice: 299,
    rating: 5,
    storesCount: 113
  }
];

  return (
    <>
      {/* Здесь будут компоненты главной страницы */}
      <Header />
      {/* <HeroSection /> */}
      <ProductSlider
        title="Популярні товари"
        products={mockProducts}
        viewAllLink="/popular"
      />
      <CategoryGrid />
      <ProductSlider
        title="Популярні товари"
        products={mockProducts}
        viewAllLink="/popular"
      />
      <ProductSlider
        title="Популярні товари"
        products={mockProducts}
        viewAllLink="/popular"
      />
      <NewsletterForm />
      <Footer />
    </>
  );
}
export default App