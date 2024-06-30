import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DividerWithText from "../components/Divider";

function Login() {
    const navigaton = useNavigation()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Warning", "Entered Email is invalid");
            return false;
        }
        return true;
    };

    const validatePassword = (password: string | any[]) => {
        if (password.length < 8) {
            Alert.alert("Warning", "Password should be a minimum of 8 characters");
            return false;
        }
        return true;
    };
    const logincheck = async () => {
        if (!email) {
            Alert.alert("Warning", "Please enter Your email")
            return;
        }
        if (!password) {
            Alert.alert("Warning", "please enter your Password")
            return;
        } 
        if (!validateEmail(email)) {
            return;
        }
        if (!validatePassword(password) || !validateEmail(email)) {
            return;
        }
        else {
            console.log("hello");
            navigaton.navigate("Home")
        }

    }
    return (
        <ScrollView style={{ backgroundColor: 'gray', flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
                <Image source={require("../assests/appLogoIcon.png")} style={{ width: "90%", height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
                    resizeMode="center" />

                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'column' }}>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 15,
                            paddingStart: 15,
                            marginBottom: 20,
                            color: "black",
                            fontSize: hp(2.4)
                        }}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email.trim()}
                        onChangeText={(email) => setEmail(email.trim())}
                    />
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 15,
                        flexDirection: "row"

                    }}>
                        <TextInput

                            style={{ paddingRight: 10, marginStart: 13, width: '85%', fontSize: hp(2.4) }}
                            placeholder="Password"
                            secureTextEntry={!passwordVisible}
                            value={password.trim()}
                            onChangeText={(pass) => setPassword(pass.trim())}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={{ padding: 10, marginStart: 'auto', marginTop: hp(1.1), marginEnd: hp(1) }} >
                            {passwordVisible ? <Image source={require("../../src/assests/eyesOn.png")} resizeMode="contain" /> : <Image source={require("../../src/assests/eyeOff.png")} />}
                        </TouchableOpacity>


                    </View>
                    <TouchableOpacity onPress={() => navigaton.navigate("Forgot")}>
                        <Text style={{ alignItems: 'flex-end', marginStart: 'auto', color: '#ADD8E6', marginTop: 5, fontSize: 14, fontWeight: "700" }}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#ADD8E6', padding: 10, marginTop: 15, borderRadius: 15 }} onPress={logincheck}>
                        <Text style={{ marginStart: hp(19), marginEnd: hp(0), fontWeight: '600', color: 'white', fontSize: hp(2.3) }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <DividerWithText />
                    <View style={{ padding: 10 }}>
                        <Text style={styles.text}>
                            didn't have an account yet?{' '}
                            <Text
                                style={styles.registerText}
                                onPress={() => navigaton.navigate("SignUp")}
                            >
                                Register
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    text: {
        alignItems: 'flex-end',
        marginStart: hp(7),
        color: 'black',
        fontSize: hp(2.4),
        fontWeight: "500",
    },
    registerText: {
        color: '#ADD8E6',
        textDecorationLine: 'underline',
    },
});

export default Login;