import React, { PropTypes } from 'react'

const SearchField = ({searchText, path, actions}) => {
	const onSearchChange = (e) => actions.setSearchText(e.target.value, path)
	return (
		<div className="search-field">
			<input value={searchText} autoFocus onChange={onSearchChange}></input>
			<i className="fa fa-search"></i>
		</div>
	)
}

SearchField.propTypes = {
	searchText: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
}
export default SearchField
