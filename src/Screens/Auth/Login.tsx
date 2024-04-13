import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    Image,
    Button,
    Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../../Components/CompLogin/InputComponent";

import logo from "./../../../assets/Images/EctoEden slogan.png";
import ButtonComponent from "../../Components/CompLogin/ButtonComponent";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Login() {
    const { login, setIdentidad } = useContext(AuthContext);
    interface FormData {
        name: string;
        password: string;
    }

    const initialFormData: FormData = {
        name: "",
        password: "",
    };

    const [data, setData] = useState<FormData>(initialFormData);

    function loginGet() {
        axios
            .get("https://www.abundancia360.com/mlearning/api2.php", {
                params: {
                    user: data.name,
                    pw: data.password,
                },
            })
            .then(function (response) {
                console.log(response.data);
                setIdentidad(response.data)
                console.log(response.status);

                if ("User and password required." === response.data) {
                    Alert.alert(
                        'Error',
                        response.data,
                        [

                            { text: 'Aceptar', onPress: () => console.log('Aceptar presionado') },
                        ],
                    );
                    return
                }


                if ("Invalid password." === response.data) {
                    Alert.alert(
                        'Error',
                        response.data,
                        [
                            { text: 'Aceptar', onPress: () => console.log('Aceptar presionado') },
                        ],
                    );

                    return
                }

                if ("User not found." === response.data) {
                    Alert.alert(
                        'Error',
                        response.data,
                        [
                            { text: 'Aceptar', onPress: () => console.log('Aceptar presionado') },
                        ],
                    );

                    return
                }

                AsyncStorage.setItem('Identidad', JSON.stringify(response.data));
                login(data.name, data.password);

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const areFieldsEmpty = () => {
        for (const key in data) {
            if (data[key as keyof FormData].trim() === "") {
                return true; // Si algún campo está vacío, retorna true
            }
        }
        return false; // Si ningún campo está vacío, retorna false
    };

    const insertData = (text: any, type: any) => {
        setData((prevValue) => ({
            ...prevValue,
            [type]: text,
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    width: "100%",
                    height: windowHeight * 0.2,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image source={logo} style={{ width: "80%", height: "100%" }} />
            </View>

            <View
                style={{
                    marginVertical: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <InputComponent
                    value={data.name}
                    onChangeText={(text: any) => insertData(text, "name")}
                    placeholder="Email"
                />
            </View>

            <View
                style={{
                    marginVertical: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <InputComponent
                    value={data.password}
                    onChangeText={(text: any) => insertData(text, "password")}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>

            <ButtonComponent
                title={"Ingresar"}
                disabled={areFieldsEmpty()}
                onPress={() => {
                    loginGet()
                    console.log(data.name, data.password);
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272727",
        justifyContent: "center",
        alignItems: "center",
    },
});
