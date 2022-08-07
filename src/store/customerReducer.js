const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_MANY_CUSTOMER:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload.id)}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})