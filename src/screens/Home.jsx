import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState } from 'react';
import img from './images.jpeg';

const Feedscreens = () => {
const [SelectedImage, setSelectedImage] = useState(null)

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  }

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Image
        resizeMode='contain'
        source={SelectedImage ? { uri: SelectedImage } : img}   
             style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handleCameraLaunch}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openImagePicker}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Feedscreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
