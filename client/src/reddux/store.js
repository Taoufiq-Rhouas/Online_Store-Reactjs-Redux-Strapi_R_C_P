import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

// -----------------
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        cart: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer
//     },
// })

export let persistor = persistStore(store)

// -----------------

// // S_Comment-1
// export const store = configureStore({
//     reducer: {
//         cart: cartReducer
//     },
// })
// // E_Comment-1