import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Button({ tittle, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Text style={styles.text}>{tittle}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 20,
        width: 60,
        backgroundColor: "cyan"
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        color: "black"
    }
});