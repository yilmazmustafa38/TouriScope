import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const CameraButton = ({ onImageCapture }) => {
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('Kullanici kamera seçimini iptal etti');
      } else if (response.errorCode) {
        console.log('Kamera hatasi: ', response.errorMessage);
      } else {
        onImageCapture(response.assets[0].uri);
      }
    });
  };

  return (
    <TouchableOpacity 
      style={styles.cameraButton} 
      onPress={openCamera}
    >
      <Text style={styles.buttonText}>Kamera</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CameraButton;