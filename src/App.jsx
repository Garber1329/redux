import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type:"GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer))
    }

    return (
        <div className="App">
          <div style={{fontSize:"3rem"}}>{cash}</div>
          <div style={{display:"flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Поповнити рахунок</button>
                <button onClick={() => getCash(Number(prompt()))}>Зняти з рахунка</button>
              <button onClick={() => addCustomer(prompt())}>Добаваити клієнта</button>
              <button onClick={() => dispatch(fetchCustomers())}>Получити клієнтів з бази</button>
          </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop: 5}}>
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div style={{fontSize: "2rem", marginTop:20}}>
                    Клієнти відсутні
                </div>
            }
        </div>
    );
}

export default App;
