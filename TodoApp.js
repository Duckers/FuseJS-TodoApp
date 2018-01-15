import TodoList from 'Model/TodoList'
import Navigation from 'Model/Navigation'

export let current = {};

export default class TodoApp {
    constructor() {
        current.app = this;
        this.todoList = new TodoList()
        this.navigation = new Navigation()
        this.navigation.goHome()
    }
    
}
