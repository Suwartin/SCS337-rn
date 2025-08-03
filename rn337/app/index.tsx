import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const buttonLinlkpage = [
  {
    titleId: 1,
    title: 'แบบผึก week02 Flexbox',
    Page: '/week02/layout'
  },
  {
    titleId: 2,
    title: 'แบบผึก week03 Components and Props',
    Page: '/week03/layout'
  },
  {
    titleId: 3,
    title: 'แบบผึก week05 Health App',
    Page: '/week05/health'
  },
  {
    titleId: 4,
    title: 'แบบผึก week06 HomeScreen',
    Page: '/week06/home'
  }
]


export default function Index() {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center",
      }}
    >
      <Text style={styles.TextH1}>My work as SCS337 การพัฒนาแอปพลิเคชันบนอุปกรณ์เคลื่อนที่</Text>
      <Text style={styles.TextH3}>Mr.Suwartin Kayaiwong 65222420018</Text>

      {
        buttonLinlkpage.map((item: any) =>
        (
          <TouchableOpacity
            key={item.titleId}
            style={styles.buttonColor}
            onPress={() => router.push(item.Page)}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: 'center' }}>{item.title}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

export const styles = StyleSheet.create({
  TextH1: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    padding: 20,
    fontSize: 32,
    color: '#f75128ff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  TextH3: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    padding: 20,
    fontSize: 24,
    color: '#cf1717ff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonColor: {
    padding: 16,
    paddingHorizontal: 80,
    marginVertical: 6,
    margin: 12,
    backgroundColor: '#d052dbff',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 100,
    width: 300
  }
});