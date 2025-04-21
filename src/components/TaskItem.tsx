
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/componentStyles/TaskItem.style';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    about: string;
  };
  onDelete: (id: string) => void; 
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <View style={styles.taskBox}>
      <View style={styles.taskContent}>
        <View>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <Text style={styles.taskAbout}>{task.about}</Text>
        </View>

        <TouchableOpacity
          style={styles.closeBox}
          onPress={() => onDelete(task.id)}
        >
          <Text style={styles.closeText}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
