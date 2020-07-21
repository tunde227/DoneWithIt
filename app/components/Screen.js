import React from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet} from "react-native";

export default function Screen({children}) {
    return <SafeAreaView style={styles.paddingTop}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
});