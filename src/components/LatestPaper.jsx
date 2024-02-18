import { ScrollView, View } from "react-native";
import React from 'react';
import MediumCard from "./MediumCard";
import { COLORS } from "../utils/constants";

const data = {
    "author": "Jingshu Li",
    "date": "Mon, 12 Feb 2024 13:16:30 GMT",
    "image_url": "https://treehacksbucket.s3.us-west-1.amazonaws.com/image/2402.07632v1/2402.07632v1.png",
    "intro": "As artificial intelligence (AI) advances, human-AI collaboration has become\nincreasingly prevalent across both professional and everyday settings. In such\ncollaboration, AI can express its confidence level about its performance,\nserving as a crucial indicator for humans to evaluate AI's suggestions.\nHowever, AI may exhibit overconfidence or underconfidence--its expressed\nconfidence is higher or lower than its actual performance--which may lead\nhumans to mistakenly evaluate AI advice. Our study investigates the influences\nof AI's overconfidence and underconfidence on human trust, their acceptance of\nAI suggestions, and collaboration outcomes. Our study reveal that disclosing AI\nconfidence levels and performance feedback facilitates better recognition of AI\nconfidence misalignments. However, participants tend to withhold their trust as\nperceiving such misalignments, leading to a rejection of AI suggestions and\nsubsequently poorer performance in collaborative tasks. Conversely, without\nsuch information, participants struggle to identify misalignments, resulting in\neither the neglect of correct AI advice or the following of incorrect AI\nsuggestions, adversely affecting collaboration. This study offers valuable\ninsights for enhancing human-AI collaboration by underscoring the importance of\naligning AI's expressed confidence with its actual performance and the\nnecessity of calibrating human trust towards AI confidence.",
    "mp3_url": "https://treehacksbucket.s3.us-west-1.amazonaws.com/mp3/2402.07632v1/2402.07632v1.mp3",
    "pdf_link": "http://arxiv.org/pdf/2402.07632v1",
    "pdf_url": "http://arxiv.org/pdf/2402.07632v1",
    "summary": "Welcome to \"AI and You,\" the podcast where we explore the latest research and developments in artificial intelligence and how they impact our daily lives. I'm your host, your friendly AI assistant, and I'm thrilled to have you join me today as we delve into the fascinating world of human-AI collaboration.\n\nImagine working side by side with an AI, whether it's in a professional setting like a hospital or a creative one like a film studio. AI can help us make better decisions, from diagnosing diseases to crafting compelling stories. But what happens when the AI isn't as confident as it seems, or when it's more confident than it should be? That's the question at the heart of today's research paper.\n\nAs AI becomes more prevalent in our lives, it's crucial that we understand how to work effectively with these intelligent machines. And one key aspect of that collaboration is trust. When we trust an AI, we're more likely to accept its suggestions and work together to achieve our goals. But what happens when that trust is misplaced? What happens when the AI's confidence doesn't match its actual performance?\n\nThat's where this research paper comes in. The authors set out to investigate the influences of AI's overconfidence and underconfidence on human trust, their acceptance of AI suggestions, and collaboration outcomes. They wanted to know how we can better recognize when an AI's confidence is misaligned with its performance, and how we can calibrate our trust in response.\n\nTheir findings reveal that disclosing AI confidence levels and performance feedback can help us better recognize when an AI is overconfident or underconfident. But there's a catch: when we perceive these misalignments, we're less likely to trust the AI, which can lead to a rejection of its suggestions and poorer performance in collaborative tasks.\n\nOn the other hand, without this information, we struggle to identify misalignments, which can result in us either neglecting correct AI advice or following incorrect suggestions. Both of these scenarios can adversely affect our collaboration with the AI.\n\nSo what does this mean for the future of human-AI collaboration? It means that we need to find ways to align AI's expressed confidence with its actual performance, and to calibrate our trust in response. By doing so, we can work more effectively with AI, making better decisions and achieving our goals more efficiently.\n\nIn the coming episodes, we'll explore this topic in more depth, talking to experts in the field and looking at real-world examples of human-AI collaboration. So stay tuned, and in the meantime, let us know what you think about this research paper and how it might impact your own work with AI.\n\nThanks for joining me today on \"AI and You.\" I'm your AI assistant, and I'm looking forward to continuing this conversation with you. Until next time, take care!",
    "title": "Overconfident and Unconfident AI Hinder Human-AI Collaboration"
}

const LatestPaper = React.memo(() => {
    return (
        <ScrollView horizontal style={{ paddingVertical: 16 }}>
            <View style={{ width: 16 }} />
            <View style={{ width: 240, flexDirection: "column", gap: 4 }} >
                <MediumCard data_details={data}/>
                <View style={{ width: "100%", borderBottomColor: COLORS.FRENCH_GRAY, borderBottomWidth: 0.5 }} />
                <MediumCard data_details={data}/>
                <View style={{ width: "100%", borderBottomColor: COLORS.FRENCH_GRAY, borderBottomWidth: 0.5 }} />
                <MediumCard data_details={data}/>
            </View>
            <View style={{ width: 16 }} />
            <View style={{ width: 240, flexDirection: "column", gap: 4 }} >
                <MediumCard data_details={data}/>
                <View style={{ width: "100%", borderBottomColor: COLORS.FRENCH_GRAY, borderBottomWidth: 0.5 }} />
                <MediumCard data_details={data}/>
                <View style={{ width: "100%", borderBottomColor: COLORS.FRENCH_GRAY, borderBottomWidth: 0.5 }} />
                <MediumCard data_details={data}/>
            </View>
            <View style={{ width: 16 }} />
            <View style={{ width: 240, flexDirection: "column", gap: 4 }} >
                <MediumCard data_details={data}/>
                <View style={{ width: "100%", borderBottomColor: COLORS.FRENCH_GRAY, borderBottomWidth: 0.5 }} />
                <MediumCard data_details={data}/>
                <View style={{ width: "100%", borderBottomColor: COLORS.FRENCH_GRAY, borderBottomWidth: 0.5 }} />
                <MediumCard data_details={data}/>
            </View>
            <View style={{ width: 16 }} />
        </ScrollView>
    );
});

export default LatestPaper;