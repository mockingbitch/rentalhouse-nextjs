'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'

let persist = persistStore(store);

export function Providers({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <Provider store={store}>
            <PersistGate loading={ null } persistor={ persist }>
                {children}
            </PersistGate>
        </Provider>
    )
}