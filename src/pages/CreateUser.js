import React from 'react'
import { Container, Typography, TextField, Button, Box } from '@mui/material'
import { Send } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/feature/user/userSlice'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const { register, formState: {errors}, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = data => {
    dispatch(addUser(data))
    navigate(-1)
  }

  return (
    <Container>
      <Typography variant='h3' mt={1}>Create a new user</Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Box p={2}>
          <TextField label="Tên" variant='standard' fullWidth required {...register("name", {required: true})}/>
          {errors.name && <Typography variant="h6" fontSize={15} fontWeight={400} align='left' color={"red"} >Bạn không được bỏ trống</Typography>}
          <TextField label="Địa chỉ" variant='standard' fullWidth required {...register('address', {required: true})}/>
          {errors.address && <Typography variant="h6" fontSize={15} fontWeight={400} align='left' color={"red"} >Bạn không được bỏ trống</Typography>}
        </Box>
        <Box>
          <Button type='submit' variant='contained' startIcon={<Send />}>Create</Button>
        </Box>
      </form>
    </Container>
  )
}

export default CreateUser