

const FilterReducer = (filterState, action) => {
    switch (action.type) {
        case "SORT_LIST":
            return {...filterState, sortOrder: action.payload, selectedFilters: {...filterState.selectedFilters, priceOrder: action.payload}}
        
        case "RATING_ORDER":
            return {...filterState, ratingOrder: action.payload, selectedFilters: {...filterState.selectedFilters, ratingOrder: action.payload}}
    
        case "CATEGORY":
            if(filterState.categories.includes(action.payload)){
                var updatedCategories = filterState.categories.filter(category=>category !== action.payload)
                return {...filterState, categories: updatedCategories, selectedFilters: {...filterState.selectedFilters, categories: filterState.selectedFilters.categories.filter(element=> element !== action.payload) }}
            }
            else{
                return {...filterState, categories: [...filterState.categories, action.payload], selectedFilters: {...filterState.selectedFilters, categories: [...filterState.selectedFilters.categories, action.payload]}}
            }

        case "CATEGORY_HOMEPAGE":
            return {...filterState, categories:  [action.payload], selectedFilters: {...filterState.selectedFilters, categories: [ action.payload]}}

        case "CLEAR_FILTERS":
            return {...filterState, sortOrder:null, ratingOrder:null, categories: [], selectedFilters: {categories: [], ratingOrder: "", priceOrder: ""}}

        default:
            return filterState;
    }
}



export { FilterReducer}