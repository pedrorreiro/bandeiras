import '.././style.css';
import { Container, Bandeira, Voltar, Info, Dados, InfoDado } from '../styles';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';
import { getAllCountries } from '../backend';
import { useParams, useNavigate } from 'react-router-dom';

function Sobre(props) {

  const [pais, setPais] = useState([]);

  const { nome } = useParams();
  const nomeComEspaco = nome.replace(/-/g, ' ');
  const [moeda, setMoeda] = useState('');
  const [mapaUrl, setMapaUrl] = useState('');

  const navigate = useNavigate();

  const mapas = [
    { key: "Africa", value: "África" },
    { key: "Americas", value: "América" },
    { key: "Asia", value: "Ásia" },
    { key: "Europe", value: "Europa" },
    { key: "Oceania", value: "Oceania" }
  ]

  const mapaContinentes = new Map(mapas.map(obj => { return [obj.key, obj.value] }));
  const internationalNumberFormat = new Intl.NumberFormat('en-US');

  useEffect(() => {
    const pegaPais = async () => {

      const nome = nomeComEspaco;

      const response = await getAllCountries();
      response.forEach(p => {

        const nomePais = p.translations.por.common;
        const nomeSemAcento = nomePais.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (nomeSemAcento.includes(nome)) {
          
          var m = Object.values(p.currencies)[0].name
          var primeiraLetra = m.charAt(0).toUpperCase();
          var resto = m.slice(1);
          var moeda = primeiraLetra + resto;
          setMoeda(moeda);

          setMapaUrl(`https://embed.waze.com/iframe?zoom=3&lat=${p.latlng[0]}&lon=${p.latlng[1]}&pin=1`);
          
          console.clear();
          
          setPais(p)
        }
      
      })

    }

    pegaPais();

  }, [nomeComEspaco]);



  return (

    <Container>

      {pais.length !== 0 ? (
        <div style={style.conteudo}>
    
          <Voltar onClick={() => navigate("/bandeiras/")}>
            <ArrowLeftIcon />
            <span style={{ marginLeft: "10px" }}>Voltar</span>
          </Voltar>

          {/* <Link to="/">
            <Voltar>
              <ArrowLeftIcon />
              <span style={{ marginLeft: "10px" }}>Voltar</span>
            </Voltar>
          </Link> */}

          <Info>

            <Bandeira>
              <img src={pais.flags.svg} alt="bandeira" />
            </Bandeira>

            <Dados>
              <h1>{pais.translations.por.common}</h1>

              <div style={style.dados}>

                <div style={{ marginRight: "50px" }}>
                  <div style={style.descricao.dado}>
                    <span style={style.descricao.outros}>Nome Nativo: </span>
                    <InfoDado style={style.descricao.numeros}>{pais.translations.por.common}</InfoDado><br></br>
                  </div>

                  <div style={style.descricao.dado}>
                    <span style={style.descricao.outros}>População: </span>
                    <InfoDado style={style.descricao.numeros}>{internationalNumberFormat.format(pais.population)}</InfoDado><br></br>
                  </div>

                  <div style={style.descricao.dado}>
                    <span style={style.descricao.outros}>Região: </span>
                    <InfoDado style={style.descricao.numeros}>{mapaContinentes.get(pais.region)}</InfoDado><br></br>
                  </div>
                </div>

                {/* <div style={style.descricao.dado}>
                  <span style={style.descricao.outros}>Sub-região: </span>
                  <InfoDado style={style.descricao.numeros}>{pais.subregion}</InfoDado><br></br>
                </div> */}

                <div>
                  <div style={style.descricao.dado}>
                    <span style={style.descricao.outros}>Capital: </span>
                    <InfoDado style={style.descricao.numeros}>{pais.capital}</InfoDado><br></br>
                  </div>

                  <div style={style.descricao.dado}>
                    <span style={style.descricao.outros}>Moeda: </span>
                    <InfoDado style={style.descricao.numeros}>{moeda}</InfoDado><br></br>
                  </div>

                  <div style={style.descricao.dado}>
                    <span style={style.descricao.outros}>Língua: </span>

                    {Object.values(pais.languages).map(l => {

                      // Esse algoritmo adiciona uma vírgula em todos os nomes de línguas, exceto no último

                      var arr = Object.values(pais.languages);
                      if ((l) === arr.reverse()) {
                        return <InfoDado key={Object.values(l)} style={style.descricao.numeros}>{Object.values(l)} </InfoDado>
                      }

                      else {
                        return <InfoDado key={Object.values(l)} style={style.descricao.numeros}>{Object.values(l)}, </InfoDado>
                      }

                    })}
                  </div>
                </div>

              </div>

              <div style={style.mapa}>
                <iframe title="Localização" src={mapaUrl} style={{ textAlign: "center" }} width="100%" height="270px"></iframe>
              </div>

            </Dados>



          </Info>



        </div>

      ) : (<h3 style={{ textAlign: "center" }}>Carregando...</h3>)}

    </Container>
  );
}

export const style = {

  mapa: {
    textAlign: "center",
    marginTop: "50px"
  },

  conteudo: {
    padding: "0 70px",
  },

  dados: {
    display: "flex",
  },

  descricao: {
    nome: {
      fontSize: '1.2rem',
      fontWeight: '500',
      margin: 0,
      marginBottom: '1.5rem',
    },

    outros: {
      fontSize: '1rem',
      fontWeight: "semibold",
    },

    dado: {
      marginBottom: '0.5rem',
    },
  }
}

export default Sobre;
