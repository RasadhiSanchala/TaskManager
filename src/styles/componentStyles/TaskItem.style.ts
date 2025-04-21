import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  taskBox: {
    padding: 15,
    backgroundColor: '#242320',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    borderColor: '#A35709',
    borderWidth: 2,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 32,
    height: 32,
    backgroundColor: '#1B1A17',
    borderColor: '#A35709',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 10,
  },
  checkText: {
    color: '#FF8303',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  taskDetails: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 5,
    fontFamily: 'roboto',
    color: '#F0E3CA',
  },
  taskAbout: {
    fontSize: 14,
    color: '#F0E3CA',
  },
  closeBox: {
    width: 32,
    height: 32,
    backgroundColor: '#1B1A17',
    borderColor: '#A35709',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 10,
  },
  closeText: {
    color: '#FF8303',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default styles;
