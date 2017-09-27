import moment from 'moment'

export function filterTodoList(todoList, activeOnly = false) {
  const dateFormat = 'ddd, DD MMM YYYY'
  const dateTimeFormat = 'DD MMM YYYY hh:mm a'
  const timeFormat = 'hh:mm a'

  let finalTodoList = {
    Past: [],
    Today: []
  }

  todoList.sort((t1, t2) => moment(t1.dueTime) - moment(t2.dueTime)).forEach(todo => {
    if (!activeOnly || todo.completed == false) {
      if (moment(todo.dueTime) < moment()) {
        todo.formattedDueTime = moment(todo.dueTime).format(dateTimeFormat)
        finalTodoList.Past.push(todo)
      } else if (moment(todo.dueTime).format(dateFormat) == moment().format(dateFormat)) {
        todo.formattedDueTime = moment(todo.dueTime).format(timeFormat)
        finalTodoList.Today.push(todo)
      } else {
        const key = moment(todo.dueTime).format(dateFormat)
        // if key does not exists
        if (!finalTodoList.hasOwnProperty(key)) {
          finalTodoList[key] = []
        }

        todo.formattedDueTime = moment(todo.dueTime).format(timeFormat)
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
