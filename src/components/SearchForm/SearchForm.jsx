import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from 'react';

export default function SearchForm() {
    const [isFilter, setIsFilter] = useState(false);
  
    const handleFilterChange = () => {
      setIsFilter(!isFilter);
    };
  

    return(
        <section className='searchForm'>
            <div className='searchForm__block'>
                <input type='input' className='searchForm__input' placeholder='Фильм'></input>
                <button type='button' className='searchForm__button'></button>
            </div>
            <div className="search__filter-container">
              <form>
          <FilterCheckbox isFilter={isFilter} onChange={handleFilterChange} /></form>
          <p className="search__filter-title">Короткометражки</p></div>

        </section>
    )
}