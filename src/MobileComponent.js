import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import RectangularButton from "./RectangularButton";
import PropTypes from 'prop-types';

export default class MobileComponent extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            userId: null,
        }
    }

    static propTypes = {
        status: PropTypes.string
    };

    onclick(){

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#303030' barStyle='light-content'/>

                <Text style={styles.headingStyle}>555 Test</Text>
                <Text style={styles.subheadingStyle}>Choose from one of the options below.</Text>

                <RectangularButton style={styles.button} handleOnPress={this.onclick}
                                   text="EMERGENCY CALL"
                />

                <RectangularButton style={styles.button} handleOnPress={this.onclick}
                                   text="PSTN CALL"
                />
                <RectangularButton style={styles.button} handleOnPress={this.onclick}
                                   text="VIDEO CALL"
                />
                <RectangularButton style={styles.button} handleOnPress={this.onclick}
                                   text="JOIN ROOM"
                />
                <RectangularButton style={styles.button} handleOnPress={this.onclick}
                                   text="CAMERA CALL"
                />
                <RectangularButton style={styles.button} handleOnPress={this.onclick}
                                   text="SETTINGS"
                />

                <Text onPress={()=>this.signOut()} style = {styles.signOutText}>
                    Sign Out: {this.state.userId}
                </Text>
                <Text style={styles.copyrighttext_style}> Copyright(c) 2018 Comcast. All rights reserved. </Text>
                <FlashMessage position="top"/>
            </View>
        );
    }
} 