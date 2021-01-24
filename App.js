import React from 'react';
import Search from "./Components/Search";
import Flex_justifyContentCenter_alignItemsCenter from "./Components/FlexBox/Flex_justifyContentCenter_alignItemsCenter";

export default class App extends React.Component {
    // render() {...}  équivaut à  render = function() {...}
    render() {
        return (
            <Search/>
        )
    }
}
