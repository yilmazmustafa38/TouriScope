import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import CameraButton from '../components/CameraButton';
import PlaceInfoDisplay from '../components/PlaceInfoDisplay';
import { analyzeImage } from '../services/imageAnalysisService';
import { speakText } from '../services/textToSpeechService';

const MainScreen = () => {
  const [image, setImage] = useState(null);
  const [placeInfo, setPlaceInfo] = useState(null);

  const handleImageCapture = async (imageUri) => {
    setImage(imageUri);
    try {
      const description = await analyzeImage(imageUri);
      setPlaceInfo(description);
      speakText(description);
    } catch (error) {
      console.error('Analiz sirasinda hata:', error);
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tarihi Yapi Taniyici</Text>
      
      <PlaceInfoDisplay 
        image={image} 
        placeInfo={placeInfo} 
      />

      <CameraButton onImageCapture={handleImageCapture} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainScreen;