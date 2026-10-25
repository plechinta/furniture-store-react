import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Breadcrumbs, { type BreadcrumbItem } from '../../Components/Breadcrumbs/Breadcrumbs';
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import styles from '../../Components/ProductInfo/ProductInfo.module.css';
import photo1 from '../../assets/63757.jpg'
import photo2 from '../../assets/254727.jpg'
import photo3 from '../../assets/50654.jpg'
import photo4 from '../../assets/254655.jpg'
import photo5 from '../../assets/258864.jpg'
import photo6 from '../../assets/226180.jpg'


function ProductPage() {

    const breadcrumbData: BreadcrumbItem[] = [
        { label: 'Домашня сторінка', href: '/' },
        { label: 'Зберігання', href: '/category/storage' },
        { label: 'Полиці та шафи для взуття', href: '/category/shoe-storage' },
        { label: 'Полиця для взуття BORNHOLM 4пол чорний' } // Останній без href
    ];
    return (
        <>
            <Header />
            <Breadcrumbs items={breadcrumbData} />
            <div className={styles.rightColumn}>
                <ProductInfo  images={[photo1, photo2, photo3, photo4, photo5, photo6]}  
                    series="BORNHOLM"
                    title="Полиця для взуття BORNHOLM 4пол чорний"
                    rating={4.5}
                    reviewsCount={927}
                    price={325}
                />
            </div>
            <Footer />
        </>
    )
}

export default ProductPage