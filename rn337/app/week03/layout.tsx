import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

//data link
import { styles } from "../index";

const buttonLinkEx = [
  {
    titleId: 1,
    title: "TestComponent",
    Page: "week03/components/TestComponent",
  },
  {
    titleId: 2,
    title: "TestGreeting",
    Page: "week03/components/TestGreeting",
  },
  { titleId: 3, title: "travel", Page: "week03/components/travel" },
  { titleId: 4, title: "Resort", Page: "week03/Quiz/resort" },
  { titleId: 5, title: "Review", Page: "week03/Quiz/review" },
];

export default function ChoniceEx3() {
  return (
    <>
      <View>
        <Text style={styles.TextH1}>โปรดเลือกเมนู</Text>
      </View>
      <ScrollView>
        {buttonLinkEx.map((item: any) => (
          <View
            key={item.titleId}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <TouchableOpacity
              key={item.titleId}
              style={styles.buttonColor}
              onPress={() => router.push(item.Page)}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
