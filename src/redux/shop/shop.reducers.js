import { SHOP_DATA } from './shopData.js';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducers;