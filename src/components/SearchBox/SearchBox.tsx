import { useState, useMemo } from "react";
import "./SearchBox.styles.scss";
import SearchIcon from "../logos/SearchIcon";
import { faker } from '@faker-js/faker';
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";


interface ProductDetailsType {
  image?: string[];
  name?: string[];
}


const SearchResults: React.FC<{productDetails? :ProductDetailsType, setDisplayResults:  React.Dispatch<React.SetStateAction<boolean>>}>  = ({productDetails ={}, setDisplayResults}) => {
  return (
    <div className="results" onMouseEnter={() => setDisplayResults(true)}>
      <div className="latest-trends">
        <p>Latest Trends</p>
        <div className="images">
          {
            [0,1,2,3,4].map((item, index) => (
              <div key={index}>
                <Link to="/search">
                  <img src={productDetails.image?.[index]} alt="fashin img" />
                  <p>{productDetails.name?.[index]}</p>
                </Link>
              </div>
            ))
          }
        </div>
        <div className="suggestions">
          <p>Popular Suggestions</p>
          <div>
            {
            [0,1,2,3,4].map((item, index) => (
              <Link to="/search" key={index}>{productDetails.name?.[index]}</Link>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}



const SearchBox:React.FC<{showResults?: boolean, className?: string}> = ({showResults=true, className}) => {
  const [searchItem, setSearchItem] = useState<string>('');
  const [displayResults, setDisplayResults] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<ProductDetailsType>();
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value)
  }
  useMemo(() => {
    setProductDetails({
      image: [0,1,2,3,4].map(() => faker.image.urlLoremFlickr({
                  category: 'fashion',
                  width: 170,
                  height: 230,
                })),
      name: [0,1,2,3,4].map(() => faker.commerce.productName()),
    })
  },[searchItem]);
  const handleFocus = () => {
    const app = document.getElementById('main');
    if (app) app.style.height ='100%';
    setDisplayResults(true)
  }
  const handleBlur = () => {
    const app = document.getElementById('main');
    if (app) app.style.height ='';
    setTimeout(()=>{setDisplayResults(false)},300);
    
  }
  const handleSearch = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') navigate('/search')
  }
  return (
    <>
      <div className="flexCenter search-container">
        <input
          type="search"
          className={classNames("search-input", className)}
          placeholder="Search"
          value={searchItem}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleSearch}
        />
        <Link to="/search" className='search-logo'><SearchIcon /></Link>
      </div>
      {showResults && displayResults && (<SearchResults productDetails={productDetails} setDisplayResults={setDisplayResults} />)}
    </>
  );
}

export default SearchBox;
