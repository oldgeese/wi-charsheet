import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Alert, Grid, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Character, newCharacter } from '@wi-charsheet/character';
import { getById, update } from '@wi-charsheet/service';
import { InputCharSheet, usePrompt } from '@wi-charsheet/ui';
import { baseSchema, hash } from '@wi-charsheet/utils';
import { useCallback, useEffect } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';

const StyledEditChar = styled('div')``

const schema = baseSchema.refine(data => {
  const hashedPasswordForUpdate = hash(data.passwordForUpdate)
  return data.password === hashedPasswordForUpdate
}, {message: 'パスワードが一致しません。', path: ['passwordForUpdate']})

export function EditChar() {
  const methods = useForm<Character>({
    defaultValues: newCharacter(),
    resolver: zodResolver(schema),
  })
  const { control, handleSubmit, formState: {isDirty, isSubmitting, errors}, reset } = methods

  const { id }= useParams()

  const resetFormAsync = useCallback(async () => {
    if (id) {
      const character = await getById(id)
      reset(character)
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
      data.updatedAt = Date.now()
      data.passwordForUpdate = ""
      console.log(data)
      reset(data) // for reset isDirty
      await update(data)
      navigate("/")
    } catch (error) {
      console.error('Error writing document: ', error)
    }
  }

  usePrompt("編集中のデータがあります。本当にページを離れますか？", isDirty)

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
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
        :
        <FormProvider {...methods}>
          <form>
            <Grid container spacing={4}>
              <InputCharSheet control={control} />
              <Grid container item spacing={1} direction="row">
                <Grid item xs={12}>
                  <Controller
                    name={`passwordForUpdate`}
                    control={control}
                    render={({field}) => <TextField error={errors.passwordForUpdate? true : false} helperText={errors.passwordForUpdate?.message && errors.passwordForUpdate?.message}  id={field.name} type="password" label="パスワード" variant="outlined" {...field}
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
    }
    </StyledEditChar>
  );
}

export default EditChar;
