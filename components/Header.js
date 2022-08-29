import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>SHIFT</Text>
            </View>

        );
    } 
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#FFA500",
        elevation: 1.5,
        marginTop: 50,
        padding: 15
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        color: "#fff"
    }
  });
  