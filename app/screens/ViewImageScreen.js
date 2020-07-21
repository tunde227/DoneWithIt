import React from "react";
import {StyleSheet, View, Image, SafeAreaView} from "react-native";

import colors from "../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const ViewImageScreen = () => {
    return (
        <View style={styles.background}>
                <View style={styles.closeButton}>
                    <MaterialCommunityIcons name="close" color="white" size={35}/>
                </View>
                <View style={styles.deleteButton}>
                    <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
                </View>
            <Image
                source={require("../assets/chair.jpg")}
                style={styles.imageBackground}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.dark,
        flex: 1,
    },
    closeButton: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    deleteButton: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

export default ViewImageScreen;
