import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textcentral}>Bem vindo a BarberTech</Text>
      <Text style={styles.text}>Digite seu nome</Text>
      <TextInput placeholder='Digite seu Nome' style={styles.textinp}/>
      <Text style={styles.text}>Digite seu número de telefone</Text>
      <TextInput placeholder='Digite seu telefone' style={styles.textinp}/>
      <Text style={styles.text}>Digite seu email</Text>
      <TextInput placeholder='Digite seu email' style={styles.textinp}/>
      <TouchableOpacity activeOpacity={0.4} style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp: {
    backgroundColor: '#4F4F4F',
    width: 310,
    borderRadius: 3,
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
  textcentral: {
    color: '#ffffff',
    fontSize: 30,
    margin: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
  },

});
