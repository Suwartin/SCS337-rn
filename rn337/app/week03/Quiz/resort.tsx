import React from 'react';
import { ScrollView, View } from 'react-native';
import Section1 from '../unit/Section1';
import Section2 from '../unit/Section2';
import Section3 from '../unit/Section3';
import Section4 from '../unit/Section4';
import Section5 from '../unit/Section5';
import Section6 from '../unit/Section6';
import Section7 from '../unit/Section7';
import Section8 from '../unit/Section8';

export default function Resort() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff'}}>
            <Section1 />
            <Section2 />
            <Section3 />
            <View style={{ borderBottomWidth: 1, borderTopWidth: 1, paddingVertical: 20, borderColor: '#e0e0e0', marginHorizontal: 20 }}>
                <Section4 />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#e0e0e0', marginHorizontal: 20 }} >
                <Section5 />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#e0e0e0', marginHorizontal: 20, paddingVertical: 20 }} >
                <Section6 />
            </View>
            <Section7 />
            <Section8 />
        </ScrollView >
    );
}