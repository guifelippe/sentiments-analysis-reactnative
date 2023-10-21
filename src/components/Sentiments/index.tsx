import { Text, View } from 'react-native';

import { styles } from './styles';

import { sentiments } from '../../utils/sentiments'

export type SCORE_TAG = 'P+' | 'P' | 'NEU' | 'N' | 'N+' | 'NONE';

type Props = {
    score: SCORE_TAG
}

export function Sentiments({ score }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.emoji}>
            {sentiments[score].emoji}
        </Text>

        <Text style={styles.sentiment}>
            {sentiments[score].name}
        </Text>
    </View>
  );
}