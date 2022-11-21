import { useCallback, useEffect, useState } from 'react';
import { Container, Content } from './styles';
import api from '../../services/api';
import { TransferModal } from '../TransferModal';
import { TableTransaction } from '../tableTransaction';

interface User {
  id: string,
  username: string,
  createdAt: Date,
  accountId: string,
}

interface Account {
  id: string,
  balance: number,
}

export function HomeLogged() {
  const token = localStorage.getItem('token');
  let username = localStorage.getItem('username');
  let userAccountId = localStorage.getItem('accountId');
  const [account, setAccount] = useState<Account>();

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
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
            <span>R$ {account?.balance}</span>
          </div>

          <div className="saldo-buttons">
            <button type="button" onClick={handleOpenModal}>
              <span className="button_top" > Transferir
              </span>
            </button>
          </div>
        </div>
        <TableTransaction/>


      </Content>
    </Container>

  );
}

