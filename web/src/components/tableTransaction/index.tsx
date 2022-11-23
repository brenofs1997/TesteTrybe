import { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



interface transaction {
  id: string,
  value: number;
  createdAt: Date;
  debitedAccountId: string,
  creditedAccountId: string

}


export function TableTransaction() {

  let userAccountId = localStorage.getItem('accountId');

  const token = localStorage.getItem('token');
  const min = new Date(new Date().setDate(new Date().getDate()));
  const max = new Date();


  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);
  const [transactionType, setTransactionType] = useState('');

  const [transaction, setTransaction] = useState<transaction[]>([]);

  function handleFilter() {

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.get(`/findtransactionsbyfilter?accountId=${userAccountId}&dateFilter=${new Date(minDate).toLocaleDateString('zh-Hans-CN')}&transactionType=${transactionType}`, config)
      .then(response => {
        setTransaction(response.data)
      })
  }

  function handleAll() {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.get(`/transactions/${userAccountId}`, config)
      .then(response => {
        setTransaction(response.data)
      })
  }


  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.get(`/transactions/${userAccountId}`, config)
      .then(response => {
        setTransaction(response.data)
      })
  }, []);


  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Transações</h2>
      <div>
        <DatePicker dateFormat={"dd/MM/yyyy"} selected={minDate} onChange={(date: Date) => setMinDate(date)} />
        <div>
          <input type="radio" onChange={(type: React.FormEvent<HTMLInputElement>) => setTransactionType(type.currentTarget.value)} id="cash-in" name="contact" value="cash-in" />
          <label >Cash-in</label>

          <input type="radio" onChange={(type: React.FormEvent<HTMLInputElement>) => setTransactionType(type.currentTarget.value)} id="cash-out" name="contact" value="cash-out" />
          <label >Cash-out</label>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="button_top" onClick={handleFilter} type="button">Filtrar</button>
        <button className="button_top" onClick={handleAll} type="button">Listar Todas</button>
      </div>
      <table className="dsmeta-sales-table">
        <thead>
          <tr>
            <th className="show992">Data da Transferência</th>
            <th className="show576">Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            transaction.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td className="show576">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                  {transaction.debitedAccountId === userAccountId ?
                    <td style={{ color: 'red' }}> - R$ {Number(transaction.value).toFixed(2)}</td> :
                    <td>R$ {Number(transaction.value).toFixed(2)}</td>
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
  )
}
