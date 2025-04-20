import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  FlatList,
} from 'react-native';
import Input from '../components/input.tsx';
import styles from '../styles/screenStyles/addTask.style';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [tasks, setTasks] = useState<any[]>([]);

  const handleAddTask = () => {
  
    const newTask = {
      id: Date.now().toString(),
      title,
      about,
    };

    setTasks([newTask, ...tasks]);

    setTitle('');
    setAbout('');
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.taskBox}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskAbout}>{item.about}</Text>
    </View>
  );

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

      <View style={styles.taskListContainer}>
        {tasks.length === 0 ? (
          <View style={styles.noTaskContainer}>
            <View style={styles.line} />
            <Text style={styles.noTaskText}>No tasks</Text>
            <View style={styles.line} />
          </View>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingTop: 20 }}
          />
        )}
      </View>
    </View>
  );
};

export default AddTaskScreen;
