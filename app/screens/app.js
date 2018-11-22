import React, {PropTypes} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../styles/main';
import {connect} from "react-redux";
import {actionCreators} from "../redux/actions/template";

class App extends React.Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(actionCreators.getTitle("Puck"));
    }

    render() {
        const {title} = this.props;

        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app! :P</Text>
                <Text>{title}</Text>
                <Button onPress={() => {
                    const {dispatch} = this.props;
                    dispatch(actionCreators.getTitle("Puck" + Math.random()));
                }} title="Click"/>
            </View>
        );
    }
}

const mapStateToProps = (store) => ({
    title: store.templateReducer.title,
})

export default connect(mapStateToProps)(App);