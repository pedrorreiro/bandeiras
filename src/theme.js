const cinza = "hsl(207, 26%, 17%)";
const cinzaClaro = "hsl(209, 23%, 22%)";
const branco = "#fff";
const brancoClaro = "#CBCBCB";
const cinzaSuperClaro = "#F4F3F3";
const preto = "#000";

export const lightTheme = {
    body: cinzaSuperClaro,

    color: preto,
    secondaryColor: cinza,

    oposto: {
        body: cinza,
        color: branco,
    },

    blocos: {
        body: branco
    }
}

export const darkTheme = {
    body: cinza, 
    color: branco,
    secondaryColor: brancoClaro,

    oposto: {
        body: branco,
        color: preto,
    },

    blocos: {
        body: cinzaClaro
    }
}