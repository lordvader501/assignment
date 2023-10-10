import React from 'react'
import './FilterSection.styles.scss'
import Ratings from '../logos/Ratings'

const FilterSection:React.FC<{setPriceRange:React.Dispatch<React.SetStateAction<number>>, setRatings:React.Dispatch<React.SetStateAction<number>> }> = ({setPriceRange, setRatings}) => {
  const filterItems = [
    {
      title: "BRAND",
      options: ['Mango', 'H&M'],
    },
    {
      title: "price range",
      options: ['under 500', '1000 to 3000'],
    },
    {
      title: "Ratings",
      options: [<Ratings index={0}/>,<Ratings index={1}/>,<Ratings index={2}/>,<Ratings index={3}/>,<Ratings index={4}/>],
    }
  ]
  function handlePriceChange(item:string | JSX.Element, e:React.ChangeEvent<HTMLInputElement>) {
    if (typeof item === 'string') {
      if (item.toLowerCase() === "under 500") setPriceRange(500);
      if (item.toLowerCase() === "1000 to 3000") setPriceRange(1000);
    }
    if(!e.target.checked) setPriceRange(0);
  }
  function handleRatingChange(item:string | JSX.Element, index:number, e:React.ChangeEvent<HTMLInputElement>) {
    if (React.isValidElement(item)) {
      setRatings(5-index);
    }
    if(!e.target.checked) setRatings(1);
  }

  return (
    <div className='filter-container'>
      <div>
        <h1 className=''>Search Results</h1>
      </div>
      <div className='filter'>
        {filterItems.map((items,index) => (
          <div key={index} className='filter-item'>
            <div className='title'>
              {items.title}
            </div>
            <div>
              {items.options.map((item, index) => (
                <>
                  {items.title.toLowerCase() === 'price range' && (
                    <p key={index} className='options'>
                      <input type='checkbox' onChange={(e) => handlePriceChange(item, e)} />
                      {item}
                    </p>
                  ) }
                  {items.title.toLowerCase() === 'ratings' && (
                    <p key={index} className='options'>
                      <input type='checkbox' onChange={(e) => handleRatingChange(item, index, e)} />
                      {item}
                    </p>
                  ) }
                  {items.title.toLowerCase() === 'brand' && (
                    <p key={index} className='options'>
                      <input type='checkbox' />
                      {item}
                    </p>
                  ) }
                  
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterSection