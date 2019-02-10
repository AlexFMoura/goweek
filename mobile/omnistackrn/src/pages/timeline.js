import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import socket from 'socket.io-client';
import api from '../services/api';
import Tweet from '../components/Tweet';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Timeline extends Component {

    static navigationOptions = ({ navigation }) => ({
        title ="Início",
        headerRight:(
            <TouchableOpacity onPress={()=> {navigation.navigate("New")}}>
                <Icon 
                    style={{ marginRight: 20 }}
                    name="add-cicle-outline"
                    size={24}
                    color="#4BB0EE"
                />
            </TouchableOpacity>
        )
    });
    
    state = {
        tweet =[],
    }

    async componentDidMout(){
        this.subscribeToEvents();

        const response = await api.get("tweets");

        this.setState({ tweets: responde.date })
    };

    subscribeToEvents = () => {
        const io = socket('http://localhost:3000');

        io.on('tweet', data => {
            this.setState({ tweets: [data, ...this.state.tweets] });
        });    

        io.on('tweet', data => {
            this.setState({
                tweets: this.state.tweets.map(
                    tweet => (tweet._id === data._id ? data : tweet)
                )
            });
        } );
    };

    render () {
        return (
            <View style={styles.continer}>
                <FlatList 
                    data={this.state.tweet}
                    KeyExtractor={tweet => tweet._id}
                    renderItem={ ({item}) => <Tweet tweet={item}/>}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
});
  