import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material/styles';
import { Character } from '@wi-charsheet/character';
import { getAll } from '@wi-charsheet/service';
import { Dashboard, EditChar, NewChar, ViewChar } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import {
    Route, Routes, createBrowserRouter, RouterProvider,
} from "react-router-dom";
import { theme } from './styles/theme';

const StyledApp = styled.div` `

const router = createBrowserRouter([
  { path: "*", Component: Root },
])

function Root() {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const getAllCharacters = async () => {
      const all = await getAll()
      setCharacters(all)
    }
    getAllCharacters()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Dashboard characters={characters}/>} />
      <Route index element={<Dashboard characters={characters}/>} />
      <Route path="newchar" element={<NewChar />} />
      <Route path="viewchar/:id" element={<ViewChar />} />
      <Route path="editchar/:id" element={<EditChar />} />
    </Routes>
  )
}

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <RouterProvider router={router} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
