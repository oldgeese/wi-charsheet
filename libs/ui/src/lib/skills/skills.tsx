import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Skills as Data } from '@wi-charsheet/skills';
import styled from 'styled-components';

export interface SkillsProps {
  skills: Data
}

const ComsumedExp = styled(Typography)`
  padding-left: 16px;
  text-decoration: underline;
` as typeof Typography

export function Skills(props: SkillsProps) {
  const p = props.skills

  const matrix = []
  for (let i = 0; i < p.skills.length; i+=15) {
    const target = p.skills.slice(i, i+15)
    const threeColumns = []
    for (let j = 0; j < target.length; j+=5) {
      const oneColumn = target.slice(j, j+5)
      threeColumns.push(oneColumn)
    }
    matrix.push(threeColumns)
  }

  return (
    <Grid container item direction="column">
      <div>
        <Typography variant="h6" component="span">▽技能</Typography>
        <ComsumedExp component="span">消費経験点:{p.consumedExp}</ComsumedExp>
      </div>
      <Grid container spacing={1}>
        {matrix.map(m => (
          <Grid container item xs={12} spacing={1}>
            {m.map(oneColumn => (
              <Grid container item xs={4}>
                <TableContainer>
                  <Table aria-label="skills table">
                    <TableHead>
                      <TableRow>
                        <TableCell>名称</TableCell>
                        <TableCell>技能値</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {oneColumn.map(o => (
                        <TableRow key={o.id}>
                          <TableCell sx={{width: '70%'}}>{o.name}</TableCell>
                          <TableCell sx={{width: '30%'}}>{o.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Skills;
