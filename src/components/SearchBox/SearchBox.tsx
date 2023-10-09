import { useState } from "react";
import "./SearchBox.styles.scss";
import SearchIcon from "../logos/SearchIcon";

const SearchBox:React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>('');
  const [displayResults, setDisplayResults] = useState<boolean>(false)
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value)
  }
  return (
    <div className="flexCenter">
      <div className="flexCenter search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchItem}
          onChange={handleSearchChange}
          onFocus={() => setDisplayResults(true)}
          onBlur={() => setDisplayResults(false)}
        />
        <SearchIcon className='search-logo' />
      </div>
      {displayResults && (
        <div className="results">
          <div className="latest-trends">
            <p>Latest Trends</p>
            <div>
              {
                [0,1,2,3,4].map((item, index) => (
                  <div key={index}></div>
                ))
              }
            </div>
          </div>
        </div>)}
    </div>
  );
}

export default SearchBox;
