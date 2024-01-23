import { PayloadAction, createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./fetchData";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Define your reducers here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action: PayloadAction<unknown, string, never, SerializedError>) => {
            state.isLoading = false;
            state.error = action.error.message || 'An error occurred';
        });
    }
});

export default userSlice.reducer;
