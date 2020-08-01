import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="todo-list-item list-group-item">
                <TodoListItem
                    onDeleted={() => { onDeleted(id) }}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    {...itemProps}
                />
            </li>
        )
    })

    return (
        <ul className="todo-list list-group mt-3">
            {elements}
        </ul>
    )
}

export default TodoList