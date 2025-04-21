
import { StyleSheet } from 'react-native';

const editTaskStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '60%',
    left: '5%',
    width: '102%',
    height:'50%',
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    borderTopWidth: 8,
    borderTopColor: '#A35709',
    zIndex: 999,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A35709',
    borderRadius: 5,
    padding: 10,
    color: 'white',
    marginBottom: 10,
    marginTop:15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    borderColor: '#A35709',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  buttonText: {
    color: '#F0E3CA',
    fontWeight: 'bold',
  },
});

export default editTaskStyles;
