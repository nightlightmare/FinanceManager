import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface Category {
  id: number;
  name: string;
  parentCategory?: number;
}

export interface CategoryState {
  items: Category[];
}

/**
 * Default state object with initial values.
 */
const initialState: CategoryState = {
  items: [],
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (
      _state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.items>,
    ) => ({ items: action.payload }),
  },
});

// A small helper of categories state for `useSelector` function.
export const getCategoryState = (state: { category: CategoryState }) => state.category;

// Exports all actions
export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
