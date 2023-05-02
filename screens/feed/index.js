import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux';
import { logout } from '../../redux/userSlice';

export default function Feed({ navigation, route }) {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.value)
    console.log(userName)
    const handleLogOut = () => {
        dispatch(logout());
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text>Bem vindo {userName.user}</Text>
            <Text>ID: {route.params.id}</Text>
            <TouchableOpacity onPress={handleLogOut}>
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
