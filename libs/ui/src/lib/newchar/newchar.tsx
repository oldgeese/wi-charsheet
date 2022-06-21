import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Character, newCharacter } from 'libs/character/src/lib/character';
import { newBond } from 'libs/bonds/src/lib/bonds';
import { newFeat } from 'libs/feats/src/lib/feats';
import { newSkill } from 'libs/skills/src/lib/skills';
import { newSpell } from 'libs/spells/src/lib/spells';
import { Control, Controller, ControllerProps, SubmitHandler, useFieldArray, useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const StyledNewChar = styled('div')``

const NumberInput = (arg: Omit<ControllerProps<Character>, "render"> & TextFieldProps) => (
  <Controller
    name={arg.name}
    control={arg.control}
    render={({ field }) => (
      <TextField id={field.name} label={arg.label} variant="outlined" type="number" fullWidth={true} {...field}
        onChange={(e) => field.onChange(Number.isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))} />
    )}
    />
)

type SelectAbilityProps = {
  name: any
  control: Control<Character, any> | undefined
}

const SelectAbility = (props: SelectAbilityProps) => {
  const {name, control} = props
  return <Controller
    name={name}
    control={control}
    render={({ field }) => <FormControl fullWidth={true}>
      <InputLabel id={field.name}>能力</InputLabel>
      <Select
        id={field.name}
        label="能力"
        {...field}
      >
        <MenuItem value="筋力">筋力</MenuItem>
        <MenuItem value="敏捷">敏捷</MenuItem>
        <MenuItem value="技術">技術</MenuItem>
        <MenuItem value="知力">知力</MenuItem>
        <MenuItem value="感性">感性</MenuItem>
        <MenuItem value="魅力">魅力</MenuItem>
      </Select>
    </FormControl>}
    />
}


