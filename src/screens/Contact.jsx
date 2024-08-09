import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import React from 'react';

const Articalscreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Me</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Abhishek Solapure</Text>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>+91-9561435141</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>abhisheksolapure2003@email.com</Text>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.info}>Solapur</Text>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => openLink('https://github.com/abhisheksol')}>
          <Text style={styles.link}>GitHub Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/abhishek-solapure-9aa362250/')}>
          <Text style={styles.link}>LinkedIn Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://abhishek2003.netlify.app/')}>
          <Text style={styles.link}>Portfolio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Articalscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  contactContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  linksContainer: {
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});
