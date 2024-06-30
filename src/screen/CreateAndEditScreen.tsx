import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { categories } from '../dataClass/categories';
const RecordFormScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (route.params?.record) {
      const {record} = route.params;
      setName(record.name);
      setDescription(record.description);
      setCategory(record.category);
      setActive(record.active);
    }
  }, [route.params]);

  const handleSave = () => {
    if (route.params?.record) {

      const updatedRecord = { id: route.params.record.id, name, description, category, active };
    } else {
      const newRecord = { id: Date.now(), name, description, category, active };
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.textarea}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
        ))}
      </Picker>
      <View style={styles.switchRow}>
        <Text>Active</Text>
        <Switch value={active} onValueChange={setActive} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{route.params?.record ? 'Update' : 'Create'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, borderRadius: 4 },
  textarea: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, borderRadius: 4, height: 100 },
  picker: { height: 50, width: '100%' },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 },
  button: { backgroundColor: '#007BFF', padding: 16, borderRadius: 4, marginTop: 16 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default RecordFormScreen;