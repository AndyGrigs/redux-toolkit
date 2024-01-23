import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (thunkAPI) => {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
        return responce.data
    }
)