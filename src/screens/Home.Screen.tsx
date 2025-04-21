import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/navigation'; 
import styles from '../styles/screenStyles/home.styles';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); 

  const handleGetStarted = () => {
    navigation.navigate('AddTask'); 
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/List.png')} style={styles.image} />
      <Text style={styles.title}>Get things done with</Text>
      <Text style={styles.appName}>ToDo</Text>
      <Text style={styles.subText}>
        Stay organized and focused with simple task management
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
