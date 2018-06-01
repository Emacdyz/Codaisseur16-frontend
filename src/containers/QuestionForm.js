//src/containers/QuestionForm.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createQuestionCard} from '../actions/QuizzDetails'

//styling
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import './QuestionForm.css'

class QuestionForm extends PureComponent {

    state = {
        quiz: Number((window.location.href).split('/').pop())
    }

	handleSubmit = (e) => {
        this.props.createQuestionCard(this.state) 
	}

	handleChange = (event) => {
        const {name, value} = event.target

		this.setState({
          [name]: value
		})
	}

    render () {

        const initialValues = this.props.initialValues || {}

        return (
            
            <Card className="quizy-card">
                <CardContent>
                    <form className="question-form">

                        <div className="question-field">
                            <label className="label-field">QUESTION: </label>
                            <input type="text" name="title" className="input-field"
                            id="title" 
                            value={this.state.title || initialValues.title || '' } 
                            onChange={ this.handleChange }/>
                        </div>

                        <div className="answers-field">
                            <label className="label-field" > ANSWERS: </label>
                            <input type="text" placeholder="Option 1" className="input-field" name="option1" id="option1"
                            value={this.state.option1 || initialValues.option1 || ''} 
                            onChange={ this.handleChange } />

                            <input type="text" placeholder="Option 2" className="input-field"
                            name="option2" id="option2" 
                            value={this.state.option2 || initialValues.option2 || ''} 
                            onChange={ this.handleChange } />

                            <input type="text" placeholder="Option 3" className="input-field"
                            name="option3" id="option3" 
                            value={this.state.option3 || initialValues.option3 || ''} 
                            onChange={ this.handleChange }/>

                            <input type="text" placeholder="Option 4" className="input-field"
                            name="option4" id="option4"
                            value={this.state.option4 || initialValues.option4 || ''} 
                            onChange={ this.handleChange } />
                        </div>

                        <div className="correct-field">
                            <label className="label-field">CORRECT: </label> <br/>
                            <input type="text" className="input-field" placeholder='Enter the option number'
                            name="correctAnswer" id="correctAnswer"
                            value={this.state.correctAnswer || initialValues.correctAnswer || ''} 
                            onChange={ this.handleChange }
                            />
                        </div>

                    <CardActions>
                        <Button className="question-action" onClick={this.handleSubmit} 
                        style={{ textAlign: '' }}
                        > Submit </Button>
                    </CardActions>
                    </form>

                </CardContent>
            </Card>

        )
    }
}

export default connect(null, {createQuestionCard}) (QuestionForm)