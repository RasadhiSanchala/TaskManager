import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import Input from '../components/input.tsx';
import styles from '../styles/screenStyles/addTask.style';


const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  const handleAddTask = () => {
    if (!title.trim() || !about.trim()) {
      Alert.alert('Error', 'Please fill out both fields');
      return;
    }

    // Here you can call your Zustand action or any logic
    console.log('Task added:', { title, about });

    // Reset fields
    setTitle('');
    setAbout('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.inputWrapper}>
          <Input
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
           
          />
          <Input
            placeholder="About"
            value={about}
            onChangeText={setAbout}
         
          />
        </View>

        <TouchableOpacity style={styles.plusButton} onPress={handleAddTask}>
              <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTaskScreen;
