import '.././style.css';
import Pais from './Pais';
import { Container, Blocos, Busca, Lupa, Escolha, DivBusca } from '../styles';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { getAllCountries } from '../backend';

function ListaPaises() {

    const [paises, setPaises] = useState([]);
    const [paisesFiltro, setPaisesFiltro] = useState([]);
    const [busca, setBusca] = useState('');
    const [continente, setContinente] = useState('Todos');

    const atualizaPaises = useCallback(async () => {

        var result = [];

        if (paises.length === 0) {
            result = await getAllCountries();
            setPaises(result);
            setPaisesFiltro(result);
        }

        if (continente === "Todos") {
            setPaisesFiltro(paises.length === 0 ? result : paises);
        }

        else {
            setPaisesFiltro(paises.filter(pais => pais.region === continente));
        }

    }, [paises, continente]);

    useEffect(() => {

        atualizaPaises();

    }, [atualizaPaises]);

    const handleContinente = (event) => {
        setContinente(event.target.value);
        atualizaPaises();
    };

    return (
        <Container>

            <DivBusca>

                <Busca>
                    <Lupa>
                        <MagnifyingGlassIcon width={25} height={25} />
                    </Lupa>

                    <input type="text" id="firstName" placeholder='Pesquise por um país...' onChange={async (txt) => {
                        setBusca(txt.target.value);
                        if (paises.length === 0) await atualizaPaises();
                    }} />

                </Busca>


                <Escolha>
                    <FormControl variant="filled" sx={{ m: 1, }}>
                        <InputLabel id="demo-simple-select-filled-label">Filtrar por continente</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={continente}
                            label="Continente"
                            onChange={handleContinente}
                        >
                            <MenuItem value={"Todos"}>Todos</MenuItem>
                            <MenuItem value={"Africa"}>África</MenuItem>
                            <MenuItem value={"Americas"}>América</MenuItem>
                            <MenuItem value={"Asia"}>Ásia</MenuItem>
                            <MenuItem value={"Europe"}>Europa</MenuItem>
                            <MenuItem value={"Oceania"}>Oceania</MenuItem>
                        </Select>
                    </FormControl>
                </Escolha>
            </DivBusca>

            {paisesFiltro.length === 0 ? <h2 style={style.loading}>Carregando...</h2> : null}

            <Blocos>

                {paisesFiltro.map(pais => {

                    const nomePortugues = pais.translations.por.common.toLowerCase();
                    const nomePtSemAcento = nomePortugues.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    const buscaSemAcento = busca.normalize('NFD').replace(/[\u0300-\u036f]/g, "");


                    if (nomePtSemAcento.startsWith(buscaSemAcento.toLowerCase()) || buscaSemAcento === '') {

                        return (
                            <Pais pais={pais} key={pais.name.common}></Pais>   
                        )
                    } else return null;

                })}
            </Blocos>

        </Container>
    );
}

export const style = {


    loading: {
        textAlign: 'center',
    },

    busca: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    descricao: {
        nome: {
            fontSize: '1.2rem',
            fontWeight: '500',
            margin: 0,
            marginBottom: '1.5rem',
        },

        dado: {
            marginBottom: '0.5rem',
        },
    }
}

export default ListaPaises;
