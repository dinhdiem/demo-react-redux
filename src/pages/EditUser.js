import React, { useEffect } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/feature/user/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { listOne } from "../api/test";

const CreateUser = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listOne(id);
      reset(data);
    };
    getUser();
  }, [id, reset]);

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h3" mt={1}>
        Update User
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box p={2}>
          <TextField
            label="Tên"
            variant="standard"
            fullWidth
            {...register("name", { required: true })}
          />
          {errors.name && (
            <Typography
              variant="h6"
              fontSize={15}
              fontWeight={400}
              align="left"
              color={"red"}
            >
              Bạn không được bỏ trống
            </Typography>
          )}
          <TextField
            label="Địa chỉ"
            variant="standard"
            fullWidth
            {...register("address", { required: true })}
          />
          {errors.address && (
            <Typography
              variant="h6"
              fontSize={15}
              fontWeight={400}
              align="left"
              color={"red"}
            >
              Bạn không được bỏ trống
            </Typography>
          )}
        </Box>
        <Box>
          <Button type="submit" variant="contained" startIcon={<Send />}>
            Update
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateUser;
