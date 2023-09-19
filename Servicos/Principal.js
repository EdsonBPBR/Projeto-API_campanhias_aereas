import React, { useState } from 'react';
import { View } from 'react-native';
import ApiCompanhia from './ApiCompanhia';
import PesquisaCompanhia from './Pesquisa_Comanhia/PesquisaCompanhia';
import PainelResposta from './Painel_Resultados/PainelResposta';

const Principal = () => {
  const [dadosDaBusca, setDadosDaBusca] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [termoDeBusca, setTermoDeBusca] = useState('');

  const aoBuscar = (termo) => {
    setTermoDeBusca(termo);
    setCarregando(true);
    setDadosDaBusca([]);

    // Simule um atraso para exibir o indicador de carregamento (remova isso em produção)
    setTimeout(() => {
      setCarregando(false);
    }, 1000); // Simula um tempo de carregamento para a demonstração
  };

  return (
    <View>
      <PesquisaCompanhia aoBuscar={aoBuscar} />
      <PainelResposta dados={dadosDaBusca} carregando={carregando} />
      <ApiCompanhia termoDeBusca={termoDeBusca} aoBuscarDados={setDadosDaBusca} />
    </View>
  );
};

export default Principal;