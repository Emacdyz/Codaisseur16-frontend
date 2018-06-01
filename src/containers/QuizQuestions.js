import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addAnswer, updateAnswer} from '../actions/questions'
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel} from 'material-ui/Form';
import '../components/QuizPage.css'

function getChecked(questionId, answers) {
    const currentAnswer = answers.filter(answer => {return answer.questionId === questionId})
    const currentAnswerObj = currentAnswer[0]
    if (currentAnswerObj !== undefined) return String(currentAnswerObj.choice)
}

class QuizQuestions extends PureComponent {

    addAnswer = (answer) => {
        this.props.addAnswer(answer)
    }

    updateAnswer = (answer) => {
        this.props.updateAnswer(answer)
    }

    handleChange = (e, question) => {
        const answer = {
            questionId: question.id,
            choice: Number(e.target.value),
            correct: question.correctAnswer
        }

        const questionsAnswered = this.props.answers.map(answer => answer.questionId)

        if (questionsAnswered.indexOf(question.id) > -1) { this.updateAnswer(answer)}
        else {this.addAnswer(answer)}

    }

    render() {
        const {questions, answers} = this.props

        return (
            <div>{ questions.map(question =>
                <div className= "questionsContainer">
                <FormControl component="fieldset">

                    <FormLabel component='legend'>{question.title}</FormLabel>

                    <RadioGroup
                    name={`question.id`}
                    value={getChecked(question.id, answers)}
                    onChange={(e) => this.handleChange(e, question)}
                    key={question.id}>

                    <FormControlLabel value='1' control={<Radio className="Radio" />} label={question.option1} key={`${question.id} : 1`} />
                    <FormControlLabel value='2' control={<Radio className="Radio" />} label={question.option2} key={`${question.id} : 2`}/>
                    <FormControlLabel value='3' control={<Radio className="Radio" />} label={question.option3} key={`${question.id} : 3`}/>
                    <FormControlLabel value='4' control={<Radio className="Radio" />} label={question.option4} key={`${question.id} : 4`}/>

                  </RadioGroup>
                </FormControl>
                </div>
            )}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
      questions: state.questions,
      currentUser: state.currentUser,
      answers: state.answers
    })

    export default connect(mapStateToProps, {addAnswer, updateAnswer})(QuizQuestions)
