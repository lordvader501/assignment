import React from 'react'
import './FilterSection.styles.scss'
import Ratings from '../logos/Ratings'

const FilterSection = () => {
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
  return (
    <div className='filter-container'>
      <div>
        <h1 className=''>Search Results</h1>
      </div>
      <div className='filter'>
        {filterItems.map((item,index) => (
          <div key={index} className='filter-item'>
            <div className='title'>
              {item.title}
            </div>
            <div>
              {item.options.map((item, index) => (
                <p key={index} className='options'>
                  <input type='checkbox'/>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterSection