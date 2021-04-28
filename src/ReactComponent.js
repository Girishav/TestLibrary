import React, {Component} from 'react';
import styles from './styles.module.css'
import PropTypes from 'prop-types';

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
        ExampleComponent.getCalendarList(name).then(response => {
           console.log(" Calendarlist Data ::",response)
         }).catch(error => {
           console.log("get calendarlist failed ::", error);
         }); 
         // this.setState({data: 'Data updated...'})
       }

    render() {
        return(  <div>
        <button onClick = {this.updateState.bind(this)}>Get Calendarlist</button>
     </div>);
    }
} 

