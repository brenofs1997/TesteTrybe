import { useEffect, useState } from "react";
import api from "../../services/api";
import "react-datepicker/dist/react-datepicker.css";
import { ModalBody } from "./styles";
import { formactCurrency } from "../../utils/formatCurrency";

interface transaction {
  id: string,
  value: number;
  createdAt: Date;
  debitedAccountId: string,
  creditedAccountId: string

}

interface Props {
  datafilter: Date;
}

export function TableTransaction({ datafilter }: Props) {

  let userAccountId = localStorage.getItem('accountId');
  const token = localStorage.getItem('token');
  const [transactionType, setTransactionType] = useState('');
  const [transaction, setTransaction] = useState<transaction[]>([]);

  function handleFilter() {

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.get(`/findtransactionsbyfilter?accountId=${userAccountId}&dateFilter=${new Date(datafilter).toLocaleDateString('zh-Hans-CN')}&transactionType=${transactionType}`, config)
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
    <>
      <ModalBody>
        <div >
          <h2 className="transfer-title">Transações</h2>
          <div className="transfer-radio">
            <div>
              <input type="radio" onChange={(type: React.FormEvent<HTMLInputElement>) => setTransactionType(type.currentTarget.value)} id="cash-in" name="contact" value="cash-in" />
              <label >Cash-in</label>
            </div>
            <div>
              <input type="radio" onChange={(type: React.FormEvent<HTMLInputElement>) => setTransactionType(type.currentTarget.value)} id="cash-out" name="contact" value="cash-out" />
              <label >Cash-out</label>
            </div>
          </div>
          <div className="buttonContainer">

            <button onClick={handleFilter} type="button" className="button_top">Filtrar</button>

            <button onClick={handleAll} type="button" className="button_top">Listar Todas</button>
          </div>
          <table className="transfer-table">
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
                        <td style={{ color: 'red' }}>  -{formactCurrency(transaction.value)}</td> :
                        <td>{formactCurrency(transaction.value)}</td>
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </ModalBody>
    </>
  )
}
