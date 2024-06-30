import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Switch, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { dummyData } from '../dataClass/dummyData';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [records, setRecords] = useState(dummyData);
  const [filter, setFilter] = useState('');
  const [activeOnly, setActiveOnly] = useState(false);

  const filteredRecords = records.filter(record => {
    const matchesFilter = record.name.toLowerCase().includes(filter.toLowerCase());
    const matchesActiveStatus = activeOnly ? record.active : true;
    return matchesFilter && matchesActiveStatus;
  });
  const handleDelete = (id: number) => {
    Alert.alert(
      'Warning',
      'Are you sure you want to delete this record?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={filter}
        onChangeText={setFilter}
      />
      <View style={styles.filterRow}>
        <Text>Show Active Only</Text>
        <Switch value={activeOnly} onValueChange={setActiveOnly} />
      </View>
      <FlatList
        data={filteredRecords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recordContainer}>
            <TouchableOpacity
              style={styles.recordTextContainer}
              onPress={() => navigation.navigate('ViewRecord', { record: item })}
            >
              <Text style={styles.record}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleDelete(item.id)}>
              <Image source={require("../../src/assests/delete.png")} style={{width:23, height:22}}/>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateRecord')}>
        <Text style={styles.buttonText}>Create New Record</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, borderRadius: 4 },
  filterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 },
  button: { backgroundColor: '#007BFF', padding: 16, borderRadius: 4, marginTop: 16 },
  buttonText: { color: '#fff', textAlign: 'center' },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  recordTextContainer: {
    flex: 1,
  },
  record: {
    fontSize: 18,
  },
});

export default HomeScreen;
