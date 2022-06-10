import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material/styles';
import { Character, newCharacter } from '@wi-charsheet/character';
import { Dashboard } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import { theme } from './styles/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

const StyledApp = styled.div` `

export function App() {

  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    setCharacters([newCharacter()])
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard characters={characters}/>} >
              <Route index element={<Dashboard characters={characters}/>} />
              {/*
              <Route path="newchar" element={<NewChar />} />
              <Route path="viewchar/:id" element={<ViewChar />} />
              <Route path="editchar/:id" element={<EditChar />} />
              */}
            </Route>
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
