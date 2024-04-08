import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginService } from '@/services/auth-service';
import {
    AUTH_REFRESH_TOKEN,
    AUTH_TOKEN,
    expireCookies,
    getAuthCookie,
    removeCookies,
    setAuthCookie,
} from '@/lib/cookies';
import { AuthState } from '@/interfaces/user-interface';

type AuthSliceState = { token?: string | undefined, isLoggedIn : boolean, isLoading? : boolean, refreshToken: string | undefined}

const initialState: Partial<AuthSliceState> = {};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}: {email?: string, password?: string}) => {
        let response = await LoginService({email, password});

        return response;
    }
)

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    logout: () => {
        // remove the token and refreshToken
        removeCookies([AUTH_TOKEN, AUTH_REFRESH_TOKEN]);
        return initialState;
    },
    expireToken: (state, action: PayloadAction<string[]>) => {
        expireCookies(action.payload);
        const token = getAuthCookie(AUTH_TOKEN);
        const refreshToken = getAuthCookie(AUTH_REFRESH_TOKEN);

        state.token = token;
        state.refreshToken = refreshToken;
    },
    },
    extraReducers: (builder) => {
    builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
            console.log('pending');
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            // state.user = action.payload ;
            // state.isLoading = false;
            // // set the token and refreshToken
            // setAuthCookie(payload.token, AUTH_TOKEN);
            // setAuthCookie(payload.refreshToken, AUTH_REFRESH_TOKEN);

            // return payload;
        })
        .addCase(login.rejected, (state, { payload }) => {
            console.log('rejected');
            // state.error = action.error;
            // state.isLoggedIn = false;
        })
        // .addMatcher(
        // authApi.endpoints.getAuthData.matchFulfilled,
        // (_state, { payload }) => {
        //     setAuthCookie(payload.token, AUTH_TOKEN);
        //     setAuthCookie(payload.refreshToken, AUTH_REFRESH_TOKEN);

        //     return payload;
        // });
    },
});

export const authReducer = slice.reducer;
export const { logout, expireToken } = slice.actions;