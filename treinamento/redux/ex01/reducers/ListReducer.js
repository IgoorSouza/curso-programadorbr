const listReducer = function (state = ['Um item padrão'], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    
    default:
      return state
  }
}

module.exports = listReducer