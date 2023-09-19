import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { estilos_companhia } from './style_companhia';

const PesquisaCompanhia = ({ aoBuscar }) => {
  const [termoDeBusca, setTermoDeBusca] = useState('');

  const buscar = () => {
    aoBuscar(termoDeBusca);
  };

  return (
    <View>
      <Text style = {estilos_companhia.espacamento}></Text>
      <TextInput
        placeholder="Informe o nome da companhia aérea"
        value={termoDeBusca}
        onChangeText={(texto) => setTermoDeBusca(texto)}
        style={estilos_companhia.caixa_entrada}
      />
      <View style = {estilos_companhia.campo_botao}>
        <TouchableOpacity
          onPress={buscar}
          style={estilos_companhia.botao}>Pesquisar</TouchableOpacity>
      </View>

    </View>
  );
};

export default PesquisaCompanhia;