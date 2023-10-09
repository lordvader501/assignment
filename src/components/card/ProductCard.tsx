import {useState} from 'react'
import ProductType from '../searchpage/ProductTypes';
import Ratings from '../logos/Ratings';
import './ProductCard.styles.scss'
import Heart from '../logos/Heart';

const ProductCard:React.FC<{item?:ProductType, index:number}> = ({item, index}) => {
  const [addWishList, setAddWishList] = useState<boolean>(false);
  return (
    <div key={index} className='card-container'>
      <div className='image-container'>
        <img src={item?.image} alt='cloth' />
        <div className='wishlist' onClick={() => setAddWishList(!addWishList)}>
          <Heart inCart={addWishList} />
        </div>
        <div className='view-product'>
          <p>View Product</p>
        </div>
      </div>
      <div className='details'>
        <p className='title'>{item?.title}</p>
        <p><span className='discount-price'>{item?.price}</span>{" "}<span className='price'>{item?.price}</span></p>
        <p className='rating'><Ratings index={5 - (item?.rating || 0)} /><span>(210)</span></p>
      </div>
    </div>
  )
}

export default ProductCard