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
    backgroundColor: 'black', // same as your theme accent color
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
    elevation: 5, // for Android shadow
  },
  
  plusText: {
    color: '#FF8303',
    fontSize: 26,
    fontWeight: 'bold',
  },
  
});

export default styles;
