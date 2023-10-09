import {useState, useMemo} from 'react'
import SearchHeader from '../header/SearchHeader';
import { Container } from '../layouts/Container';
import FilterSection from '../filterSection/FilterSection';
import ProductCard from '../card/ProductCard';
import { faker } from '@faker-js/faker';
import ProductType from './ProductTypes';
import './SearchPage.style.scss'



const SearchPage = () => {
  const [productList, setProductList] = useState<ProductType[]>();
  useMemo(() => {
    setProductList(Array.from({ length: 12 }).map((_, index) => (
    { 
      image: faker.image.urlLoremFlickr({
                  category: 'fashion',
                  width: 250,
                  height: 330,
                }),
      title: faker.commerce.productName(),
      price: faker.commerce.price({symbol: '$'}),
      rating: parseInt(faker.commerce.price({ min: 1, max: 5, dec: 0 })),
    }
    )));
  },[])
  return (
    <div className='flexCenter w-full'>
      <SearchHeader />
      <Container className='searchpage-container w-full max-1440'>
        <FilterSection />
        <div className='products'>
          {productList?.map((item, index) => (
            <ProductCard item={item} index={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default SearchPage