export const addList = text => ({
  type: 'ADD_TODO',
  text
})

export const doingList = text => ({
  type: 'ADD_DOING',
  text
})

export const doneList = text => ({
  type: 'ADD_DONE',
  text
})

export const deleteArray = text => ({
  type: 'DELETE_TODO',
  text
})

export const deleteArrayDoingt = text => ({
  type: 'DELETE_DOING',
  text
})