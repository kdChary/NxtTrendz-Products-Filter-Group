import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderSearchInput = () => (
    <div className="search-input-card">
      <input type="search" placeholder="search" className="search-input" />
      <BsSearch className="search-icon" />
    </div>
  )

  const renderCategoryItem = () => {
    const {categoriesList} = props

    return categoriesList.map(category => (
      <li className="category-item" key={category.categoryId}>
        <p className="list-option">{category.name}</p>
      </li>
    ))
  }

  const renderCategoriesList = () => (
    <>
      <h4 className="filters-title">Category</h4>
      <ul className="filters-list">{renderCategoryItem()}</ul>
    </>
  )

  const renderRatingItem = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => (
      <li className="rating-item" key={rating.ratingId}>
        <img src={rating.imageUrl} alt="rating" className="rating-img" />
        <p className="list-option">& up</p>
      </li>
    ))
  }

  const renderRatingsList = () => (
    <>
      <h4 className="filters-title">Rating</h4>
      <ul className="filters-list">{renderRatingItem()}</ul>
    </>
  )

  const clearFilters = () => console.log('complete all functionalities')

  return (
    <div className="filters-group-container">
      <p className="not-done">add functionality</p>
      {renderSearchInput()}
      {renderCategoriesList()}
      {renderRatingsList()}
      <button
        className="clear-filters-btn"
        type="button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
