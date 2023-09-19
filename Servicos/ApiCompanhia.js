import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCompanhia = ({ termoDeBusca, aoBuscarDados }) => {
  const [carregando, setCarregando] = useState(false);
  const apiKey = 'tkuG7AP1Uda66Xnm27118A==WmupckU7nUsZptpX';

  useEffect(() => {
    const buscarDados = async () => {
      try {
        if (!termoDeBusca) {
          return; // Não faz a chamada se o termoDeBusca estiver vazio
        }
        
        setCarregando(true);

        const response = await axios.get(
          `https://api.api-ninjas.com/v1/airlines?name=${termoDeBusca}`,
          {
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json',
            },
          }
        );

        aoBuscarDados(response.data);
      } catch (error) {
        console.error('Erro:', error.response.data);
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, [termoDeBusca, aoBuscarDados]);

  return null;
};

export default ApiCompanhia;