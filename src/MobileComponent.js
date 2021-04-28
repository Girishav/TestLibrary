import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import RectangularButton from "./RectangularButton";
import calendarRequest from "./calendarRequest"
import PropTypes from 'prop-types';

export default class MobileComponent extends Component {
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

    onclick(){

        var name = this.state.username;
        this.calendar = new calendarRequest();
        this.calendar.getCalendarList(name).then(response => {
            console.log("calendar list data ::",response)
          //  success(response);
        }).catch(error => {
            console.log("calendar list call failed ::", error);
          //  failure(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#303030' barStyle='light-content'/>

                <Text style={styles.headingStyle}>555 Test</Text>
                <Text style={styles.subheadingStyle}>Choose from one of the options below.</Text>

                <RectangularButton style={styles.button} handleOnPress={this.onclick.bind(this)}
                                   text="CALENDER LIST"
                />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#303030',
    },
    headingStyle: {
        fontSize: 34,
        marginTop: '25%',
        color: '#217DAF',
        justifyContent: 'center',
    },
    subheadingStyle: {
        fontSize: 16,
        marginTop: 30,
        marginBottom: 10,
        color: '#b2b2b2',
        justifyContent: 'center',
    },
    copyrighttext_style: {
        bottom: 0,
        fontSize: 12,
        marginBottom: 20,
        color: '#DAA520',
        position: 'absolute',
    },

    button: {
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#319ed9',
        backgroundColor: '#319ed9',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff',
        textAlign: 'center',
    },

    signOutText:{
        marginTop: '5%',
        color: '#1565c0',
        textAlign: 'center',
    }

});