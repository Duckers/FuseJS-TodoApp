
import TodoListPage from 'Pages/TodoListPage'
import TodoItemPage from 'Pages/TodoItemPage'

export default class Navigation {
    constructor() {
        this.pages = [ ]
    }

    goHome() {
        this.pages = [ new TodoListPage() ]
    }

    gotoTodo(e) {
        this.pages.push(new TodoItemPage(e.data))
    }

    goBack() {
        if (this.pages.length > 1)
            this.pages.pop()
    }
}