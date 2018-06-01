import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import CreateQuizButton from '../containers/createQuizButton'
import QuizzesList from '../containers/quizzeslist'
import Paper from 'material-ui/Paper'
import './homepageTeacher.css'

// const currentUser = [
//     {
//         id: 1,
//         firstName: 'Anna',
//         lastName: 'Bol',
//         email: 'anna@bol.com',
//         teacher: false
//     }
// ]

class HomePageTeacher extends PureComponent {


    render() {
        const {currentUser} = this.props

        return(
            <Paper className="outer-paper">
                { currentUser.teacher && <CreateQuizButton/>}

                <QuizzesList/>
            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
    return {
      currentUser: state.currentUser
    }
  }

export default connect (mapStateToProps)(HomePageTeacher);

