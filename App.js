import React from 'react';
import { View, Image} from 'react-native';
import Principal from './Servicos/Principal'; // Importe o componente MainApp aqui
import { estilos_app } from './style_app';

const App = () => {
  return (
    <View style = {estilos_app.container}>
      <View style = {estilos_app.cabecalho}>
        <Image 
         source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1085/1085493.png' }}
         style = {estilos_app.imagem}/>
      </View>
      <Principal/> 
    </View>
  );
};

export default App;