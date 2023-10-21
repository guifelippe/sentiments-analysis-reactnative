import {Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { SCORE_TAG, Sentiments } from "../../components/Sentiments";
import { useState } from 'react'
import axios from "axios";
import env from '../../../env';

export function Home() {
    const [score, setScore] = useState<SCORE_TAG | null>(null);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const API_KEY = env.API_KEY;

    async function handleSendMessage(){
        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.append("key", API_KEY);
            formData.append("txt", message);
            formData.append("lang", "pt");

            const response = await axios.post(
                'https://api.meaningcloud.com/sentiment-2.1', 
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            setScore(response.data.score_tag)

        } catch (error) {
            
        }
        finally{
            setIsLoading(false);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Message
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    multiline
                    onChangeText={setMessage}
                />

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    disabled={isLoading}
                    onPress={handleSendMessage}
                >
                    {
                        isLoading
                        ? <ActivityIndicator color="#FFF"/>
                        : <FontAwesome name="send" size={24} color="#FFF"/>
                    }
                </TouchableOpacity>
            </View>

            {score &&  <Sentiments score={score}/>}
        </View>
    )
}