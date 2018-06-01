import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createQuiz} from '../actions/quizzes'
import store from '../store'
import './createQuizButton.js'


class CreateQuizButton extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        store.dispatch(createQuiz(this.state))   
    }


    handleChange = () => event => {
        const currentUser = this.props.currentUser
        this.setState({
          quizTitle: event.target.value,
          userId: currentUser.userId
        });
      };

    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <form onSubmit={this.handleSubmit}>
              <TextField
                id='quizTitle'
                label='Title Quiz'
                value={this.state.quizTitle || initialValues.quizTitle || ''}
                onChange={this.handleChange('quizTitle')}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="create-quiz"
                >
                    Create Quiz
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        quizzes: state.quizzes,
        currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {createQuiz})(CreateQuizButton)