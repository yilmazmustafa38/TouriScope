import axios from 'axios';
import { convertImageToBase64 } from '../utils/imageConverter';

export const analyzeImage = async (imageUri) => {
  try {
    // Base64'e çevir
    const base64Image = await convertImageToBase64(imageUri);

    // Claude API çağrısı
    const response = await axios.post(
      'https://api.anthropic.com/v1/complete', 
      {
        model: "claude-3-haiku-20240307",
        prompt: `Bu resimde hangi tarihi yapi var? Yapinin kisa tarihi ve önemi nedir?`,
        max_tokens: 300,
        image: base64Image
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'YOUR_ANTHROPIC_API_KEY'
        }
      }
    );

    return response.data.completion;
  } catch (error) {
    console.error('Görüntü analizi hatasi:', error);
    throw error;
  }
};