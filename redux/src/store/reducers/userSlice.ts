import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"

interface userState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    // count: number;
}

const initialState: userState = {
    users: [],
    isLoading: false,
    error: '',
    // count: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // increment(state, action: PayloadAction<number>) {
        //     state.count += action.payload
        // }
    }
})
// export const { increment } = userSlice.actions;
export default userSlice.reducer;