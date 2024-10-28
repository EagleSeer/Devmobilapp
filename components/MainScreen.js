import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
} from 'react-native';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const opacity = new Animated.Value(1);
  const [userName, setUserName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false},
      ]);
      setNewTodo('');
      setSelectedDate(null);
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = async (id) => {
    try {
      setLoading(true);
      await Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(async () => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        await Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
        setLoading(false);
      });
    } catch (error) {
      console.error('Error removing todo:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список задач</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Добавьте новую задачу"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
          onSubmitEditing={addTodo}
          autoFocus={true}
        />
        <TouchableHighlight style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText}>Добавить</Text>
        </TouchableHighlight>
      </View>

      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (
          <Animated.View style={{ ...styles.todoItem, opacity }}>
            <TouchableOpacity onPress={() => toggleTodo(item.id)}>
              <Text style={[styles.todoText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
              <Text style={styles.removeButton}>Delete</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

       <View style={styles.footer}>
        <Text>Всего: {todos.filter((todo) => todo.completed).length}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#21541b',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default TodoApp;
