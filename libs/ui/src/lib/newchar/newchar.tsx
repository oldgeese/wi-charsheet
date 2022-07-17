import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { create } from "@wi-charsheet/service";
import { InputCharSheet } from '@wi-charsheet/ui';
import { hash } from '@wi-charsheet/utils';
import { Character, newCharacter } from 'libs/character/src/lib/character';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from 'zod';

const StyledNewChar = styled('div')``

const schema = z.any().refine(data => data.password === data.passwordConfirm, {message: 'パスワードが一致しません。', path: ['passwordConfirm']})

export function NewChar() {
  const { control, handleSubmit, formState: {isSubmitting, errors}, trigger } = useForm<Character>({
    defaultValues: newCharacter(),
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Character> = async (data) => {
    try {
      console.log(data)
      data.password = hash(data.password)
      data.passwordConfirm = hash(data.passwordConfirm)
      data.createdAt = new Date()
      data.updatedAt = new Date()
      await create(data)
      navigate("/")
    } catch (error) {
      console.error('Error writing document: ', error)
    }
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
          <InputCharSheet control={control} />
          <Grid container item spacing={1} direction="column">
            <Grid item xs={4}>
              <Controller
                name={`password`}
                control={control}
                render={({field}) => <TextField error={errors.password? true : false} id={field.name} type="password" label="パスワード" variant="outlined" {...field}
                  onChange={(e) => {field.onChange(e.target.value);trigger("passwordConfirm")}}
                  />}
                />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name={`passwordConfirm`}
                control={control}
                render={({field}) => <TextField error={errors.passwordConfirm ? true : false} helperText={errors.passwordConfirm?.message && errors.passwordConfirm?.message} id={field.name} type="password" label="パスワード(確認)" variant="outlined" {...field}
                  onChange={(e) => {field.onChange(e.target.value);trigger("passwordConfirm")}}
                  />}
                />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LoadingButton variant="contained" loading={isSubmitting} onClick={handleSubmit(onSubmit)}>保存してトップに戻る</LoadingButton>
          </Grid>
        </Grid>
      </form>
    </StyledNewChar>
  );
}

export default NewChar;
