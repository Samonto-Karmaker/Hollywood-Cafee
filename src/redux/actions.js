import * as actionTypes from "./actionTypes"

export const newComment = (dishId, rating, author, comment) => {
    return{
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
    }
}