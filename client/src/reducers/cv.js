export default (state = {cvs: []}, action) => {
    switch (action.type) {
        
        case 'CREATE':
        return {...state,cvs: [... state.cvs, action.payload]};
      default:
        return state;
    }
  };