// screens/ViewRecordScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ViewRecordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { record } = route.params;

  const handleDelete = () => {
    // Delete record logic here
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{record.name}</Text>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{record.description}</Text>
      <Text style={styles.label}>Category:</Text>
      <Text style={styles.value}>{record.category}</Text>
      <Text style={styles.label}>Active:</Text>
      <Text style={styles.value}>{record.active ? 'Yes' : 'No'}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateRecord', { record })}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontWeight: 'bold', marginVertical: 8 },
  value: { marginBottom: 16 },
  button: { backgroundColor: '#007BFF', padding: 16, borderRadius: 4, marginVertical: 8 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default ViewRecordScreen;