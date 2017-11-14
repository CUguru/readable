import * as ReadableAPI from '../utils/ReadableAPI'

// all the actions for the app that will trigger the reducers
export const GET_CATEGORIES = 'UPDATE_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';

export const GET_POSTS = 'GET_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const POST_VOTE = 'POST_VOTE';


export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const COMMENT_VOTE = 'COMMENT_VOTE';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export const getCategories = () => {
	return (dispatch) => {
		ReadableAPI.getAllCategories()
			.then(res => { dispatch({
				type: GET_CATEGORIES,
				res
			})})
	}
}

export const sort = (sortOrder) => {
	return (dispatch) => {
		dispatch({
			type: SORT_POSTS,
			sortOrder
		})
	}
}

export const getPosts = () => {
	return (dispatch) => {
		ReadableAPI.getPosts()
			.then(posts => { dispatch({
				type: GET_POSTS,
				posts
			})})
	}
}


export const newPost = (post, func) => {
	return (dispatch) => {
		ReadableAPI.addNewPost(post)
			.then(() => func())
			dispatch({
				type: ADD_NEW_POST,
				post
			})
	}
}


export const deletePost = (postId, func) => {
	return (dispatch) => {
		ReadableAPI.deletePost(postId)
			.then(() => func())
			dispatch({
				type: DELETE_POST,
				postId
			})
	}
}

export const editPost = (postId, body, title, func) => {
	return (dispatch) => {
		ReadableAPI.editPost(postId, title, body)
			.then(post => {
				dispatch({
					type: EDIT_POST,
					postId,
					post
				})
			}).then(() => func())
	}
}

export voteForPost = (postId, option) => {
	return (dispatch) => {
		ReadableAPI.postVote(postId, option)
			.then(post => {
				dispatch({
					type: POST_VOTE,
					postId,
					option
				})
			})
	}
}

export const postsForCategory = (category) => {
	return (dispatch) => {
		ReadableAPI.getCategoryPosts(category)
			.then(posts => {
				dispatch({
					type: GET_CATEGORY_POSTS,
					posts
				})
			})
	}
}


export const getComments = (parentId) => {
	return (dispatch) => {
		ReadableAPI.getPostComments(parentId)
			.then(comments => dispatch({
				type: GET_ALL_COMMENTS,
				parentId,
				comments
			}))
	}
}

export const addComment = (parentId, comment, func) => {
	return (dispatch) => {
		ReadableAPI.addNewComment(comment)
			.then(comment => {
				dispatch({
					type: ADD_NEW_COMMENT,
					parentId,
					comment
				})
			}).then(() => func())
	}
}


export const editComment = (commentId, parentId, timestamp, body, func) => {
	return (dispatch) => {
		ReadableAPI.editComment(commentId, body, timestamp)
			.then(comment => {
				dispatch({
					type: UPDATE_COMMENT,
					comment,
					commentId,
					parentId
				})
			}).then(() => func())
	}
}



export const deleteComment = (commentId, func) => {
	return (dispatch) => {
		ReadableAPI.deleteComment(commentId)
			.then(() => func())
			dispatch({type: DELETE_COMMENT, commentId})
	}
}


export const voteForComment = (commentId, parentId, option) => {
	return (dispatch) => {
		ReadableAPI.commentVote(commentId, option)
			.then(comment => {
				dispatch({
					type: COMMENT_VOTE,
					commentId,
					parentId
				})
			})
	}
}

// export function voteForComment(id, votes, parentId) {
//     return {
//         type: COMMENT_VOTE,
//         votes,
//         id,
//         parentId
//     }
// }

// export function sortAllPosts(sortOrder) {
//     return {
//         type: SORT_POSTS,
//         sortOrder
//     }
// }
// export function commentUpVotes({ id, voteScore }) {
// 	return {
// 		type: COMMENT_UPVOTE,
// 		id,
// 		voteScore
// 	}
// }

// export function commentDownVotes({ id, voteScore }) {
// 	return {
// 		type: COMMENT_DOWNVOTE,
// 		id,
// 		voteScore
	// }
// }

// export function postUpVotes({ id, voteScore }) {
// 	return {
// 		type: POST_UPVOTE,
// 		id,
// 		voteScore
// 	}
// }

// export function postDownVotes({ id, voteScore }) {
// 	return {
// 		type: POST_DOWNVOTE,
// 		id,
// 		voteScore
// 	}
// }

// export function mainPageWithComments({ comments, posts}) {
// 	return {
// 		type: MAIN_PAGE_WITH_COMMENTS,
// 		comments,
// 		posts
// 	}
// }

// export function addComment({ id, timestamp, parentId, body, author, voteScore, deleted, parentDeleted }) {
// 	return {
// 		type: ADD_NEW_COMMENT,
// 		id,
// 		timestamp,
// 		parentId,
// 		body,
// 		parentDeleted,
// 		voteScore,
// 		deleted,
// 		author
// 	}
// }

// export function getComments({ posts, comments }) {
// 	return {
// 		type: GET_ALL_COMMENTS,
// 		posts,
// 		comments
// 	}
// }










