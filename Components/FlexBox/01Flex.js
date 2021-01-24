import React from 'react';
import { View } from 'react-native';

class TestFlex extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange'}} >
                <View style={{ flex: 1, backgroundColor: 'red'}} />
                <View style={{ flex: 2, backgroundColor: 'green'}} />
                <View style={{ flex: 1, backgroundColor: 'blue'}} />
                <View style={{ flex: 2 }} />
            </View>
        )
    }
}

export default TestFlex;
