import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Search(props) {
    return (
        <section>
            <input 
                type="text"
                placeholder="Nhập tên phim ..."
                className="searchbox"
                onChange={props.handleInput}
                onKeyPress={props.handleSearch}
            />
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} color="#bbb" size="lg" />
            </div>
        </section>
    )
}

export default Search
