import React from 'react'
import Logo from "../../assets/logo.webp";
import { Container } from '../layouts/Container';
import SearchBox from '../SearchBox/SearchBox';
import './SearchHeader.styles.scss'

const SearchHeader = () => {
  return (
    <div className="header">
      <Container className="pt-20 search-header-container padding-search">
        <div className='searchbox-container'>
          <SearchBox className='search-border' showResults={false} />
        </div>
        <img src={`${Logo}`} alt="logo" className="logo-img h-logo" />
      </Container>
    </div>
  )
}

export default SearchHeader