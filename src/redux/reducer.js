import DISHES from "../data/dishes"

const initialState = {
    dishes: DISHES
}

export const Reducer = (state = initialState, action) => {
    if(action.type === "ADD_COMMENT"){
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
    return state
}