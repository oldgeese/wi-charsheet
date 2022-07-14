import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material/styles';
import { Character } from '@wi-charsheet/character';
import { getAll } from '@wi-charsheet/service';
import { Dashboard, NewChar, ViewChar } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import { theme } from './styles/theme';

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
            <Route path="viewchar/:id" element={<ViewChar />} />
            {/*
            <Route path="editchar/:id" element={<EditChar />} />
            */}
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
