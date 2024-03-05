import React from 'react'
import TodoItem from "./TodoItem";

function TodoList({todos}) {
  return (<>{todos.map((item) => (
      <TodoItem key={item} item={item}/>
    ))}
    </>
  )
}

export default TodoList