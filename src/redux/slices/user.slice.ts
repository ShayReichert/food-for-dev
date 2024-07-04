import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../domains/entities/user.entity";
import { getUserProfile } from "../../domains/usecases/getUserProfile.usecase";
import { updateUserProfile } from "../../domains/usecases/updateUserProfile.usecase";
import { IUserGateway } from "../../domains/models/user.interface";
import { UserGateway } from "../../infrastructure/gateways/user.gateway";
import { UserRepository } from "../../infrastructure/repositories/user.repository";

const userGateway: IUserGateway = new UserGateway();
const userRepository = new UserRepository(userGateway);

interface UserState {
  profile: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  status: "idle",
  error: null,
};

export const fetchUserProfile = createAsyncThunk("user/fetchUserProfile", async () => {
  return await getUserProfile(userRepository);
});

export const updateUser = createAsyncThunk("user/updateUser", async ({ userId, updatedData }: { userId: string; updatedData: Partial<User> }) => {
  return await updateUserProfile(userRepository, userId, updatedData);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default userSlice.reducer;
