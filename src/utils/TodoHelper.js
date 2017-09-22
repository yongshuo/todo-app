import moment from 'moment'

export function filterTodoList(todoList, activeOnly = false) {
  const dateFormat = 'DD/MM/YYYY'

  let finalTodoList = {
    Overdue: [],
    Today: []
  }

  todoList.forEach(todo => {
    if (!activeOnly || todo.completed == false) {
      if (moment(todo.dueTime) < moment()) {
        finalTodoList.Overdue.push(todo)
      } else if (moment(todo.dueTime).format(dateFormat) == moment().format(dateFormat)) {
        finalTodoList.Today.push(todo)
      } else {
        const key = moment(todo.dueTime).format(dateFormat)
        // if key does not exists
        if (!finalTodoList.hasOwnProperty(key)) {
          finalTodoList[key] = []
        }

        finalTodoList[key].push(todo)
      }
    }
  })
  return finalTodoList
}

// unique id based on milliseconds + random number.
export function generateUniqueId() {
  return `${Date.now().toString()}${parseInt(Math.random() * 100).toString()}`
}

export default {
  filterTodoList,
  generateUniqueId
}
