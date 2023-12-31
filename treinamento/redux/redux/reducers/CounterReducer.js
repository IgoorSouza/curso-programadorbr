const counterReducer = function (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload

    case 'INCREMENT2':
      return state + action.payload
      
    case 'DECREMENT':
      return state - action.payload
  
    default:
      return state
  }
}

module.exports = counterReducer