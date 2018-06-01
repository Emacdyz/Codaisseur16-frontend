import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import CreateIcon from '@material-ui/icons/Create'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import './quizzeslist.css'
import {getQuizzes} from '../actions/quizzes'
import {Link} from 'react-router-dom'

class QuizzesList extends PureComponent {

    componentWillMount() {
          if (this.props.quizzes !== null) this.props.getQuizzes();
            // if(this.props.currentUser.userId) localStorage.getItem(userId)

        }

    
    

renderQuiz = (quiz) => {
        const currentUser = this.props.currentUser

    return (<Card key={quiz.id} className="quiz-card">
      <CardContent>
        <CardHeader
         title={quiz.quizTitle}/>
      </CardContent>
        <CardActions>
        { currentUser.teacher && 
            <Link to={`/quizzes/edit/${quiz.id}`}>
            <Button
                size="small"
                variant="raised"
                > 
                    EDIT 
                <CreateIcon />
            </Button> 
            </Link>}
            <Link to={`/quizzes/${quiz.id}`} >
            <Button
                size="small"
                variant="raised"
            >
                PLAY
                <PlayCircleOutline/>
            </Button>
            </Link>
        </CardActions>
    </Card>
    )}

    render() {
        const {quizzes} = this.props

        return(
            <div>
                {quizzes.map(quiz => this.renderQuiz(quiz))}
            </div>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
        quizzes: state.quizzes,
        currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {getQuizzes})(QuizzesList)