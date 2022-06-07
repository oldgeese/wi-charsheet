import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { FrequentlyUsedSpell } from '@wi-charsheet/frequently-used-spells';
import { Checkbox } from '@mui/material';
import React from 'react';

export interface FrequentlyUsedSpellsProps {
  frequentlyUsedSpells: FrequentlyUsedSpell[]
}

const StyledFrequentlyUsedSpells = styled('div')``

export function FrequentlyUsedSpells(props: FrequentlyUsedSpellsProps) {
  const ps = props.frequentlyUsedSpells
  return (
    <StyledFrequentlyUsedSpells>
      <Typography variant="h6">▽よく使う魔法</Typography>
      <TableContainer>
        <Table aria-label="frequently-used-spells table">
          {ps.map((p) => (
            <TableBody key={p.id} sx={{border: "2px solid black"}}>
              <TableRow>
                <TableCell variant="head">修正後判定値</TableCell>
                <TableCell variant="head">効果</TableCell>
                <TableCell variant="head">属性</TableCell>
                <TableCell variant="head">キーワード</TableCell>
                <TableCell variant="head">モーション</TableCell>
                <TableCell variant="head">アイテム</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{p.modifiedCheck}%</TableCell>
                <TableCell>{p.effect}</TableCell>
                <TableCell>{p.attribute}</TableCell>
                <TableCell>{p.keyword}</TableCell>
                <TableCell>{p.motion}</TableCell>
                <TableCell>{p.item}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">拡張要素⇒</TableCell>
                <TableCell colSpan={5}>{p.extension}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </StyledFrequentlyUsedSpells>
  );
}

export default FrequentlyUsedSpells;
