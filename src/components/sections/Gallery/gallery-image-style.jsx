import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
  Animated,
} from "react-native";

export default function GalleryImageStyle() {
  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        Animated.event([null, { dx: gestureState.dx, dy: gestureState.dy }], {
          useNativeDriver: false,
        })(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        Animated.timing(new Animated.ValueXY(), {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  return (
    <View style={styles.container}>
      <View style={styles.relativeContainer}>
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/CxvkXQPV/Ellipse-2.png" }}
          style={[
            styles.image1,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/fR7gdDRf/image-4.png" }}
          style={[
            styles.image2,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/T2DcPsXc/image-1.png" }}
          style={[
            styles.image3,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/fTkKcPxp/image-3.png" }}
          style={[
            styles.image4,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/c4TcGmX0/Ellipse-7.png" }}
          style={[
            styles.image5,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/0jFNRhMb/Ellipse-6.png" }}
          style={[
            styles.image6,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/kM66wytB/Ellipse-8.png" }}
          style={[
            styles.image7,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
        <Animated.Image
          source={{ uri: "https://i.postimg.cc/tRWRYvxt/Ellipse-3.png" }}
          style={[
            styles.image8,
            styles.absoluteImage,
            panResponder.panHandlers,
          ]}
        />
      </View>
      <View style={styles.smallContainer}>
        <Text style={styles.heading}>Start Cooking</Text>
        <Text style={styles.subheading}>
          Let’s join our community to cook better food!
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  relativeContainer: {
    position: "relative",
  },
  absoluteImage: {
    position: "absolute",
  },
  image1: {
    width: 120,
    height: 120,
    top: 120,
    left: "-24%",
  },
  image2: {
    width: 180,
    height: 180,
    top: 100,
    left: 40,
  },
  image3: {
    width: 110,
    height: 110,
    top: 0,
    left: 0,
  },
  image4: {
    width: 130,
    height: 130,
    top: -10,
    right: 0,
  },
  image5: {
    width: 110,
    height: 110,
    top: 90,
    right: -70,
  },
  image6: {
    width: 95,
    height: 95,
    top: 180,
    right: -30,
  },
  image7: {
    width: 130,
    height: 130,
    top: 240,
    left: 85,
  },
  image8: {
    width: 90,
    height: 90,
    top: 240,
    left: -10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "black",
  },
  subheading: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },
  buttonContainer: {
    paddingTop: 10,
  },
  button: {
    backgroundColor: "#1FCC79",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  smallContainer: {
    position: "relative",
    top: 500,
    bottom: 0,
  },
});
