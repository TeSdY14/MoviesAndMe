import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import FilmItem from "./FilmItem";
import MyActivityIndicator from "./MyActivityIndicator"

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.page = 0
        this.totalPages = 0
        this.searchedText = ""
        this.state = {
            films: [],
            isLoading: false
        }
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [ ...this.state.films, ...data.results ], // Equivalent à "films: this.state.films.concat(data.results)"
                    isLoading: false
                })
            })
        }
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: [],
        }, () => {
            console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length + ".")
            this._loadFilms();
        })
    }

    _searchedTextInputChanged(text) {
        this.searchedText = text;
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (
                <MyActivityIndicator />
            )
        }
    }

    render() {
        return (
            /* View ici est un component custom comprenant des components native (textInput et Button) */
            <View style={ styles.main_container } /* ici le Style fonctionne */ >
                <TextInput style={styles.textInput}
                           placeholder='Titre du film'
                           onChangeText={(text) => this._searchedTextInputChanged(text)}
                           onSubmitEditing={() => this._searchFilms()}
                />
                <Button title="Rechercher"
                        onPress={() => this._searchFilms() } /* onPress={() => { ... } } équivaut à  onPress={ function() { ... } } */
                />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>} /* renderItem={({item}) => <Text>{item.title}</Text>} est équivalent à renderItem={function ({item}) { return <Text>{item.title}</Text> }} */
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms()
                        }
                    }}
                />
                { this._displayLoading()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textInput: {
        margin: 5,
        height: 50,
        borderColor: '#00BFFF',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Search;
