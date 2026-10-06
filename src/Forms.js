import { useDispatch } from "react-redux"
import { useState } from "react"
import { depoist, mobileupdate, nameupdate, withdrawl,reset } from "./action"
const Forms = () => {
    let dispatch=useDispatch()
    const [amount, setAmount]=useState("")
    const [name, setName]=useState("")
    const [mobile, setMobile]=useState("")
    const [transactionid,setTransactionid]=useState(0)
  return (
    <div className="container">
        <h1 className="text-warning">Form</h1>
        <div className="row">
            <div className="col-md-10">
                <input
                type="number"
                placeholder="Enter Amount"
                className="form-control"
                value={amount}
                onChange={(e)=>{
                    var data=e.target.value;
                    setAmount(data)

                }}
                
                />
            </div>
            
            <button className="btn btn-primary" onClick={()=>{
                //dispatch({type:"depoist",payload:amount})
                dispatch(depoist(amount))
                setTransactionid(transactionid + 1)
                dispatch({type:"ADD_TRANSACTION",payload:{
                    id:transactionid,
                    amount:amount,
                    type:"credit",
                    date:new Date()
                }})
                setAmount("")
            }}>Depoist</button>
            <button className="btn btn-warning ml-3" onClick={()=>{
                //dispatch({type:"withdrawl",payload:amount})
                dispatch(withdrawl(amount))
                setTransactionid(transactionid + 1)
                dispatch({type:"ADD_TRANSACTION",payload:{
                    id:transactionid,
                    amount:amount,
                    type:"debut",
                    date:new Date()
                }})
                setAmount("")
            }}>Withdrawl</button>
            <div className="col-md-10 mt-3">
                <input
                type="text"
                placeholder="Enter fullName"
                className="form-control"
                value={name}
                onChange={(e)=>{
                    var data=e.target.value;
                    setName(data)

                }}
                
                />
            </div>
            <button className="btn btn-primary mt-3" onClick={()=>{
                //dispatch({type:"nameupdate",payload:name})
                dispatch(nameupdate(name))
                setName("")
            }}>Update</button>
            <div className="col-md-10 mt-3">
                <input
                type="number"
                placeholder="Enter Mobile Number"
                className="form-control"
                value={mobile}
                onChange={(e)=>{
                    var data=e.target.value;
                    setMobile(data)

                }}
                
                />
            </div>
             <button className="btn btn-primary mt-3" onClick={()=>{
                //dispatch({type:"mobileupdate",payload:mobile})
                dispatch(mobileupdate(mobile))
                setMobile("")
            }}>Update</button>


            
        </div>
        <button className="btn btn-warning mt-3" onClick={()=>{
            //dispatch({type:"reset"})
            dispatch(reset());
        }}>Reset</button>
        
        
      
    </div>
  )
}

export default Forms
