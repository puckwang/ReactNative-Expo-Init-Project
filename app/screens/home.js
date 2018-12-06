import React, {PropTypes} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../styles/main';
import {connect} from "react-redux";
import {actionCreators} from "../redux/actions/template";
import i18n from "../i18n";

class App extends React.Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(actionCreators.getTitle("Word!"));
    }

    render() {
        const {title} = this.props;

        return (
            <View style={styles.container}>
                <Text>{i18n.t("home.hello", {name: "Puck"})}</Text>
                <Text>{title}</Text>
                <Button onPress={() => {
                    const {dispatch} = this.props;
                    dispatch(actionCreators.getTitle("Word!"));
                }} title="Click"/>
            </View>
        );
    }
}

const mapStateToProps = (store) => ({
    title: store.templateReducer.title,
})

export default connect(mapStateToProps)(App);