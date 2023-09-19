import React from 'react';
import { View, Text, Image} from 'react-native';
import { estilos_painel } from './style_painelresposta';

const PainelResposta = ({ dados, carregando }) => {
  return (
    <View>
      {carregando ? (
        <Text>Carregando...</Text>
      ) : (
        <View>
          {dados.map((companhia, index) => (
            <View key={index} style = {estilos_painel.resultados}>
              <Text style = {estilos_painel.nome}>Nome: {companhia.name}</Text>
              <Image
                source={{ uri: companhia.logo_url }} 
                style={estilos_painel.imagens} 
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default PainelResposta;