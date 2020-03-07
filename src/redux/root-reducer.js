import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/user.reducer.js';
import { cartReducer } from './cart/cart.reducer.js';
import directoryReducer from './directory/directory.reducers.js';
import shopReducers from './shop/shop.reducers.js';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducers
});

export default persistReducer(persistConfig, rootReducer);

