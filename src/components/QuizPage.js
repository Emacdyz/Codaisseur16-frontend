import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getQuestions, sendResponse} from '../actions/questions'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import QuizQuestions from '../containers/QuizQuestions'
import './QuizPage.css'

function calculateScore(answers) {
    let score = 0
    answers.map(answer => {
        if (answer.choice === answer.correct) return score += 1
        else return score
    })
    return score
}

class QuizPage extends PureComponent {

    componentWillMount() {
    this.props.getQuestions(this.props.match.params.id)
    }

    sendResponse = (response) => {
        this.props.sendResponse(response)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const score = calculateScore(this.props.answers)
        const response = {
            quiz_id: Number(this.props.match.params.id),
            user_id: this.props.currentUser.userId,
            teacher: this.props.currentUser.teacher,
            score: score
        }
        console.log(response)

        this.sendResponse(response)
    }

    render() {
        // const {questions} = this.props

        return (
          <Paper className="outer-paper">
            <h2>Quiz #{this.props.match.params.id} - Teacher Roast before we toast!</h2>
                <QuizQuestions />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="submit"
                    onClick={this.handleSubmit}
                > <Link to='/scores' className="Link">Submit</Link>
                </Button>
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
      questions: state.questions,
      currentUser: state.currentUser,
      answers: state.answers
    })

export default connect(mapStateToProps, {getQuestions, sendResponse})(QuizPage)
