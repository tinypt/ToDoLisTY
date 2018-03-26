let todoId = 0
let doingId = 0
let doneId = 0

export const addList = text => ({
    type: 'ADD_TODO',
    id: todoId++,
    text
})

export const doingList = text => ({
    type: 'ADD_DOING',
    id: doingId++,
    text
})

export const doneList = text => ({
    type: 'ADD_DONE',
    id: doneId++,
    text
  })

  export const deleteArray = text => ({
    type: 'DELETE_TODO',
    text
  })

  export const deleteArrayDoingt= text => ({
    type: 'DELETE_DOING',
    text
  })