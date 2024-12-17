import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet 
} from 'react-native';

const PlaceInfoDisplay = ({ image, placeInfo }) => {
  return (
    <View style={styles.infoContainer}>
      {image && (
        <Image 
          source={{ uri: image }} 
          style={styles.image} 
        />
      )}

      {placeInfo && (
        <Text style={styles.description}>
          {placeInfo}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default PlaceInfoDisplay;