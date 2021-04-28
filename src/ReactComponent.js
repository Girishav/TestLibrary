import React, {Component} from 'react';
import styles from './styles.module.css'
import PropTypes from 'prop-types';
import calendarRequest from "./calendarRequest";

export default class ReactComponent extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: null,
        }
    }

    static propTypes = {
        userName: PropTypes.string
    };

    componentWillMount(){
        this.setState({
            username: this.props.userName
        });
    }

    updateState() {

        var name = this.state.username
        console.log("girish user name ::",name)
        this.calendar = new calendarRequest();
        this.calendar.getCalendarList(name).then(response => {
            console.log("calendar list data ::",response)
          //  success(response);
        }).catch(error => {
            console.log("calendar list call failed ::", error);
          //  failure(error);
        }); 
         // this.setState({data: 'Data updated...'})
       }

    render() {
        return(  <div>
        <button onClick = {this.updateState.bind(this)}>Get Calendarlist</button>
     </div>);
    }
} 