export function NewChar() {
  const bondsTableRef = useRef(null)
  const featsTableRef = useRef(null)
  const skillsTableRef = useRef(null)
  const spellsTableRef = useRef(null)

  useEffect(() => {
    bondsTableRef.current && autoAnimate(bondsTableRef.current)
    featsTableRef.current && autoAnimate(featsTableRef.current)
    skillsTableRef.current && autoAnimate(skillsTableRef.current)
    spellsTableRef.current && autoAnimate(spellsTableRef.current)
  }, [
      bondsTableRef.current,
      featsTableRef.current,
      skillsTableRef.current,
      spellsTableRef.current,
    ])

  const { control, handleSubmit } = useForm<Character>({
    defaultValues: newCharacter()
  })

  const { fields: keyFields } = useFieldArray({
    control,
    name: "generalInformation.keys"
  })

  const {
    fields: bondFields,
    append: bondAppend,
    remove: bondRemove,
    move: bondMove,
  } = useFieldArray({
    control,
    name: "bonds"
  })

  const { fields: featureFields } = useFieldArray({
    control,
    name: "features.features"
  })

  const {
    fields: featFields,
    append: featAppend,
    remove: featRemove,
    move: featMove,
  } = useFieldArray({
    control,
    name: "feats.feats"
  })

  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
    move: skillMove,
  } = useFieldArray({
    control,
    name: "skills.skills"
  })

  const {
    fields: spellFields,
    append: spellAppend,
    remove: spellRemove,
    move: spellMove,
  } = useFieldArray({
    control,
    name: "spells.spells"
  })

  const { fields: frequentlyUsedSpellFields } = useFieldArray({
    control,
    name: "frequentlyUsedSpells"
  })

  const abilities = useWatch({
    control,
    name: "abilities"
  })

  const onSubmit: SubmitHandler<Character> = data => {
    console.log(data)
  }

  return (
    <StyledNewChar>
      <Grid container item justifyContent="center">
        <Typography variant="h4" align="center" color="textPrimary">
          新規作成
        </Typography>
        <Grid container item justifyContent="center">
          <Link to="/">キャラクター一覧に戻る</Link>
        </Grid>
      </Grid>
        <br/><br/>
      <form>
        <Grid container spacing={4}>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Controller
                name="generalInformation.plName"
                control={control}
                render={({field}) => <TextField id={field.name} label="PL名" variant="outlined" fullWidth={true} {...field} />}
                />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="generalInformation.pcName"
                control={control}
                render={({field}) => <TextField id={field.name} label="PC名" variant="outlined" fullWidth={true} {...field} />}
                />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name="generalInformation.race"
                control={control}
                render={({field}) => <TextField id={field.name} label="種族" variant="outlined" fullWidth={true} {...field} />}
                />
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="generalInformation.age"
                control={control}
                label="年齢"
                />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name="generalInformation.gender"
                control={control}
                render={({field}) => <TextField id={field.name} label="性別" variant="outlined" fullWidth={true} {...field} />}
                />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="generalInformation.shapeAndOriginOfCapacity"
                control={control}
                render={({field}) => <TextField id={field.name} label="<器>の形状と由来" variant="outlined" multiline={true} minRows={2} fullWidth={true} {...field} />}
                />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="generalInformation.reason"
                control={control}
                render={({field}) => <TextField id={field.name} label="フェノメナでいる理由" variant="outlined" multiline={true} minRows={2} fullWidth={true} {...field} />}
                />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="generalInformation.appearance"
                control={control}
                render={({field}) => <TextField id={field.name} label="外見の特徴など" variant="outlined" multiline={true} minRows={2} fullWidth={true} {...field} />}
                />
            </Grid>
            {keyFields.map((item, index) =>
              <Grid item xs={4} key={item.id}>
                <Controller
                  name={`generalInformation.keys.${index}.name`}
                  control={control}
                  render={({field}) => <TextField id={field.name} label="キー" variant="outlined" sx={{width:"80%"}} {...field} />}
                  />
                <Controller
                  name={`generalInformation.keys.${index}.used`}
                  control={control}
                  render={({field}) => <Checkbox id={field.name} checked={field.value} {...field} />}
                  />
              </Grid>
            )}
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽能力値</Typography>
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="abilities.consumedExp"
                control={control}
                label="消費経験点"
                />
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="abilities.exp"
                control={control}
                label="保有経験点"
                />
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="abilities.fullCount"
                control={control}
                label="フルカウント"
                />
            </Grid>
            <Grid item xs={6}>
              <NumberInput
                name="abilities.capacity"
                control={control}
                label="器"
                />
            </Grid>
            <Grid item xs={6}>
              <NumberInput
                name="abilities.initialCapacity"
                control={control}
                label="器の初期値"
                />
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="ability table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{width: "15rem"}}>能力値</TableCell>
                      <TableCell>筋力</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell variant="head">
                        <NumberInput
                          name="abilities.strength"
                          control={control}
                          label="筋力"
                          />
                      </TableCell>
                      <TableCell>{abilities.strength + abilities.strength}%</TableCell>
                      <TableCell variant="head">敏捷</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">
                        <NumberInput
                          name="abilities.dexterity"
                          control={control}
                          label="敏捷"
                          />
                      </TableCell>
                      <TableCell>{abilities.dexterity + abilities.strength}%</TableCell>
                      <TableCell>{abilities.dexterity + abilities.dexterity}%</TableCell>
                      <TableCell variant="head">技術</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">
                        <NumberInput
                          name="abilities.technique"
                          control={control}
                          label="技術"
                          />
                      </TableCell>
                      <TableCell >{abilities.technique + abilities.strength}%</TableCell>
                      <TableCell >{abilities.technique + abilities.dexterity}%</TableCell>
                      <TableCell >{abilities.technique + abilities.technique}%</TableCell>
                      <TableCell variant="head">知力</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">
                        <NumberInput
                          name="abilities.intelligence"
                          control={control}
                          label="知力"
                          />
                      </TableCell>
                      <TableCell >{abilities.intelligence + abilities.strength}%</TableCell>
                      <TableCell >{abilities.intelligence + abilities.dexterity}%</TableCell>
                      <TableCell >{abilities.intelligence + abilities.technique}%</TableCell>
                      <TableCell >{abilities.intelligence + abilities.intelligence}%</TableCell>
                      <TableCell variant="head">感性</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">
                        <NumberInput
                          name="abilities.sensibility"
                          control={control}
                          label="感性"
                          />
                      </TableCell>
                      <TableCell >{abilities.sensibility + abilities.strength}%</TableCell>
                      <TableCell >{abilities.sensibility + abilities.dexterity}%</TableCell>
                      <TableCell >{abilities.sensibility + abilities.technique}%</TableCell>
                      <TableCell >{abilities.sensibility + abilities.intelligence}%</TableCell>
                      <TableCell >{abilities.sensibility + abilities.sensibility}%</TableCell>
                      <TableCell variant="head">魅力</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">
                        <NumberInput
                          name="abilities.charisma"
                          control={control}
                          label="魅力"
                          />
                      </TableCell>
                      <TableCell >{abilities.charisma + abilities.strength}%</TableCell>
                      <TableCell >{abilities.charisma + abilities.dexterity}%</TableCell>
                      <TableCell >{abilities.charisma + abilities.technique}%</TableCell>
                      <TableCell >{abilities.charisma + abilities.intelligence}%</TableCell>
                      <TableCell >{abilities.charisma + abilities.sensibility}%</TableCell>
                      <TableCell >{abilities.charisma + abilities.charisma}%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽ボンド</Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="bonds table">
                  <TableHead>
                    <TableRow>
                      <TableCell>名前</TableCell>
                      <TableCell>関係</TableCell>
                      <TableCell>種別</TableCell>
                      <TableCell align="center">使用</TableCell>
                      <TableCell>行操作</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody ref={bondsTableRef}>
                    {bondFields.map((p, index) => (
                      <TableRow key={p.id}>
                        <TableCell sx={{width: '15%'}}>
                          <Controller
                            name={`bonds.${index}.name`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="名前" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '45%'}}>
                          <Controller
                            name={`bonds.${index}.relation`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="関係" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '20%'}}>
                          <Controller
                            name={`bonds.${index}.type`}
                            control={control}
                            render={({field}) =>
                                <RadioGroup row {...field}>
                                  <FormControlLabel value="唯一" control={<Radio />} label="唯一" />
                                  <FormControlLabel value="PC" control={<Radio />} label="PC" />
                                  <FormControlLabel value="NPC" control={<Radio />} label="NPC" />
                                </RadioGroup>
                           }
                            />
                        </TableCell>
                        <TableCell align="center" sx={{width: '5%'}}>
                          <Controller
                            name={`bonds.${index}.used`}
                            control={control}
                            render={({field}) => <Checkbox id={field.name} checked={field.value} {...field} />}
                            />
                        </TableCell>
                        <TableCell align="center" sx={{width: '15%'}}>
                          <IconButton aria-label="moveup bond" onClick={() => bondMove(index, index-1)} disabled={index==0}>
                            <ArrowUpwardIcon />
                          </IconButton>
                          <IconButton aria-label="movedown bond" onClick={() => bondMove(index, index+1)} disabled={index==(bondFields.length-1)}>
                            <ArrowDownwardIcon />
                          </IconButton>
                          <IconButton aria-label="delete bond" onClick={() => bondRemove(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => bondAppend(newBond())} disabled={bondFields.length >= 5}>行追加</Button>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽特徴</Typography>
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="features.consumedExp"
                control={control}
                label="消費経験点"
                />
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="features table">
                  <TableHead>
                    <TableRow>
                      <TableCell>名称</TableCell>
                      <TableCell>効果</TableCell>
                      <TableCell>由来</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {featureFields.map((p, index) => (
                      <TableRow key={p.id}>
                        <TableCell sx={{width: '20%'}}>
                          <Controller
                            name={`features.features.${index}.name`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="名称" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '70%'}}>
                          <Controller
                            name={`features.features.${index}.effect`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '10%'}}>
                          {p.origin}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽特技</Typography>
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="feats.consumedExp"
                control={control}
                label="消費経験点"
                />
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="feats table">
                  <TableHead>
                    <TableRow>
                      <TableCell>名称</TableCell>
                      <TableCell>効果</TableCell>
                      <TableCell>条件</TableCell>
                      <TableCell>行操作</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody ref={featsTableRef}>
                    {featFields.map((p, index) => (
                      <TableRow key={p.id}>
                        <TableCell sx={{width: '20%'}}>
                          <Controller
                            name={`feats.feats.${index}.name`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="名称" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '35%'}}>
                          <Controller
                            name={`feats.feats.${index}.effect`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '30%'}}>
                          <Controller
                            name={`feats.feats.${index}.condition`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="条件" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '15%'}}>
                          <IconButton aria-label="moveup feat" onClick={() => featMove(index, index-1)} disabled={index==0}>
                            <ArrowUpwardIcon />
                          </IconButton>
                          <IconButton aria-label="movedown feat" onClick={() => featMove(index, index+1)} disabled={index==(featFields.length-1)}>
                            <ArrowDownwardIcon />
                          </IconButton>
                          <IconButton aria-label="delete feat" onClick={() => featRemove(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => featAppend(newFeat())}>行追加</Button>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽武器</Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="weapons table" sx={{border: '2px solid black', borderBottom: 'none'}}>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{border: 0, width: '40%', justifyContent: 'space-between'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={5}>
                            <Controller
                              name={`weapons.weapons.0.name`}
                              control={control}
                              render={({field}) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />}
                              />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.0.leftAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.0.rightAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={9}>
                            <NumberInput
                              name="weapons.weapons.0.percent"
                              control={control}
                              label=""
                              />
                          </Grid>
                          <Grid item xs={3}>
                            %
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, width: '40%', borderLeft: '2px solid black', justifyContent: 'space-between'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={5}>
                            <Controller
                              name={`weapons.weapons.1.name`}
                              control={control}
                              render={({field}) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />}
                              />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.1.leftAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.1.rightAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={9}>
                            <NumberInput
                              name="weapons.weapons.1.percent"
                              control={control}
                              label=""
                              />
                          </Grid>
                          <Grid item xs={3}>
                            %
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{borderTop: '1px solid black'}}>
                      <TableCell sx={{border: 0, width: '40%', justifyContent: 'space-between'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={5}>
                            <Controller
                              name={`weapons.weapons.2.name`}
                              control={control}
                              render={({field}) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />}
                              />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.2.leftAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.2.rightAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={9}>
                            <NumberInput
                              name="weapons.weapons.2.percent"
                              control={control}
                              label=""
                              />
                          </Grid>
                          <Grid item xs={3}>
                            %
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, width: '40%', borderLeft: '2px solid black', justifyContent: 'space-between'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={5}>
                            <Controller
                              name={`weapons.weapons.3.name`}
                              control={control}
                              render={({field}) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />}
                              />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.3.leftAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.weapons.3.rightAbility" control={control} />
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={9}>
                            <NumberInput
                              name="weapons.weapons.3.percent"
                              control={control}
                              label=""
                              />
                          </Grid>
                          <Grid item xs={3}>
                            %
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Table aria-label="weapons table" sx={{border: '2px solid black'}}>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{border: 0, width: '25%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={2}>回避</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>(</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.evade.leftAbility" control={control} />
                          </Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>+</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.evade.rightAbility" control={control} />
                          </Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>)</Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={9}>
                            <NumberInput
                              name="weapons.evade.percent"
                              control={control}
                              label=""
                              />
                          </Grid>
                          <Grid item xs={3}>
                            %
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{borderTop: '1px solid black'}}>
                      <TableCell sx={{border:0, borderLeft: '2px solid black', width: '25%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={2}>防御</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>(</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.defence.leftAbility" control={control} />
                          </Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>+</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.defence.rightAbility" control={control} />
                          </Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>)</Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={9}>
                            <NumberInput
                              name="weapons.defence.percent"
                              control={control}
                              label=""
                              />
                          </Grid>
                          <Grid item xs={3}>
                            %
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{borderTop: '1px solid black'}}>
                      <TableCell sx={{border:0, borderLeft: '2px solid black', width: '25%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={2}>魔法抵抗</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>(</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.spellResistance.leftAbility" control={control} />
                          </Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>+</Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>
                            <SelectAbility name="weapons.spellResistance.rightAbility" control={control} />
                          </Grid>
                          <Grid item xs={2} sx={{textAlign: 'center'}}>)</Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
                        <Grid container alignItems="center">
                          <Grid item xs={9}>
                            <NumberInput
                              name="weapons.spellResistance.percent"
                              control={control}
                              label=""
                              />
                          </Grid>
                          <Grid item xs={3}>
                            %
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽技能</Typography>
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="skills.consumedExp"
                control={control}
                label="消費経験点"
                />
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="skills table">
                  <TableHead>
                    <TableRow>
                      <TableCell>名称</TableCell>
                      <TableCell>技能値</TableCell>
                      <TableCell>行操作</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody ref={skillsTableRef}>
                    {skillFields.map((p, index) => (
                      <TableRow key={p.id}>
                        <TableCell sx={{width: '30%'}}>
                          <Controller
                            name={`skills.skills.${index}.name`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="名称" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '15%'}}>
                          <Grid container alignItems="center">
                            <Grid item xs={9}>
                              <NumberInput
                                name={`skills.skills.${index}.value`}
                                control={control}
                                label="技能値"
                                />
                            </Grid>
                            <Grid item xs={3}>
                              %
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell sx={{width: '15%'}}>
                          <IconButton aria-label="moveup skill" onClick={() => skillMove(index, index-1)} disabled={index==0}>
                            <ArrowUpwardIcon />
                          </IconButton>
                          <IconButton aria-label="movedown skill" onClick={() => skillMove(index, index+1)} disabled={index==(skillFields.length-1)}>
                            <ArrowDownwardIcon />
                          </IconButton>
                          <IconButton aria-label="delete skill" onClick={() => skillRemove(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => skillAppend(newSkill())}>行追加</Button>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽魔法</Typography>
            </Grid>
            <Grid container item alignItems="center" spacing={1}>
              <Grid item xs={2}>
                <Typography>基本発動能力値</Typography>
              </Grid>
              <Grid item xs={2}>
                <SelectAbility name="spells.leftAbility" control={control} />
              </Grid>
              <Grid item xs={0} justifySelf="center">
                <Typography>+</Typography>
              </Grid>
              <Grid item xs={2}>
                <SelectAbility name="spells.rightAbility" control={control} />
              </Grid>
              <Grid container item alignItems="center" xs={2}>
                <Grid item xs={9}>
                  <NumberInput
                    name="spells.percent"
                    control={control}
                    label=""
                    />
                </Grid>
                <Grid item xs={3}>
                  %
                </Grid>
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <NumberInput
                name="spells.consumedExp"
                control={control}
                label="消費経験点"
                />
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="spells table">
                  <TableHead>
                    <TableRow>
                      <TableCell>判定値</TableCell>
                      <TableCell>効果</TableCell>
                      <TableCell>属性</TableCell>
                      <TableCell>キーワード</TableCell>
                      <TableCell>モーション</TableCell>
                      <TableCell>アイテム</TableCell>
                      <TableCell>行操作</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody ref={spellsTableRef}>
                    {spellFields.map((p, index) => (
                      <TableRow key={p.id}>
                        <TableCell sx={{width: '10%'}}>
                          <Grid container item alignItems="center">
                            <Grid item xs={9}>
                              <NumberInput
                                name={`spells.spells.${index}.check`}
                                control={control}
                                label="判定値"
                                />
                            </Grid>
                            <Grid item xs={3}>
                              %
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell sx={{width: '20%'}}>
                          <Controller
                            name={`spells.spells.${index}.effect`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '10%'}}>
                          <Controller
                            name={`spells.spells.${index}.attribute`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="属性" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '20%'}}>
                          <Controller
                            name={`spells.spells.${index}.keyword`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="キーワード" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '20%'}}>
                          <Controller
                            name={`spells.spells.${index}.motion`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="モーション" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '20%'}}>
                          <Controller
                            name={`spells.spells.${index}.item`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="アイテム" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell sx={{width: '15%'}}>
                          <IconButton aria-label="moveup spell" onClick={() => spellMove(index, index-1)} disabled={index==0}>
                            <ArrowUpwardIcon />
                          </IconButton>
                          <IconButton aria-label="movedown spell" onClick={() => spellMove(index, index+1)} disabled={index==(spellFields.length-1)}>
                            <ArrowDownwardIcon />
                          </IconButton>
                          <IconButton aria-label="delete spell" onClick={() => spellRemove(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => spellAppend(newSpell())}>行追加</Button>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">▽よく使う魔法</Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="frequently-used-spells table">
                  {frequentlyUsedSpellFields.map((p, index) => (
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
                        <TableCell>
                          <Grid container item alignItems="center">
                            <Grid item xs={9}>
                              <NumberInput
                                name={`frequentlyUsedSpells.${index}.modifiedCheck`}
                                control={control}
                                label="判定値"
                                />
                            </Grid>
                            <Grid item xs={3}>
                              %
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell>
                          <Controller
                            name={`frequentlyUsedSpells.${index}.effect`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell>
                          <Controller
                            name={`frequentlyUsedSpells.${index}.attribute`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="属性" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell>
                          <Controller
                            name={`frequentlyUsedSpells.${index}.keyword`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="キーワード" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell>
                          <Controller
                            name={`frequentlyUsedSpells.${index}.motion`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="モーション" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                        <TableCell>
                          <Controller
                            name={`frequentlyUsedSpells.${index}.item`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="アイテム" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell variant="head">拡張要素⇒</TableCell>
                        <TableCell colSpan={5}>
                          <Controller
                            name={`frequentlyUsedSpells.${index}.extension`}
                            control={control}
                            render={({field}) => <TextField id={field.name} label="拡張要素" variant="outlined" fullWidth={true} {...field} />}
                            />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>保存</Button>
          </Grid>
        </Grid>
      </form>
    </StyledNewChar>
  );
}

export default NewChar;
