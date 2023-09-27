import React from 'react';
import { View, Text, SectionList } from 'react-native';
import useStore from '../store';

const HistoryScreen = () => {
    const history = useStore((state) => state.history); 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Histórico de Jogadas</Text>
      <SectionList
        sections={[
          { title: 'Histórico', data: history },
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'lightgray', padding: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HistoryScreen;
