import { configureStore } from "@reduxjs/toolkit";
import addonCategoryReducer from "./slices/addonCategorySlice";
import addonReducer from "./slices/addonSlice";
import appReducer from "./slices/appSlice";
import cartReducer from "./slices/cartSlice";
import disabledLocationMenuCategoryReducer from "./slices/disabledLocationMenuCategorySlice";
import disabledLocationMenuReducer from "./slices/disabledLocationMenuSlice";
import locationReducer from "./slices/locationSlice";
import menuAddonCategoryReducer from "./slices/menuAddonCategorySlice";
import menuCategoryMenuReducer from "./slices/menuCategoryMenuSlice";
import menuCategoryReducer from "./slices/menuCategorySlice";
import menuReducer from "./slices/menuSlice";
import orderReducer from "./slices/orderSlice";
import tableReducer from "./slices/tableSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    app: appReducer,
    menuCategory: menuCategoryReducer,
    menuCategoryMenu: menuCategoryMenuReducer,
    addonCatrgory: addonCategoryReducer,
    menuAddonCategory: menuAddonCategoryReducer,
    addon: addonReducer,
    location: locationReducer,
    table: tableReducer,
    disabledLocationMenuCategory: disabledLocationMenuCategoryReducer,
    disabledLocationMenu: disabledLocationMenuReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;