import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';


export default function TestComponent() {
    return (
        <ScrollView style={{ padding: 20, backgroundColor: '#fff' }} >
            <View style={{ marginBottom: 20 }}>
                <Text>test component week03</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={{ borderColor: 'black', borderWidth: 3, padding: 10 }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={30}
                    multiline={false}
                    placeholder="Please enter your email"
                    returnKeyType="next"
                    onChangeText={(text) => { }}
                    defaultValue="Default text"
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Button
                    title="Press me"
                    onPress={() => Alert.alert("Simple Button pressed")}
                    color="#FF0066"
                />
            </View>

            <Text> Hello World </Text>

            <Image source={require('@/assets/week03/tiny_logo.png')} style={{ width: 50, height: 50 }} />
            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />
            <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} style={{ width: 50, height: 50 }} />


            <View style={{ flexDirection: 'column' }}>
                {/* Fixed Size */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <Image style={{ width: 100, height: 50 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Image style={{ width: 100, height: 100, borderRadius: 100 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>
            </View>

            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'gray' }}>
                    <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 10 }}>
                <FontAwesome name="heart" size={32} color="orange" />
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: "white" }}>หัวใจ</Text>
                </View>
            </View>


        </ScrollView>
    );
}