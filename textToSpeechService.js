import Tts from 'react-native-tts';

export const speakText = (text) => {
  try {
    // Türkçe dil desteği eklenebilir
    Tts.setDefaultLanguage('tr-TR');
    Tts.speak(text);
  } catch (error) {
    console.error('Metni seslendirme hatasi:', error);
  }
};