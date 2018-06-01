import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import {sendQuizWHook} from '../actions/quizzes'
import './SendQuizz.css'

class SendQuizz extends PureComponent {
  constructor(props, state) {
    super(props, state)
    this.state = {
      webHook: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = (e) => {
    this.props.sendQuizWHook(this.state.webHook, this.state.quizId)
  }

  handleChange = (event) => {
        const {name, value} = event.target

    this.setState({
          webHook: value,
          quizId: this.props.quizId
    })
  }


    render () {
      const initialValues = this.props.initialValues || {}

        return (

            <div className='webhook'>
                <input type="text" placeholder="Type your webhook URL" name="correctAnswer" className="input-field"
                  value={this.state.webHook || initialValues.webHook || ''} onChange={ this.handleChange }/>
                <Button className="send-quizz-content" onClick={this.handleSubmit}> Send </Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
  quizId : reduxState.questions.quiz
}

export default connect(mapStateToProps, {sendQuizWHook})(SendQuizz)
