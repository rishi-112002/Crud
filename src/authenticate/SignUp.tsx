import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DividerWithText from "../components/Divider";

function SignUp() {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Warning", "Entered Email is inValid")
            return true;
        }

    };
    const ValidatePassword = (pass: string) => {
        if (pass.length <= 8) {
            Alert.alert("Warning", "password is minium of 8 digits")
            return true;
        }

    }
    const navigateToLogin = () => {
        navigation.navigate("Login")
    }

    const SignUpCheck = () => {
        if (!name) {
            Alert.alert("Warning", "please enter name");
            return;
        }
        if (!email) {
            Alert.alert("Warning", "Please enter Your email")
            return;
        }
        if (!password) {
            Alert.alert("Warning", "please enter your Password")
            return;
        }
        if (!validateEmail(email) || !ValidatePassword(password)) {
            navigateToLogin();
        }

    }
    return (
        <ScrollView style={{ backgroundColor: 'gray', flex: 1 }} keyboardShouldPersistTaps="always">
            <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../src/assests/backArrow.png")} style={{ width: 35, height: 25, resizeMode: "contain", marginTop: 18, marginStart: 5 , tintColor:'#ADD8E6' }} />
                </TouchableOpacity>
            <Image source={require("../assests/appLogoIcon.png")} style={{ width: "90%", height: 240, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
                    resizeMode="center" />  
                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'column' }}>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 15,
                            paddingStart: 15,
                            marginBottom: 20
                        }}
                        placeholder="name"
                        keyboardType="name-phone-pad"
                        value={name}
                        onChangeText={(name) => setName(name)}
                    />
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 15,
                            paddingStart: 15,
                            marginBottom: 20,
                            color: "black"
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
                            style={{ paddingRight: 10, marginStart: 13, width: '85%' }}
                            placeholder="Password"
                            secureTextEntry={!passwordVisible}
                            value={password.trim()}
                            onChangeText={(pass) => setPassword(pass.trim())}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={{ padding: 10, marginStart: 'auto', marginTop: hp(1.1), marginEnd: hp(1) }} >
                            {passwordVisible ? <Image source={require("../../src/assests/eyesOn.png")} resizeMode="contain"/> : <Image source={require("../../src/assests/eyeOff.png")}/>}
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#ADD8E6', padding: 10, marginTop: 20, borderRadius: 15 }} onPress={SignUpCheck}>
                        <Text style={{ marginStart: hp(19), marginEnd: hp(0), fontWeight: '600', color: 'white', fontSize: hp(2.3) }}>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                    <DividerWithText/>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.text}>
                           already have a account?{' '}
                            <Text
                                style={styles.registerText}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Login
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
export default SignUp;

