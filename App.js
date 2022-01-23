import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert, Platform } from 'react-native';
import { theme } from './styles/styles';
import { EvilIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const STORAGE_KEY = "@toDos"
  const WORKING_KEY = "@working"

  const [working, setWorking] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [text, setText] = useState('');
  const Travel = () => setWorking(false);
  const Work = () => setWorking(true);
  const [toDos, setToDos] = useState({});
  const [loading, setLoading] = useState(true);

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, completed }
    }
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
    console.log(newToDos);
  }

  const saveToDos = async (saveToDo) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(saveToDo))
    await AsyncStorage.setItem(WORKING_KEY, JSON.stringify(working))
  }

  const loadToDos = async () => {
    const w = await AsyncStorage.getItem(WORKING_KEY);
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(s))
    setWorking(JSON.parse(w))
    console.log(toDos);
  }

  const deleteToDo = (key) => {
    if (Platform.OS === "web") { 
      const ok = confirm("Do you wnat to delete this To do?")
      if(ok) {
        const newToDos = { ...toDos }
        delete newToDos[key]
        setToDos(newToDos);
        saveToDos(newToDos);
        console.log(newToDos);
      }
    }
    else {
      Alert.alert("Delete To Do?", "Are You Sure?", [
        { text: "cancel" },
        {
          text: "I am Sure",
          onPress: () => {
            const newToDos = { ...toDos }
            delete newToDos[key]
            setToDos(newToDos);
            saveToDos(newToDos);
            console.log(newToDos);
          }
        }
      ])
    }
    return;
  }

  useEffect(() => {
    loadToDos();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={Work}>
          <Text style={{ ...styles.btnText, color: working ? theme.white : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Travel}>
          <Text style={{ ...styles.btnText, color: !working ? theme.white : theme.grey }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          returnKeyType='done'
          onSubmitEditing={addToDo}
          onChangeText={(payload) => setText(payload)}
          placeholder={working ? "Add To Do " : "Where Do You Want To Go? "}
          style={styles.input}
        />
        <ScrollView>
          {
            Object.keys(toDos).map((key) => (
              toDos[key].working === working ? (
                <View style={styles.toDo} key={key}>
                  <Text style={styles.toDoText}>{toDos[key].text}</Text>
                  <TouchableOpacity onPress={() => deleteToDo(key)}>
                    <EvilIcons name="trash" size={24} color={theme.white} />
                  </TouchableOpacity>
                </View>
              ) : null
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600"
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  toDoText: {
    color: theme.white,
    fontSize: 16,
    fontWeight: "500"
  }
});
