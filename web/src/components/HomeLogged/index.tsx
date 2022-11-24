import { useCallback, useEffect, useState } from 'react';
import { Container, Content } from './styles';
import api from '../../services/api';
import { TransferModal } from '../TransferModal';
import { TableTransaction } from '../tableTransaction';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { formactCurrency } from '../../utils/formatCurrency';

interface User {
  id: string,
  username: string,
  createdAt: Date,
  accountId: string,
}

interface Account {
  id: string,
  balance: number | 0,
}

export function HomeLogged() {
  const token = localStorage.getItem('token');
  let username = localStorage.getItem('username');
  let userAccountId = localStorage.getItem('accountId');
  const [account, setAccount] = useState<Account | any>();

  const min = new Date(new Date().setDate(new Date().getDate()));


  const [minDate, setMinDate] = useState(min);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [dataVisible, setdataVisible] = useState(true);

  function handleOpenModal() {
    setIsModalVisible(true);
    setdataVisible(false);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setdataVisible(true);
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };


  useEffect(() => {
    api.get(`users/${userAccountId}/account`, config)
      .then(res => {
        setAccount(res.data);
      })
  }, []);

  return (

    <Container>
      <Content>
        <TransferModal
          visible={isModalVisible}
          onClose={handleCloseModal}
        />

        <div className="saldo-container">
          <div className="saldo-content">
            <span>{formactCurrency(account?.balance)}</span>
          </div>

          <div className="saldo-buttons">
            <button type="button" onClick={handleOpenModal}>
              <span className="button_top" > Transferir
              </span>
            </button>
          </div>
        </div>
        { dataVisible ? <DatePicker  dateFormat={"dd/MM/yyyy"} selected={minDate} onChange={(date: Date) => setMinDate(date)} />: null }

        <TableTransaction datafilter = {minDate}/>
      </Content>
    </Container>

  );
}

