import React from 'react'
import SearchHeader from '../header/SearchHeader';
import { Container } from '../layouts/Container';
import FilterSection from '../filterSection/FilterSection';

const SearchPage = () => {
  return (
    <div>
      <SearchHeader />
      <Container className='searchpage-container'>
        <FilterSection />
      </Container>
    </div>
  )
}

export default SearchPage