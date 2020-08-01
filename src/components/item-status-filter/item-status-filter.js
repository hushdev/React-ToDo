import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {


    render() {
        const buttonsCollection = [
            { name: 'all', label: 'All' },
            { name: 'active', label: 'Active' },
            { name: 'done', label: 'Done' }
        ]

        const buttons = buttonsCollection.map(btn => {
            const isActive = btn.name === this.props.filter
            const activeClassName = isActive ? 'btn-info' : 'btn-outline-info'

            return (
                <button type="button"
                    onClick={() => this.props.onFilter(btn.name)}
                    className={`btn ${activeClassName}`}

                >
                    {btn.label}
                </button>
            )
        })



        return (
            <div className="btn-group ml-2" role="group" aria-label="Basic example">
                {buttons}
            </div>
        )
    }
}

