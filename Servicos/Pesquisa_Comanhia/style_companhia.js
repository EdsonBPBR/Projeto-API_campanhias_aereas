import { StyleSheet } from "react-native";

export const estilos_companhia =  StyleSheet.create({
    caixa_entrada: {
        width: 300,
        height: 30,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'aqua',
        borderRadius: 5,
    },
    botao: {
        height: 30,
        width: 150,
        backgroundColor: 'teal',
        fontSize: 15,
        textAlign: 'center',
        borderRadius: 5,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    campo_botao: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    espacamento: {
        height: 20
    }
});
