import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/screenStyles/home.styles'; 

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/List.png')} style={styles.image} />
      <Text style={styles.title}>Get things done with</Text>
      <Text style={styles.appName}>ToDo</Text>
      <Text style={styles.subText}>Stay organized and focused with simple task management</Text>
      
      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
