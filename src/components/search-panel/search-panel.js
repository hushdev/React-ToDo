import React, { Component } from 'react'
import './search-panel.css'
import ItemStatusFilter from '../item-status-filter/item-status-filter'

class SearchPanel extends Component {
    onSearch = (e) => {
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <div className="search-panel d-flex flex-wrap justify-content-center mt-3">
                <input placeholder="Type task to search"
                    onChange={this.onSearch}
                    className="form-control col-lg-3 col-md-6 col-sm-8 col-12"
                />
                <ItemStatusFilter onFilter={this.props.onFilter} filter={this.props.filter} />
            </div>
        )
    }
}

export default SearchPanel