import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginService} from '@/services/auth-service';
import {
    AUTH_REFRESH_TOKEN,
    AUTH_TOKEN,
    expireCookies,
    getAuthCookie,
    removeCookies,
    setAuthCookie,
} from '@/lib/cookies';

type AuthSliceState = {
    token?: string | null,
    isLoggedIn : boolean,
    isLoading? : boolean,
    error: object | null,
    refreshToken: string | null
}

// const initialState: Partial<AuthSliceState> = {};
const initialState = {
    token: '',
    isLoggedIn: false,
    isLoading: false,
    error: {},
    refreshToken: ''
};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}: {email?: string, password?: string}, { rejectWithValue }) => {
        try {
            return await LoginService({email, password});
        } catch (err: unknown) {
            // if (!err?.response) {
            //     throw err
            // }
            // throw rejectWithValue(err.response)
        }
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
            // expireCookies(action.payload);
            // const token = getAuthCookie(AUTH_TOKEN);
            // const refreshToken = getAuthCookie(AUTH_REFRESH_TOKEN);
            //
            // state.token = token;
            // state.refreshToken = refreshToken;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isLoggedIn = false;
                console.log('pending')
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.token = payload?.data?.token;
                state.isLoading = false;
                state.isLoggedIn = true;
                // set the token and refreshToken
                setAuthCookie(payload?.data?.token, AUTH_TOKEN);
                // setAuthCookie(payload?.token, AUTH_REFRESH_TOKEN);
            })
            .addCase(login.rejected, (state, action) => {
                console.log('rejected');
                console.log(action.error)
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