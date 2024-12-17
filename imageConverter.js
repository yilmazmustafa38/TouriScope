import RNFS from 'react-native-fs';

export const convertImageToBase64 = async (uri) => {
  try {
    // Dosya yolunu düzelt
    const filePath = uri.replace('file://', '');
    
    // Resmi oku
    const imageBase64 = await RNFS.readFile(filePath, 'base64');
    return imageBase64;
  } catch (error) {
    console.error('Base64 dönüşüm hatasi:', error);
    throw error;
  }
};