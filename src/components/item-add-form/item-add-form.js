import React, { Component } from 'react'

import './item-add-form.css'
import { render } from '@testing-library/react'

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="mt-3 justify-content-center d-flex" onSubmit={this.onSubmit}>
                <input className="form-control mr-1"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    placeholder="Anything to do?"
                />
                <button className="btn btn-outline-success">Add</button>
            </form>
        )
    }
}