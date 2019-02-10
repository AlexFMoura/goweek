import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../services/api';

import Icon from 'react-native-vector-icons/Ionicons';


export default class Tweet extends Component {

    handleLike = () => {
        const { _id } = this.props.tweet;

        api.post(`likes/${_id}`);
    }
    render() {
        const { tweet } = this.props;
        
        return (
            <View style={styles.container}>
                <Text style={styles.author}>{tweet.author}</Text>
                <Text style={styles.content}>{tweet.content}</Text>

                <TouchableOpacity onPress={this.handleLike} style={styles.likeButton}>
                    <Icon name="ios-heart-empty" size={20} color="#999"></Icon>
                    <Text style={styles.likeText}>{tweet.likes}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    header: {
      paddingTop: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
  
    button: {
      height: 32,
      paddingHorizontal: 20,
      borderRadius: 16,
      backgroundColor: "#4BB0EE",
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    },
  
    input: {
      margin: 20,
      fontSize: 16,
      color: "#333"
    }
});
  