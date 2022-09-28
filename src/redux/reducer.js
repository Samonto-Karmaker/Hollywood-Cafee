import * as actionTypes from "./actionTypes"

const initialDishState = {
    isLoading: false,
    dishes: []
}

export const Reducer = (state = initialDishState, action) => {
    if(action.type === actionTypes.ADD_COMMENT){
        let comment = action.payload
        comment.id = state.dishes[comment.dishId].comments.length
        comment.date = new Date().toDateString()
        let dummy = [...state.dishes]
        dummy[comment.dishId].comments.push(comment)
        return{
            ...state,
            dishes: dummy
        }
    }
    else if(action.type === actionTypes.DISHES_LOADING){
        return{
            ...state, 
            isLoading: true,
            dishes: []
        }
    }
    else if(action.type === actionTypes.LOAD_DISHES){
        return{
            ...state,
            isLoading: false,
            dishes: action.payload
        }
    }
    return state
}