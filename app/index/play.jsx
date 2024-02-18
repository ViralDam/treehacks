import { StyleSheet, Text, TouchableOpacity, View, Share, Linking } from 'react-native';
import { COLORS } from '../../src/utils/constants';
import Constants from "expo-constants";
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

// const imgurl1 = "https://i.ibb.co/3cVw6PN/artificial-intelligence-jpg.png";
// const mp3url = "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3";

// const fall_data = {
//   "author": "Jingshu Li",
//   "date": "Mon, 12 Feb 2024 13:16:30 GMT",
//   "image_url": "https://treehacksbucket.s3.us-west-1.amazonaws.com/image/2402.07632v1/2402.07632v1.png",
//   "intro": "As artificial intelligence (AI) advances, human-AI collaboration has become\nincreasingly prevalent across both professional and everyday settings. In such\ncollaboration, AI can express its confidence level about its performance,\nserving as a crucial indicator for humans to evaluate AI's suggestions.\nHowever, AI may exhibit overconfidence or underconfidence--its expressed\nconfidence is higher or lower than its actual performance--which may lead\nhumans to mistakenly evaluate AI advice. Our study investigates the influences\nof AI's overconfidence and underconfidence on human trust, their acceptance of\nAI suggestions, and collaboration outcomes. Our study reveal that disclosing AI\nconfidence levels and performance feedback facilitates better recognition of AI\nconfidence misalignments. However, participants tend to withhold their trust as\nperceiving such misalignments, leading to a rejection of AI suggestions and\nsubsequently poorer performance in collaborative tasks. Conversely, without\nsuch information, participants struggle to identify misalignments, resulting in\neither the neglect of correct AI advice or the following of incorrect AI\nsuggestions, adversely affecting collaboration. This study offers valuable\ninsights for enhancing human-AI collaboration by underscoring the importance of\naligning AI's expressed confidence with its actual performance and the\nnecessity of calibrating human trust towards AI confidence.",
//   "mp3_url": "https://treehacksbucket.s3.us-west-1.amazonaws.com/mp3/2402.07632v1/2402.07632v1.mp3",
//   "pdf_link": "http://arxiv.org/pdf/2402.07632v1",
//   "pdf_url": "http://arxiv.org/pdf/2402.07632v1",
//   "summary": "Welcome to \"AI and You,\" the podcast where we explore the latest research and developments in artificial intelligence and how they impact our daily lives. I'm your host, your friendly AI assistant, and I'm thrilled to have you join me today as we delve into the fascinating world of human-AI collaboration.\n\nImagine working side by side with an AI, whether it's in a professional setting like a hospital or a creative one like a film studio. AI can help us make better decisions, from diagnosing diseases to crafting compelling stories. But what happens when the AI isn't as confident as it seems, or when it's more confident than it should be? That's the question at the heart of today's research paper.\n\nAs AI becomes more prevalent in our lives, it's crucial that we understand how to work effectively with these intelligent machines. And one key aspect of that collaboration is trust. When we trust an AI, we're more likely to accept its suggestions and work together to achieve our goals. But what happens when that trust is misplaced? What happens when the AI's confidence doesn't match its actual performance?\n\nThat's where this research paper comes in. The authors set out to investigate the influences of AI's overconfidence and underconfidence on human trust, their acceptance of AI suggestions, and collaboration outcomes. They wanted to know how we can better recognize when an AI's confidence is misaligned with its performance, and how we can calibrate our trust in response.\n\nTheir findings reveal that disclosing AI confidence levels and performance feedback can help us better recognize when an AI is overconfident or underconfident. But there's a catch: when we perceive these misalignments, we're less likely to trust the AI, which can lead to a rejection of its suggestions and poorer performance in collaborative tasks.\n\nOn the other hand, without this information, we struggle to identify misalignments, which can result in us either neglecting correct AI advice or following incorrect suggestions. Both of these scenarios can adversely affect our collaboration with the AI.\n\nSo what does this mean for the future of human-AI collaboration? It means that we need to find ways to align AI's expressed confidence with its actual performance, and to calibrate our trust in response. By doing so, we can work more effectively with AI, making better decisions and achieving our goals more efficiently.\n\nIn the coming episodes, we'll explore this topic in more depth, talking to experts in the field and looking at real-world examples of human-AI collaboration. So stay tuned, and in the meantime, let us know what you think about this research paper and how it might impact your own work with AI.\n\nThanks for joining me today on \"AI and You.\" I'm your AI assistant, and I'm looking forward to continuing this conversation with you. Until next time, take care!",
//   "title": "Overconfident and Unconfident AI Hinder Human-AI Collaboration"
// }
export default function Play() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fav, setFav] = useState(false);
  const params = useLocalSearchParams();
  const { image_url, mp3_url, author, title, date, pdf_link} = params; 

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    try {
      if (sound === null) {
        const { sound } = await Audio.Sound.createAsync(
          { uri: mp3_url},
          { shouldPlay: true, getProgressUpdateIntervalMillis: 100 }
        );
        sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        setSound(sound);
        setIsPlaying(true);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Error playing sound: ', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status && status.durationMillis && status.positionMillis) {
      setProgress(status.positionMillis / status.durationMillis);
    }
  };

  const shareData = async () => {
    try {
      await Share.share({
        message: `Hey, I found this really interesting paper by ${author} called ${title}`,
        url: pdf_link,
        title: `Check out this paper!!`
      },
        {
          dialogTitle: `Check out this paper: ${title}`,
          subject: `Check out this paper: ${title}`
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleReadClick = () => {
    Linking.openURL(pdf_link).catch((err) => console.error('An error occurred', err));
  }

  const pauseSound = async () => {
    try {
      if (sound !== null) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Error pausing sound: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[COLORS.PERSIAN_BLUE, "transparent"]}
        style={styles.background}
      >
        <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}><Text style={{ flex: 1, textAlign: "center", fontSize: 20, padding: 10, color: COLORS.FRENCH_GRAY, fontWeight: "bold" }}>Playing Now</Text></View>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", position: "absolute" }} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={COLORS.FRENCH_GRAY} /><Text style={{ color: COLORS.FRENCH_GRAY }}>Return</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", paddingVertical: 40, alignItems: "center" }}>
          <Image source={{ uri: image_url }} style={{ width: "60%", aspectRatio: 1, borderRadius: 10 }} />
        </View>
        <View>
          <Text style={{ color: COLORS.VISTERIA, fontSize: 12, paddingLeft: 24, marginBottom: 12, fontWeight: "bold" }}>{date}</Text>
          <Text style={{ color: COLORS.FRENCH_GRAY, fontSize: 22, paddingHorizontal: 24 }} numberOfLines={2}>{title}</Text>
          <Text style={{ color: COLORS.VISTERIA, fontSize: 16, paddingLeft: 24, marginVertical: 12, fontWeight: "bold" }}>By {author}, Et al.</Text>
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBar, { width: `${progress * 100}%` }]}
            />
          </View>
        </View>
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 32 }} onPress={isPlaying ? pauseSound : playSound}>
          <View style={{ backgroundColor: COLORS.VISTERIA, paddingVertical: 8, borderRadius: 4, width: "65%" }}>
            <Text style={{ fontSize: 20, textAlign: "center", color: COLORS.PERSIAN_BLUE }}><Ionicons style={{ flex: 1 }} name={isPlaying ? 'pause' : 'play'} size={20} color={COLORS.PERSIAN_BLUE} />{isPlaying ? ' Pause' : ' Play'}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 32 }}>
          <TouchableOpacity onPress={() => setFav(!fav)}>
            <View style={{ backgroundColor: COLORS.VISTERIA, width: 50, height: 50, borderRadius: 25, alignItems: "center", padding: 10 }}>
              <Ionicons style={{ flex: 1 }} name={fav ? 'heart' : 'heart-outline'} size={30} color={fav ? "red" : COLORS.PERSIAN_BLUE} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleReadClick}>
            <View style={{ backgroundColor: COLORS.VISTERIA, width: 50, height: 50, borderRadius: 25, alignItems: "center", padding: 10 }}>
              <Ionicons style={{ flex: 1 }} name={"download-outline"} size={30} color={COLORS.PERSIAN_BLUE} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={shareData}>
            <View style={{ backgroundColor: COLORS.VISTERIA, width: 50, height: 50, borderRadius: 25, alignItems: "center", padding: 10 }}>
              <Ionicons style={{ flex: 1 }} name={"share-outline"} size={30} color={COLORS.PERSIAN_BLUE} />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  background: {
    paddingTop: Constants.statusBarHeight + 4,
  },
  progressBarContainer: {
    height: 4,
    width: '100%',
    backgroundColor: COLORS.FRENCH_GRAY,
    marginTop: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.PERSIAN_BLUE,
  },
});
