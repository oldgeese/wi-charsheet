import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { create } from "@wi-charsheet/service";
import { InputCharSheet } from '@wi-charsheet/ui';
import { baseSchema, hash } from '@wi-charsheet/utils';
import { Character, newCharacter } from 'libs/character/src/lib/character';
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const StyledNewChar = styled('div')``

const schema = baseSchema.refine(data => data.password === data.passwordConfirm, {message: 'パスワードが一致しません。', path: ['passwordConfirm']})

export function NewChar() {
  const methods = useForm<Character>({
    defaultValues: newCharacter(),
    resolver: zodResolver(schema),
  })
  const { control, handleSubmit, formState: {isSubmitting, errors}, trigger } = methods

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Character> = async (data) => {
    try {
      console.log(data)
      data.password = hash(data.password)
      data.passwordConfirm = hash(data.passwordConfirm)
      data.createdAt = Date.now()
      data.updatedAt = Date.now()
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
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={4}>
            <InputCharSheet control={control}/>
            <Grid container item spacing={1} direction="row">
              <Grid item xs={12}>
                <Controller
                  name={`password`}
                  control={control}
                  render={({field}) => <TextField error={errors.password? true : false} id={field.name} type="password" label="パスワード" variant="outlined" {...field}
                    onChange={(e) => {field.onChange(e.target.value);trigger("passwordConfirm")}}
                    />}
                  />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`passwordConfirm`}
                  control={control}
                  render={({field}) => <TextField error={errors.passwordConfirm ? true : false} helperText={errors.passwordConfirm?.message && errors.passwordConfirm?.message} id={field.name} type="password" label="パスワード(確認)" variant="outlined" {...field}
                    onChange={(e) => {field.onChange(e.target.value);trigger("passwordConfirm")}}
                    />}
                  />
              </Grid>
              {Object.keys(errors).length > 0 && <Grid item xs={12}><Alert severity="error">入力値に誤りがあります。確認してください。</Alert></Grid>}
            </Grid>
            <Grid item xs={12}>
              <LoadingButton variant="contained" loading={isSubmitting} onClick={handleSubmit(onSubmit)}>保存してトップに戻る</LoadingButton>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </StyledNewChar>
  );
}

export default NewChar;
