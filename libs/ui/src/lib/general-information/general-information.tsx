import styled from '@emotion/styled';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { GeneralInformation as Data } from '@wi-charsheet/general-information';

export interface GeneralInformationProps {
  generalInformation: Data
}

const Title = styled(Typography)`
  border-bottom: 1px solid black;
  display: inline-block;
` as typeof Typography

const PlName = styled(Typography)`
  border-bottom: 1px solid black;
  width: 20rem;
  display: inline-block;
` as typeof Typography

const PcName = styled('div')`
  /* https://css-generators.com/custom-corners/ */
  position: relative;
  z-index: 0;
  min-height: 50px;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: black;
    clip-path: polygon(0 0,calc(100% - 20.00px) 0,calc(100% - 10px) 10px,100% 20.00px,100% 100%,20.00px 100%,10px calc(100% - 10px),0 calc(100% - 20.00px),0 0,2px  2px ,2px calc(100% - 20.00px - 0.83px),calc(10px + 1.41px) calc(100% - 10px - 1.41px),calc(20.00px + 0.83px) calc(100% - 2px),calc(100% - 2px) calc(100% - 2px),calc(100% - 2px) calc(20.00px + 0.83px),calc(100% - 10px - 1.41px) calc(10px + 1.41px),calc(100% - 20.00px - 0.83px) 2px,2px 2px);
  }
`

const Appearance = styled('div')`
  border: 2px solid black;
  height: 380px;
  display: flex;
  justify-content: center;
`

const CharImage = styled('img')`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
`

const Key = styled('div')`
  border: 2px solid black;
  border-radius: 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export function GeneralInformation(props: GeneralInformationProps) {
  const p = props.generalInformation
  return (
    <Grid container item direction="column" spacing={1}>
      <Grid item container spacing={1}>
        <Grid item><Title>キャラクターシート</Title></Grid>
        <Grid item><PlName>PL:{p.plName}</PlName></Grid>
      </Grid>
      <Grid item container>
        <Grid item container direction="row" spacing={1}>
          <Grid item container direction="column" spacing={1} xs={8}>
            <Grid item><PcName><div style={{padding: '30px 20px'}}>名:{p.pcName}</div></PcName></Grid>
            <Grid item container>
              <TableContainer>
                <Table aria-label="general-information table">
                  <TableBody>
                    <TableRow>
                      <TableCell>種族:{p.race}</TableCell>
                      <TableCell>年齢:{p.age}</TableCell>
                      <TableCell>性別:{p.gender}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} sx={{height:'46px'}} >&lt;器&gt;の形状と由来:<br/><div style={{whiteSpace: 'pre-wrap'}}>{p.shapeAndOriginOfCapacity}</div></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} sx={{height:'46px'}}>フェノメナでいる理由:<br/><div style={{whiteSpace: 'pre-wrap'}}>{p.reason}</div></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} sx={{height:'46px'}}>外見の特徴など:<br/><div style={{whiteSpace: 'pre-wrap'}}>{p.appearance}</div></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid item xs={4} justifyContent="center">
            <Appearance>
              <CharImage src={p.imageUrl} alt={p.pcName}/>
            </Appearance>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        {p.keys.map((key) =>
          <Grid item key={key.id} xs={4}><Key>キー:{key.name}{key.used ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}</Key></Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default GeneralInformation;
