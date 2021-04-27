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
            textmsg: null,
        }
    }

    static propTypes = {
        status: PropTypes.string
    };

    componentWillMount(){
        this.setState({
            textmsg: this.props.status
        });
    }

    render() {
        return <div className={styles.test}>Example Component: {this.state.textmsg}</div>
    }
} 

