import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { Bloco, Descricao } from '../styles';

function Pais(props) {

    const { pais } = props;
    const { name, flags } = pais;

    const internationalNumberFormat = new Intl.NumberFormat('en-US');

    const mapas = [
        { key: "Africa", value: "África" },
        { key: "Americas", value: "América" },
        { key: "Asia", value: "Ásia" },
        { key: "Europe", value: "Europa" },
        { key: "Oceania", value: "Oceania" }
    ]

    const continentes = new Map(mapas.map(obj => { return [obj.key, obj.value] }));

    const nome = pais.translations.por.common;
    const nomeSemAcento = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const nomeUrl = nomeSemAcento.replace(/\s/g, '-');

    const rota = `/vendo-bandeiras/sobre/${nomeUrl}`;

    return (
        <Link to={rota}>
            <AnimatePresence key={name.common}>
                <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                >
                    <Bloco>
                        <img src={flags.png} alt="bandeira" />

                        <Descricao>
                            <p style={style.descricao.nome}>{pais.translations.por.common}</p>

                            <div style={style.descricao.dado}>
                                <span style={style.descricao.outros}><strong>População: </strong></span>
                                <span style={style.descricao.numeros}>{internationalNumberFormat.format(pais.population)}</span><br></br>
                            </div>

                            <div style={style.descricao.dado}>
                                <span style={style.descricao.outros}><strong>Região: </strong></span>
                                <span style={style.descricao.numeros}>{continentes.get(pais.region)}</span>
                            </div>

                            <div style={style.descricao.dado}>
                                <span style={style.descricao.outros}><strong>Capital: </strong></span>
                                <span style={style.descricao.numeros}>{pais.capital}</span>
                            </div>

                        </Descricao>

                    </Bloco>
                </motion.div>
            </AnimatePresence>
        </Link>
    );
}

export const style = {

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

export default Pais;