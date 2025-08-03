import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Card from '../unit/Card';
import Hotel from '../unit/Hotel';
import Menu from '../unit/Menu';
import Signup from "../unit/Signup";


export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Text style={{ display: 'flex', justifyContent: 'center', fontSize: 20, textAlign: 'center', fontWeight: 600 }}>Week 3</Text>
                <Menu />
                <Card />
                <Hotel />
                <Signup />
            </View>
        </ScrollView>
    );
}