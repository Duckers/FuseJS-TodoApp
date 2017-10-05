
import DI from 'FuseJS/DI'
import TodoList from 'Model/TodoList'
import Navigation from 'Services/Navigation'

export default class TodoApp {
    constructor() {
        DI(this)
        this.todoList = new TodoList()
        this.navigation = new Navigation()
        this.navigation.goHome()
    }
    
}
