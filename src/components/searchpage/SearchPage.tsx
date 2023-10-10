import {useState, useMemo, useEffect} from 'react'
import SearchHeader from '../header/SearchHeader';
import { Container } from '../layouts/Container';
import FilterSection from '../filterSection/FilterSection';
import ProductCard from '../card/ProductCard';
import { faker } from '@faker-js/faker';
import ProductType from './ProductTypes';
import './SearchPage.style.scss'



const SearchPage = () => {
  const [productList, setProductList] = useState<ProductType[]>();
  const [filteredProductList, setFilteredProductList] = useState<ProductType[]>();
  const [priceRange, setPriceRange] = useState<number>(0)
  const [ratings, setRatings] = useState<number>(1)
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
  useEffect(() => {
    const filteredProducts = productList?.filter((product) => {
    // Convert the price to a number (assuming it's in the format '$xx')
    const priceNumber = parseFloat(product.price.replace('$', ''));
    let priceCompare;
    if (priceRange === 500) priceCompare = priceNumber <= priceRange
    else if (priceRange === 1000) priceCompare = priceNumber >= priceRange
    else priceCompare = true

    const ratingFilter = product.rating >= ratings;
    console.log(priceCompare)
    return priceCompare && ratingFilter;
  });
    setFilteredProductList(filteredProducts)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[priceRange, ratings])
  return (
    <div className='flexCenter w-full'>
      <SearchHeader />
      <Container className='searchpage-container w-full max-1440'>
        <FilterSection setPriceRange={setPriceRange} setRatings={setRatings} key={1}/>
        <div className='products' key={2}>
          {filteredProductList?.map((item, index) => (
            <ProductCard item={item} index={index} key={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default SearchPage