import moment from 'moment'

export function cloneTodoList(todoList) {
  let copy = {}
  Object.keys(obj).forEach(key => {
    const itemCopy = obj[key].map(item => {
      return Object.assign({}, item)
    })
    copy[key] = itemCopy
  })
  return copy
}

export function filterTodoList(todoList, activeOnly = false) {
  const dateFormat = 'DD/MM/YYYY'

  let finalTodoList = {
    Overdue: [],
    Today: []
  }

  // for each available key
  Object.keys(todoList).forEach(key => {
    todoList[key].forEach(todo => {
      // not active only or not completed
      if (!activeOnly || todo.completed == false) {
        if (moment(todo.dueTime) < moment()) {
          // past due time
          finalTodoList.Overdue.push(todo)
        } else if (moment(todo.dueTime).format(dateFormat) == moment().format(dateFormat)) {
          // today
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
  })

  return finalTodoList
}


export default {
  cloneTodoList,
  filterTodoList
}
