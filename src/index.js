import React from "react";
import ReactDOM from "react-dom";
let body = {
    textAlign: "center",
    fontFamily: "Arial"
}
const App = props => {
return <NumberOfStudents/>
};
class NumberOfStudents extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            enrolledStudents: 9000 ,
            waitlistedStudents: 300,
            newAmount: 0,
            newWaitlisted: 0  
            };
        }
        incrementEnrolled(){
            this.setState({enrolledStudents: this.state.enrolledStudents + 1})
        }
        multipleIncrementE(){
            this.setState({
                enrolledStudents: this.state.enrolledStudents + parseInt(this.state.newAmount)
            })
        }
        incrementWaitlisted(){
            this.setState({waitlistedStudents: this.state.waitlistedStudents + 1})
        }
        manyWaitlisted(){
            this.setState({
                waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.newWaitlisted)
            })
        }
        render() {
            return(
                <div style={body}>
                    <h1>Enrolled Students: {this.state.enrolledStudents} </h1>
                    <button onClick={this.incrementEnrolled.bind(this)}>Add 1 Enrolled Student</button>

                    <h2>Add Multiple Enrolled Students:</h2>
                    <input type="number" onChange={event => this.setState({newAmount: event.target.value})}
                    value={this.state.newAmount} />
                    <button onClick={this.multipleIncrementE.bind(this)}>Increase Students</button>

                    <h1>Waitlisted Students: {this.state.waitlistedStudents} </h1>
                    <button  onClick={this.incrementWaitlisted.bind(this)}>Add 1 Waitlisted Student</button>
                    <h2>Add Multiple Waitlisted Students:</h2>
                    <input type="number" onChange={event => this.setState({newWaitlisted: event.target.value})}
                    value={this.state.newWaitlisted}/>
                    <button onClick={this.manyWaitlisted.bind(this)}>Increase Students</button>
                </div>
            )
        }
    
   
}
ReactDOM.render(<App/>,document.getElementById('root'));