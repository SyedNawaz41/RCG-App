import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ColorGenerator = () => {
  const [newColor, setnewColor] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

//   console.log(newColor);
  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={{height: '100%'}} source={require('../../assets/burj1.jpg')}>
      <View>
        <Text style={styles.Heading}>Random Color Generator</Text>
        <TouchableOpacity style={styles.ButtonStyle}>
          <Text
            style={styles.textStyle}
            onPress={() => {
              //Alert.alert(randomColor());
              setnewColor([...newColor, randomColor()]);
            }}>
            Generate Color Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle2}>
          <Text
            style={styles.textStyle}
            onPress={() => {
              setnewColor([]);
            }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={key => key}
        data={newColor}
        renderItem={({item}) => {
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item,
                  width: '72%',
                  height: 80,
                  borderRadius: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.textStyle2}>{item}</Text>
              </View>
            </View>
          );
        }}
      />
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 0,
  },
  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 15,
  },
  ButtonStyle: {
    right: 85,
    backgroundColor: 'orange',
    position: 'relative',
    overflow: 'hidden',
    color: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ButtonStyle2: {
    top: -44,
    left: 85,
    backgroundColor: 'rgb(49, 143, 154)',
    position: 'relative',
    overflow: 'hidden',
    color: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: 'white',
  },
  textStyle2: {
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
  },
  imageContainer: {
    top: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
});

export default ColorGenerator;
