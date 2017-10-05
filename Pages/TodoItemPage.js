
import DI from 'FuseJS/DI'

export default class TodoItemPage {
    constructor(todoItem, todoList = DI("todoList")) {
        this.todoItem = todoItem
        this.todoList = todoList
    }

    get similarTodos() {
        return this.todoList.todos.filter(x => 
            (x.isDone == this.todoItem.isDone) && (x !== this.todoItem))
    }
}