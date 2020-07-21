import React from "react";
import {ImageBackground, StyleSheet, View, Image, Text} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Sell What You Don't Need!</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log("I've been hit!")}/>
                <AppButton title="Register" color="secondary" onPress={() => console.log("I've been hit!")}/>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    },
});

export default WelcomeScreen;
