import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  inputWrapper: {
    flex: 1,
    gap: 10,

  },
  aboutInput: {
    marginTop: 10,
  },

  plusButton: {
    backgroundColor: 'black', 
    borderRadius: 10,
    borderColor:'#FF8303',
    borderWidth:2,
    paddingHorizontal: 30,
    paddingVertical: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
  
  plusText: {
    color: '#FF8303',
    fontSize: 26,
    fontWeight: 'bold',
  },
  taskListContainer: {
    marginTop: 30,
  },
  noTaskContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  noTaskText: {
    color: '#FF8303',
    fontSize: 18,
    marginVertical: 10,
    fontStyle: 'italic',
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: '#FF8303',
    opacity: 0.5,
  },
  taskBox: {
    backgroundColor: '#242320',
    borderColor: '#FF8303',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
   
  },
  taskTitle: {
    color: '#F0E3CA',
    fontSize: 22,
    marginBottom: 5,
    fontFamily: 'Roboto', 
  },
  taskAbout: {
    color: '#F0E3CA',
    fontSize: 14,
    fontFamily: 'Roboto', 
  },

  
});

export default styles;
