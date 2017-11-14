const api = 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}


/* method for getting all the categories from the api */
export const getAllCategories = () =>
	fetch(`${api}/categories`, { headers })
		.then(res => res.json())


/* method for getitng all the posts from the api */
export const getPosts = () =>
	fetch(`${api}/posts`, { headers })
		.then(res => res.json())


/* method to add a new post into the api */
export const addNewPost = (postObj) =>
	fetch(`${api}/posts`, {
		method: `POST`,
		headers: { headers },
		body: JSON.stringify({postObj})
	}).then(res => res.json())


/* method to get an individual post */
export const getSinglePost = (postId) =>
	fetch(`${api}/posts/:${postId}`, { headers })
		.then(res => res.json())


/* method for editing a post */
export const editPost = (postId, postTitle, body) =>
	fetch(`${api}/posts/:${postId}`, {
		method: `PUT`,
		headers: headers,
		body: JSON.stringify({title: postTitle, body: body})
	}).then(res => res.json())


/* method for deleting a post */
export const deletePost = (postId) =>
	fetch(`${api}/posts/:${postId}`, {
		method: `DELETE`,
		headers: headers
	}).then(res => res.json())


/* method for all the posts under a particular category */
export const getCategoryPosts = (category) =>
	fetch(`${api}/${category}/posts`, { headers })
		.then(res => res.json())


/* method to get all the comments for a particular post */
export const getPostComments = (postId) =>
	fetch(`${api}/posts/${postId}/comments`, { headers })
		.then(res => res.json())


/* get details of a comment from the server */
export const getCommentDetails = (commentId) =>
	fetch(`${api}/comments/:${commentId}`, { headers })
		.then(res => res.json())


/* add a new comment to a particular post */
export const addNewComment = (newComment) =>
	fetch(`${api}/comments`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify({ newComment })
	}).then(res => res.json())


/* edit an already existing comment */
export const editComment = (commentId, commentUpdate, timestamp) =>
	fetch(`${api}/comments/${commentId}`, {
		method: `PUT`,
		headers: headers,
		body: JSON.stringify({ timestamp: timestamp, body: commentUpdate })
	})


/* delete a comment */
export const deleteComment = (commentId) =>
	fetch(`${api}/comments/${commentId}`, { method: `DELETE`, headers: headers
			.then(res => res.json())


/* vote for a post */
export const postVote = (postId, option) =>
	fetch(`${api}/posts/${postId}`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify({ option })
	}).then(res => res.json())


// vote for a comment
export const commentVote = (commentId, option) =>
	fetch(`${api}/comments/${commentId}`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify({ option })
	}).then(res => res.json())
