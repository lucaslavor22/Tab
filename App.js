import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { useState } from 'react';

const api = axios.create({
  baseURL:'https://exemplotab-6455c-default-rtdb.firebaseio.com/'
})

function salvar(nome){
  const obj = {nome};
  api.post("/clientes.json", obj)
  .then(()=>{alert("Sucesso")})
  .catch((err)=>{alert("Erro: " + err)});
}

function Home(){
  const [nome, setNome] = useState('');
  return(
    <View>
      <Text>Tela Principal</Text>
      <TextInput placeholder='Digite um nome'/>
      <Button title="Salvar" onPress={()=>salvar(nome, endereco)}/>
    </View>
  );
}

function SecondScreen(){
  return(
    <View>
      <Text>Segunda Tela!</Text>
    </View>
  )
}

const tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SecondScreen" component={SecondScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
