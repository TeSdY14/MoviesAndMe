import React from 'react';
import { View } from 'react-native';

class TestFlex_WithSmallSquare extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange'}} >
                <View style={{ height: 50, width: 50, backgroundColor: 'red'}} />
                <View style={{ height: 50, width: 50, backgroundColor: 'green'}} />
                <View style={{ height: 50, width: 50, backgroundColor: 'blue'}} />
                <View style={{ height: 50, width: 50 }} />
            </View>
        )
    }
}

export default TestFlex_WithSmallSquare;
