
import TodoItem from './TodoItem'

export default class TodoList {
    constructor() {
        this.todos = [ new TodoItem("Buy milk"), new TodoItem("Do good deeds") ]
    }

    addTodo(description) {
        this.todos.push(new TodoItem(description))
    }
}