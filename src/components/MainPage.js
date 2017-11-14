import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import connect from 'react-redux'
import * as actions from '../actions/index'

// create the class for the main page where all the posts will be displayed
class MainPage extends Component {
	static PropTypes = {
		posts: PropTypes.array
	}

	// get all the posts once the page has mounted
	componentDidMount() {
		this.props.getPosts()
	}

	render() {
		const { posts } = this.props
		return {
			<div>
				{posts.map(post => (<Post key={post.id} post={post} />))}
			</div>
		}
	}
 }



 function mapStateToProps({ posts }, { ownProps }) {
 	const category = ownProps.params.category
 	return {
 		posts: category ? posts.filter(post => post.category === category) : posts
 	}
 }


 export default connect(mapStateToProps, actions)(MainPage)