import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {
  maxId = 100 //just to demonstrate, in real project id will come from the side of server

  state = {
    todoData: [
      this.createTodoItem('Add, edit and do your todos'),
    ],
    term: '',
    filter: '' //all, done or active
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id)

    const oldItem = arr[index]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }


    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id)

      const todoDataCopy = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ]

      return {
        todoData: todoDataCopy
      }
    })
  }

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text)

      return {
        todoData: [
          ...todoData,
          newItem
        ]
      }
    })
  }

  onSearch = (term) => {
    this.setState({term})
  }

  search = (items, term) => {
    if (term.length === 0 || term === '' || term === ' ') {
      return items
    }
    return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1)

  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onFilter = (filter) => {
    this.setState({filter})
  }

  filter = (items, filter) => {
    switch(filter) {
      case 'all': 
        return items
      case 'done': 
        return items.filter(item => item.done)
      case 'active':
        return items.filter(item => !item.done)
      default: 
        return items
    }
  }



  render() {
    const toDoCount = this.state.todoData.filter(el => !el.done).length
    const doneCount = this.state.todoData.length - toDoCount
    const visibleItems = this.filter(this.search(this.state.todoData, this.state.term), this.state.filter)

    return (
      <div className="container" >
        <AppHeader toDo={toDoCount} done={doneCount} />
        <SearchPanel onSearch={this.onSearch} onFilter={this.onFilter} filter={this.state.filter} />
        <TodoList
          onDeleted={this.deleteItem}
          todos={visibleItems}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
}
