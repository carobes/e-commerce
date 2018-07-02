import { RECEIVE_CATEGORIES, CATEGORIES_SELECTED } from '../constants';

const initialState = {
    categoriesList: [],
    selectedCategories: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, {categoriesList: action.categories});
        case CATEGORIES_SELECTED:
            return Object.assign({}, state, {selectedCategories: action.selectedCat})
        default:
            return state;
    }
}