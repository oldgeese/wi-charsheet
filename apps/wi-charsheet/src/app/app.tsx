import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material/styles';
import { Character } from '@wi-charsheet/character';
import { Dashboard, NewChar } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import { theme } from './styles/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { getAll } from '@wi-charsheet/service';

const StyledApp = styled.div` `

export function App() {

  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const getAllCharacters = async () => {
      const all = await getAll()
      setCharacters(all)
    }
    getAllCharacters()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard characters={characters}/>} />
            <Route index element={<Dashboard characters={characters}/>} />
            <Route path="newchar" element={<NewChar />} />
            {/*
            <Route path="viewchar/:id" element={<ViewChar />} />
            <Route path="editchar/:id" element={<EditChar />} />
            */}
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
