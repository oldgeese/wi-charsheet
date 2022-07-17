import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Grid, Typography, TextField } from '@mui/material';
import { Character, newCharacter } from '@wi-charsheet/character';
import { getById, update } from '@wi-charsheet/service';
import { hash } from '@wi-charsheet/utils';
import { useCallback, useEffect } from 'react';
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { z } from 'zod';
import { InputCharSheet } from '../charsheet/input_charsheet';
import CircularProgress from '@mui/material/CircularProgress';

const StyledEditChar = styled('div')``

const schema = z.any().refine(data => {
  const hashedPasswordForUpdate = hash(data.passwordForUpdate)
  return data.password === hashedPasswordForUpdate
}, {message: 'パスワードが一致しません。', path: ['passwordForUpdate']})

export function EditChar() {
  const { control, handleSubmit, formState: {isSubmitting, errors}, reset } = useForm<Character>({
    defaultValues: newCharacter(),
    resolver: zodResolver(schema),
  })

  const { id }= useParams()

  const resetFormAsync = useCallback(async () => {
    if (id) {
      console.log("fetching...")
      const character = await getById(id)
      reset(character)
      console.log("fetched!")
    }
  }, [id, reset])

  useEffect(() => {
    resetFormAsync()
  }, [])

  const password = useWatch({
    control,
    name: "password"
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Character> = async (data) => {
    try {
      console.log(data)
      data.updatedAt = new Date()
      data.passwordForUpdate = ""
      await update(data)
      navigate("/")
    } catch (error) {
      console.error('Error writing document: ', error)
    }
  }

  return (
    <StyledEditChar>
      <Grid container item justifyContent="center">
        <Typography variant="h4" align="center" color="textPrimary">
          編集
        </Typography>
        <Grid container item justifyContent="center">
          <Link to="/">キャラクター一覧に戻る</Link>
        </Grid>
      </Grid>
      <br/><br/>
      { password === "" ?
        <Grid container item justifyContent="center">
          <CircularProgress />
        </Grid>
        :
        <form>
          <Grid container spacing={4}>
            <InputCharSheet control={control} />
            <Grid container item spacing={1} direction="column">
              <Grid item xs={4}>
                <Controller
                  name={`passwordForUpdate`}
                  control={control}
                  render={({field}) => <TextField error={errors.passwordForUpdate? true : false} helperText={errors.passwordForUpdate?.message && errors.passwordForUpdate?.message}  id={field.name} type="password" label="パスワード" variant="outlined" {...field}
                    />}
                  />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <LoadingButton variant="contained" loading={isSubmitting} onClick={handleSubmit(onSubmit)}>保存してトップに戻る</LoadingButton>
            </Grid>
          </Grid>
        </form>
    }
    </StyledEditChar>
  );
}

export default EditChar;
