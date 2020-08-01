import React from 'react'
import './app-header.css'

const AppHeader = (props) => {
    return (
        <div className="text-center mt-4 app-header">
            <h1>Todo app</h1>
            <p className="text-secondary mt-2 mb-3">
                {`${props.toDo} tasks to do, ${props.done} done`}
            </p>
        </div>

    )
}


export default AppHeader