import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
function Forgot() {
    const [email, setEmail] = useState("")
    const navigation = useNavigation();
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Warning", "Entered Email is inValid")
            return true;
        }
    };
    const ForgotPass = () => {
        if (!email) {
            Alert.alert("Warning", "please enter email")
        }
        if (!validateEmail(email)) {
            Alert.alert("Successful", `Your forgot password link is sent to ${email}`)
        }
    }
    return (
        <ScrollView style={{ backgroundColor: 'gray', flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../src/assests/backArrow.png")} style={{ width: 35, height: 25, resizeMode: "contain", marginTop: 18, marginStart: 5 , tintColor:'#ADD8E6' }} />
                </TouchableOpacity>
                <Image source={require("../assests/appLogoIcon.png")} style={{ width: "90%", height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
                    resizeMode="center" />
                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'column' }}>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 15,
                            paddingStart: 15,
                            marginBottom: 10,
                            marginTop: 10,
                            color: "black",
                            fontSize: hp(2.4)
                        }}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email.trim()}
                        onChangeText={(email) => setEmail(email.trim())}
                    />
                    <TouchableOpacity style={{ backgroundColor: '#ADD8E6', padding: 10, marginTop: 15, borderRadius: 15 }} onPress={ForgotPass}>
                        <Text style={{ marginStart: hp(19), marginEnd: hp(0), fontWeight: '600', color: 'white', fontSize: hp(2.3) }}>
                            Forgot
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )

}
export default Forgot;