import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    localizacao: '',
    observacao: ''
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSend = () => {
    // Aqui você pode tratar o envio do formulário
    alert('Formulário enviado!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {!showForm ? (
        <View style={styles.center}>
          <Image source={require('./images/bat-logo.png')} style={styles.logo} />
          <TouchableOpacity style={styles.button} onPress={() => setShowForm(true)}>
            <Text style={styles.buttonText}>activate bat signal</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          <Image source={require('./images/bat-logo.png')} style={styles.formLogo} />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={form.nome}
            onChangeText={v => handleChange('nome', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone para contato"
            keyboardType="phone-pad"
            value={form.telefone}
            onChangeText={v => handleChange('telefone', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Localização atual"
            value={form.localizacao}
            onChangeText={v => handleChange('localizacao', v)}
          />
          <TextInput
            style={[styles.input, {height: 80}]}
            placeholder="Observação"
            multiline
            value={form.observacao}
            onChangeText={v => handleChange('observacao', v)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e6ef',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 80,
    marginBottom: 32,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  form: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  formLogo: {
    width: 60,
    height: 40,
    alignSelf: 'center',
    marginBottom: 24,
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#bbb',
  },
});
