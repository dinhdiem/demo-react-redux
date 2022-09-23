import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, list, listOne, remove, update } from "../../../api/test";

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers", 
    async () => {
        const { data } = await list()
        return data
    }
)

export const getOneUser = createAsyncThunk(
    "user/getOneUser", 
    async (id) => {
        const { data } = await listOne(id)
        return data
    }
)


export const addUser = createAsyncThunk(
    "user/addUser", 
    async (user) => {
        const { data } = await add(user)
        return data
    }
)

export const deleteUser = createAsyncThunk(
    "user/deleteUser", 
    async (user) => {
        const { data } = await remove(user.id)
        return data
    }
)

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (user) => {
        const { data } = await update(user)
        return data
    }
)




const userSlice = createSlice({
    name: "user",
    initialState: {
        users: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
        });
        builder.addCase(getOneUser.fulfilled, (state, action) => {
            state.users = state.users.filter(item => item.id === action.payload.id)
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload)
        });
        builder.addCase(deleteUser.fulfilled,(state, action) => {
            const user = action.payload
            state.users = state.users.filter(item => item.id !== user.id)
        });
        builder.addCase(updateUser.fulfilled,(state, action) => {
            const user = action.payload
            state.users = state.users.map(item => item.id === user.id ? user : item)
        });
    }
})

export const { removeUser } = userSlice.actions
export default userSlice.reducer
