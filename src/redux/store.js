import { configureStore } from "@reduxjs/toolkit";
import activeItemMenuReducer from './reducers/activeItemMenuSlice';
import activeItemFilterReducer from './reducers/activeItemFilterSlice';
import sortedItemReducer from './reducers/sortedItemSlice' ;


export const store = configureStore({
    reducer: {
        activeItemMenu: activeItemMenuReducer,
        activeItemFilter: activeItemFilterReducer,
        sortedItem: sortedItemReducer,
    }
})



