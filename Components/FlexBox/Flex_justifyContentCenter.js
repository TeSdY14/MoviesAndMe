import React from 'react';
import { View } from 'react-native';

class Flex_justifyContentCenter extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center'}} >
                <View style={{ height: 50, width: 50, backgroundColor: 'red'}} />
                <View style={{ height: 50, width: 50, backgroundColor: 'green'}} />
                <View style={{ height: 50, width: 50, backgroundColor: 'blue'}} />
                <View style={{ height: 50, width: 50 }} />
            </View>
        )
    }
}

export default Flex_justifyContentCenter;
