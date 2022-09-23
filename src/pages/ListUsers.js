import React, { useEffect } from 'react'
import {  Button, Container, Typography } from '@mui/material'
import {useSelector , useDispatch} from 'react-redux'
import { getAllUsers, deleteUser } from '../redux/feature/user/userSlice'
import { TableContainer, Table, TableHead, TableBody, TableRow , TableCell, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'

const ListUsers = () => {
  const user = useSelector(store => store.user.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllUsers())
  },[dispatch, user])

  const handleDelete = (item) => {
    if (window.confirm("Bạn có chắc muốn xóa không?")) {
      dispatch(deleteUser(item))
    }
  }

  const handleEdit = (id) => {
    navigate(`${id}/edit`)
  }
  return (
    <Container>
        <Typography variant='h3' mt={1} mb={5}>List Users</Typography>
        <Button variant='contained' onClick={() => navigate(`/add`)}>Add</Button>
        <TableContainer component={Paper} sx={{paddingTop: 5}}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                user?.map((item, index) => {
                  return <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(item.id)}>
                        <EditIcon />
                      </Button>
                      <Button onClick={() => handleDelete(item)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
              })
              }
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  )
}

export default ListUsers