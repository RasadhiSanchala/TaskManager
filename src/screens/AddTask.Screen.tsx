import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/input.tsx';  
import TaskItem from '../components/TaskItem';  
import styles from '../styles/screenStyles/addTask.style'; 
import DeletePopup from '../components/deletePopup.tsx';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [tasks, setTasks] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };

    loadTasks();
  }, []);

  const handleAddTask = async () => {
    if (!title.trim() || !about.trim()) {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title,
      about,
      completed: false, 
    };
    

    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);

    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving task:', error);
    }

    setTitle('');
    setAbout('');
  };

  const handleToggleComplete = async (taskId: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
  
    
    const sortedTasks = [
      ...updatedTasks.filter(task => !task.completed),
      ...updatedTasks.filter(task => task.completed),
    ];
  
    setTasks(sortedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(sortedTasks));
  };
  

  const handleDeletePress = (taskId: string) => {
    setTaskToDelete(taskId);
    setShowPopup(true);
  };


  const confirmDelete = async () => {
    if (taskToDelete) {
      const updatedTasks = tasks.filter(task => task.id !== taskToDelete);
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTaskToDelete(null);
      setShowPopup(false);
    }
  };

  
  const cancelDelete = () => {
    setTaskToDelete(null);
    setShowPopup(false);
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

      <ScrollView style={styles.taskListContainer}>
        {tasks.length === 0 ? (
          <View style={styles.noTaskContainer}>
            <Text style={styles.noTaskText}>No tasks</Text>
          </View>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeletePress}
              onToggleComplete={handleToggleComplete} 
            />
          ))
          
        )}
      </ScrollView>

  
      <DeletePopup
        visible={showPopup}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </View>
  );
};

export default AddTaskScreen;
