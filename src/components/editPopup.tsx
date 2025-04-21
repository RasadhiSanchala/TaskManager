import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/componentStyles/editPopup.style';

type Props = {
  visible: boolean;
  initialTitle: string;
  initialAbout: string;
  onCancel: () => void;
  onSave: (title: string, about: string) => void;
};

const EditTaskPopup: React.FC<Props> = ({
    visible,
    initialTitle,
    initialAbout,
    onCancel,
    onSave,
  }) => {
  
    const [title, setTitle] = useState(initialTitle);
    const [about, setAbout] = useState(initialAbout);

  useEffect(() => {
    setTitle(initialTitle);
    setAbout(initialAbout);
  }, [initialTitle, initialAbout, visible]);

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#A66CFF"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
        placeholder="Description..."
        placeholderTextColor="#A66CFF"
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onCancel} style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSave(title, about)} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditTaskPopup;
