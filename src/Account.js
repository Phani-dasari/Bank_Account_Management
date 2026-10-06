import { useSelector } from "react-redux"
const Account = () => {
    let data12=useSelector((data11)=>{
        return data11

    })
    console.log(data12)
   
  return (
    <div className="container">
        <h1 className="text-primary">Account Details</h1>
        <table className="table table-bordered table-striped table-hover">
        <tr>
            <th>balance</th>
            <th>fullName</th>
            <th>mobile</th>
        </tr>
        <tr>
            <td>{data12.account.balance}</td>
            <td>{data12.account.fullName}</td>
            <td>{data12.account.mobile}</td>
        </tr>
        </table>
        <h1 className="text-primary">Transaction Details</h1>
        <table className="table table-bordered table-striped table-hover">
        <tr>
            <th>id</th>
            <th>amount</th>
            <th>type</th>
            <th>date</th>
        </tr>
        {data12.transaction.map((tr,index)=>(
            <tr key={index}>
                <td>{tr.id}</td>
                <td>{tr.amount}</td>
                <td>{tr.type}</td>
                <td>{tr.date.toString()}</td>

            </tr>
        ))}
        </table>
        
       
        
       
      
    </div>
    
    
  )
}

export default Account;
