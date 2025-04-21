import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/componentStyles/TaskItem.style';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    about: string;
    completed: boolean;
  };
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onEdit: (task: any) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  onToggleComplete,
  onEdit,
}) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <View>
      
      <TouchableOpacity
        onPress={() => setShowEdit(!showEdit)} 
        activeOpacity={1}
      >
        <View style={styles.taskBox}>
          <View style={styles.taskContent}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => onToggleComplete(task.id)}
            >
              <Text style={styles.checkText}>
                {task.completed ? '✓' : ''}
              </Text>
            </TouchableOpacity>

            <View style={styles.taskDetails}>
              <Text
                style={[
                  styles.taskTitle,
                  task.completed && { textDecorationLine: 'line-through', opacity: 0.5 },
                ]}
              >
                {task.title}
              </Text>
              <Text
                style={[
                  styles.taskAbout,
                  task.completed && { textDecorationLine: 'line-through', opacity: 0.5 },
                ]}
              >
                {task.about}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>


      {showEdit && (
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.editBox}
            onPress={() => onEdit(task)} 
          >
            <Image
              source={require('../assets/Edit.png')}
              style={styles.editImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeBoxOutside}
            onPress={() => onDelete(task.id)} 
          >
            <Text style={styles.closeText}>x</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TaskItem;
