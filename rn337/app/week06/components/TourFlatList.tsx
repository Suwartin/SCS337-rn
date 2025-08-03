import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function TourFlatList(props: any) {

    const [onlineTours, setOnlineTours] = useState<any[]>([]);
    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);



    return (
        <View style={props.style}>
            <Text style={{ fontSize: 24, fontWeight: 700 }}>Tour with FlatList</Text>
            <Text style={{ fontSize: 16, marginVertical: 12, color: "grey" }} >Let find out what most interesting things</Text>
            <FlatList
                style={{ paddingBottom: 12, marginTop: 20 }}
                horizontal={true}
                data={onlineTours}
                keyExtractor={item => item.id}
                renderItem={
                    ({ item, index }) => {
                        // console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }} >
                                <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ fontSize: 20, color: "white" }}>{item.title}</Text>
                                </View>
                            </View>
                        );
                    }
                }
                
            />
        </View>
    );
}

