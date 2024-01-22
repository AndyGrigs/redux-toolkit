import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"

interface userState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: userState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})