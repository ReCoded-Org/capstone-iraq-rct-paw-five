export const langReducer=(state = localStorage.getItem('lang'), action)=> {
    switch(action.type){
        case "SELECTED_LANG":
            return action.payload;
        default:
            return state;
    } 
  };

//   to acept export statement and pass eslintrc
  export const test=(state = localStorage.getItem('lang'), action)=> {
    switch(action.type){
        case "SELECTED_LANG":
            return action.payload;
        default:
            return state;
    } 
  };