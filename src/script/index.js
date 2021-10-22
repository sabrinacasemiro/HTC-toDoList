import data from './data/index.js'
import newTask from './components/newTask/index.js'
import printList from './modules/printList/index.js'
import api from './modules/api/index.js'

const $parent = document.querySelector('.list__wrapper')

window.addEventListener('keydown', (event) => {
    const key = event.key

    if(key === 'Escape'){
        const $container = document.querySelector('.new-task__wrapper')
        
        $container.classList.remove('new-task-open')
    }
    
})

data.delete()

newTask()

api({ url: 'http://localhost:3333/taskList'}, (data) => {
    printList(data, $parent)
})