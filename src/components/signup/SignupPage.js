import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'
import '../../containers/QuizzDetails.css'

class SignupPage extends PureComponent {
	handleSubmit = (data) => {
		console.log(this.props)
		const { firstName, lastName, email, password, teacher } = data
		// console.log(firstName)
		this.props.postSignup(firstName, lastName, email, password, teacher)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/" />
		)
		console.log(this.props)


		return (
			<div className="paper">
				<h1>Sign up</h1>

				<SignupForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signup.error }</p>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
