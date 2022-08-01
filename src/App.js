import './App.css';
import ListaPaises from './components/ListaPaises';
import Sobre from './components/Sobre';
import { Routes, Route } from "react-router-dom";
import { Global, Header, Toggle, Up } from './styles';
import { SunIcon, MoonIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from './globalStyle';
import { useNavigate } from 'react-router-dom';

function App() {

  const [theme, setTheme] = useState(darkTheme);

  const navigate = useNavigate();

  const themeToggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />

      <Global>
        <Header id="home">
          <div onClick={() => navigate("/vendo-bandeiras/")}>
            <h1>Lista de Países</h1>
          </div>

          <Toggle onClick={() => themeToggle()}>

            {theme === lightTheme ? <SunIcon width={20} height={20} /> : <MoonIcon width={20} height={20} />}
            <span>DarkMode</span>

          </Toggle>

        </Header>

        <Routes>
          <Route path="/vendo-bandeiras" element={<ListaPaises />} />
          <Route path="/vendo-bandeiras/sobre/:nome" element={<Sobre />} />
        </Routes>

        <Up onClick={() => scrollToTop()}>
          <ChevronUpIcon width={25} height={25} style={style.up} />
        </Up>

      </Global>

    </ThemeProvider>
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

export default App;
