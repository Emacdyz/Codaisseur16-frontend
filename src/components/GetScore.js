import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getResponse} from '../actions/questions'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'


class GetScore extends Component{

componentWillMount(props) {
    this.props.getResponse(3)
}

handleResponse=(e)=>{
    e.preventDefault()
    this.props.getResponse(3)
}

async getJson(json){
    await json
    console.log('json received')
}

render() {
   
    return (
        <div>
           <Table style={{
            width:'50%' }} >
             <TableHead>
               <TableRow>
                 <TableCell style={{width:'10px'}}>User ID</TableCell>
                 <TableCell style={{width:'10px'}}>Quiz ID</TableCell>
                 <TableCell style={{width:'10px'}}>Score</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
                   <TableRow key={1}>
                   {console.log(typeof this.props.GetResponse)}
                     <TableCell style={{width:'10px'}}>{this.props.GetResponse.user_id}</TableCell>
                     <TableCell style={{width:'10px'}}>{this.props.GetResponse.quiz_id}</TableCell>
                     <TableCell style={{width:'10px'}}>{this.props.GetResponse.score}</TableCell>
                   </TableRow>
             </TableBody>
           </Table>
           <br/>
           <Link to='/quizzes'><Button variant="raised" color="primary" >
         TAKE ANOTHER QUIZ
      </Button></Link>
        </div>
     )
   }
}

const mapStateToProps = (state) => ({
    GetResponse:state.GetResponse,
    currentUser:state.currentUser,
    
  })


export default connect(mapStateToProps, {getResponse})(GetScore)