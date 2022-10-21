import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, ScrollView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Task from './src/screens/Task';

export default function App() {
   const [task, setTask] = React.useState();
   const [taskItems, setTaskItems] = React.useState([]);

   function AddTask() {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      console.log('setTaskItems done!')
      setTask(null);
      console.log('setTask done!')
   }

   function CompleteTask(index: number) {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
   }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ 
         flexGrow: 1
       }} 
       keyboardShouldPersistTaps="handled" 
      >
         <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>ToDo List</Text>
            <View style={styles.items}>
               {taskItems.map((item, index) => {
                  return(
                     <TouchableOpacity 
                        key={index}
                        onPress={() => CompleteTask(index)} 
                     >
                        <Task text={item} />
                     </TouchableOpacity>
                  )
               })}
            </View>
         </View>
      </ScrollView>

      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.writeTaskWrapper}
      >
         <TextInput
            style={styles.input}
            placeholder={"Add new item"}
            value={task}
            onChangeText={(text) => setTask(text)}
         />
         <TouchableOpacity onPress={() => AddTask()}>
            <View style={styles.addWrapper}>
               <Text style={styles.addText}>+</Text>
            </View>
         </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* <Image source={{ uri: 'https://wallpapercrafter.com/th800/362735-Video-Game-Honkai-Impact-3rd-Phone-Wallpaper.png' }} style={styles.logo} />
      <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>
      <TouchableOpacity style={styles.buttonPog} onPress={() => alert('Hi :D')}>
         <Text style={styles.buttonText}>Pick a photo :D</Text>
      </TouchableOpacity>
      <StatusBar style="auto" /> */}
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
  logo: {
   width: 305,
   height: 450,
   marginBottom: 10,
  },
  instructions: {
   color: '#888',
   fontSize: 18,
   marginHorizontal: 15,
  },
  buttonPog: {
   backgroundColor: 'blue',
   padding: 20,
   borderRadius: 5,
  },
  buttonText: {
   fontSize: 20,
   color: '#fff',
  },
  thumbnail: {
   width: 300,
   height: 300,
   resizeMode: "contain"
  },
  tasksWrapper: {
   paddingTop: 80,
   paddingHorizontal: 20,
 },
 sectionTitle: {
   fontSize: 24,
   fontWeight: "bold",
 },
 items: {
   marginTop: 30,
 },
 writeTaskWrapper: {
   position: "absolute",
   bottom: 60,
   width: "100%",
   flexDirection: "row",
   justifyContent: "space-around",
   alignItems: "center",
 },
 input: {
   paddingVertical: 15,
   paddingHorizontal: 15,
   backgroundColor: "#FFF",
   width: 250,
 },
 addWrapper: {
   width: 60,
   height: 60,
   backgroundColor: "#FFF",
   justifyContent: "center",
   alignItems: "center",
 },
 addText: {},
});
