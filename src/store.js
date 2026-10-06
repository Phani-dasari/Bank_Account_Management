import { createStore } from "redux"
import { combineReducers } from "redux"
const initialstate=
{
    balance:0,
    fullName:"",
    mobile:null,
}
 function reducer(state=initialstate,action)
{
    switch(action.type)
    {
        case "depoist":
            {
                return { ...state, balance:state.balance + +action.payload}
            }
        case "withdrawl":

            {
                return {...state, balance:state.balance - +action.payload}
            }
        case "nameupdate":
            {
                return { ...state, fullName:action.payload}
            }
        case "mobileupdate":
            {
                return { ...state, mobile: action.payload}
            }
        case "reset":
            {
                return initialstate
            }
        default:
            {
                return state
            }


    }

}
function transactionReducer(state=[],action)
{
    switch(action.type){
        case "ADD_TRANSACTION":
            {
                return [...state,{amount:action.payload.amount, type:action.payload.type,date:action.payload.date,id:action.payload.id}]
            }
        default:
            {
                return state
            }
    }

}
 let rootReducer=combineReducers(
    {
        account:reducer,
        transaction:transactionReducer
    }
)


 var store=createStore(rootReducer)
 
 export  default store;