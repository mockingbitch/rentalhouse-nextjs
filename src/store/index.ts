import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/store/slices/auth-slice';

export const store = configureStore({
    reducer: {
        // regular reduces
        auth: authReducer,
        // rtks query api
        // [authApi.reducerPath]: authApi.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;