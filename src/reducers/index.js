// reducers will update the state in the store.


// import the actions from the actions file.
import  {
	GET_CATEGORIES,
	GET_CATEGORY_POSTS,
	GET_POSTS,
	SORT_POSTS,
	EDIT_POST,
	DELETE_POST,
	ADD_NEW_POST,
	GET_SINGLE_POST,
	POST_VOTE,
	GET_ALL_COMMENTS,
	UPDATE_COMMENT,
	ADD_NEW_COMMENT,
	COMMENT_VOTE,
	DELETE_COMMENT } from '../actions'

import sortBy from 'sort-by'
import { combineReducers } from 'redux'


// reducer to get all the categories, responds based on the type of action
//passed in to the reducer function
export function categories(state = [], action) {
	switch (action.type) {
		case GET_CATEGORIES :
			return action.categories;
		default:
			return state;
	}
}


export function posts(state = [], action) {
	const { posts, post, postId, sortOrder, edittedPost } = action

	switch(action.type) {
		case GET_POSTS :
			return action.posts.filter(post => (post.deleted !== true))

		case EDIT_POST :
			return state.map(post => {
				if(post.id === postId) {
					post = edittedPost
				}
				return post
			})

		case SORT_POSTS :
			return [].concat(state.sort(sortBy('-'+sortOrder)))

		case DELETE_POST :
			return state.filter(post => post.id !== postId)

		case ADD_NEW_POST :
			state.concat([post])
			return state

		case POST_VOTE :
			return state.map(post => {
				if((post.id === action.postId) && (action.option === 'upVote')) {
					post.voteScore = post.voteScore + 1;
				} else if((post.id === action.postId) && (action.option === 'downVote')) {
					post.voteScore = post.voteScore - 1;
				}
				return post
			})

		case GET_CATEGORY_POSTS :
			return posts.filter(post => (post.deleted !== true))

		default:
			return state;
	}
}


export function comments(state = {}, action) {
	const { comments, parentId, commentId, edittedComment } = action

	switch(action.type) {
		case GET_ALL_COMMENTS :
			return Object.assign({}, state, {[parentId]: comments})

		case ADD_NEW_COMMENT :
			return Object.assign({}, state, {[parentId]: comments})

		case DELETE_COMMENT :
			return state

		case UPDATE_COMMENT :
			return {
				...state,
				[parentId]: state[parentId].map(comment => {
					if(comment.id === commentId) {
						comment = edittedComment
					}
					return comment
				})
			}

		case COMMENT_VOTE :
			return {
				...state,
				[parentId]: state[parentId].map(comment => {
					if(comment.id === commentId) {
						comment = edittedComment
					}
					return comment
				})
			}

		default:
			return state
	}
}

export default combineReducers({
	posts,
	comments,
	categories
})











