

export const initialState ={
    userData:{},
    user:null,
}

export const actionTypes ={
    SET_USERDATA:"SET_USERDATA",
    ADD_TO_USERDATA:"ADD_TO_USERDATA",
    SET_USER:"SET_USER",
}   


const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){   

        case "ADD_TO_USERDATA":
             return{
             ...state,
             userData:[...state.userData, action.item]
                }
        case "SET_USERDATA":
            return{
                ...state,
                userData: action.userData, 
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }

        default: return state;

    }
    
}

export default reducer;