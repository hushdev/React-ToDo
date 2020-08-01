import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {
        const {
            label, onDeleted, onToggleDone,
            onToggleImportant, important, done
        } = this.props

        let classNames = 'todo-list-item-text'

        if (done) {
            classNames += ' todo-list-item-done'
        }

        if (important) {
            classNames += ' todo-list-item-important'
        }

        return (
            <div className="todo-list-item">
                <span
                    onClick={onToggleDone}
                    className={classNames}
                >
                    {label}
                </span >
                <div className="todo-list-buttons">
                    <button type="button"
                        onClick={onToggleImportant}
                        className="btn btn-outline-success mr-2"
                    >
                        <i className="fa fa-exclamation"></i>
                    </button>

                    <button type="button"
                        onClick={onDeleted}
                        className="btn btn-outline-danger"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        )
    }
}
