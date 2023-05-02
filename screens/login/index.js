import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import users from '../../db/db';

export default function Perfil({ navigation }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleAuthentication = () => {
        const authenticatedUser = users.find(e => e.name == user && e.password == password);
        if (authenticatedUser) {
            dispatch(login({ isLogged: true, user: user }));
            console.log(user, 'autenticado');
            navigation.navigate('Feed', { name: user, id: authenticatedUser.id });
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='User'
                placeholderTextColor={'#fff'}
                value={user}
                onChangeText={(text) => setUser(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor={'#fff'}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity onPress={handleAuthentication}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
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
        backgroundColor: '#242423',
    },
    input: {
        borderWidth: 5,
        borderColor: '#732894',
        padding: 15,
        fontSize: 15,
        borderRadius: 15,
        margin: 15,
        width: 300,
        height: 50,
        color: '#fff',
    },
});
