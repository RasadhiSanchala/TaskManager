import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    width: 250,  
    height: 250,
    marginBottom: 40,  
  },
  title: {
    color: 'white',
    fontSize: 24,  
    fontWeight: '500',  
    marginBottom: 12,  
    textAlign: 'center',  
  },
  appName: {
    color: '#FF8303', 
    fontSize: 48,  
    fontWeight: '700',  
    marginBottom: 24,  
    marginTop: 10,  
    textAlign: 'center',  
  },
  subText: {
    color: 'white',
    fontSize: 18,  
    marginBottom: 40,  
    textAlign: 'center',
    paddingHorizontal: 30,  
    lineHeight: 25,  
  },
  button: {
    backgroundColor: '#FF8303',
    paddingVertical: 16,
    paddingHorizontal: 50, 
    borderRadius: 30,
    marginTop: 50,  
    width: '80%', 
  },
  buttonText: {
    color: 'black',
    fontSize: 18,  
    fontWeight: '600',  
    textAlign: 'center',  
  },
});

export default styles;
