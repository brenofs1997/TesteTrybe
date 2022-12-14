import { Actions, InputBlock, ModalBody, Overlay } from "./styles";
import closeIcon from '../../assets/images/close-icon.svg';
import { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
}

export function TransferModal({ visible, onClose }: OrderModalProps) {
  const token = localStorage.getItem('token');
  const [usernamecredit, setUserNameCredit] = useState('');
  const [balance, setBalance] = useState(0);
  const localUsername = localStorage.getItem('username');
  const userAccountId = localStorage.getItem('accountId');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let oldBalance = 0;

    await api.get(`searchbalance/${userAccountId}`, config)
      .then((resp) => {
        oldBalance = resp.data
      }).catch(() => {
        toast.error('Internal server error');
      })

    if (usernamecredit == localUsername) {
      toast.error('Você não pode transferir para si mesmo');
    }
    else if (balance > oldBalance) {
      toast.error('Saldo insuficiente');
    } else {
      await api.put('transferbalance', { userNameCredit: usernamecredit, userNameDebit: localUsername, balanceValue: balance }, config)
        .then(() => {
          toast.success('Transferencia Realizada com Successo');
          window.location.reload();
          onClose();
        }).catch(() => {
          toast.error('Erro na Transferencia!');
        })
    }
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong></strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <h1>Transferencia de Saldo</h1>
          <hr />
          <InputBlock>
            <label htmlFor="userNameCredit">USERNAME</label>
            <input id="userNameCredit"
              value={usernamecredit}
              onChange={event => setUserNameCredit(event.target.value)}
            />

          </InputBlock>
          <InputBlock>
            <label htmlFor="balance">VALOR</label>
            <input id="balance"
              value={balance}
              onChange={event => setBalance(Number(event.target.value))}
            />
          </InputBlock>
          <Actions >
            <button type="submit" className="primary">
              <strong>Transferir</strong>
            </button>
          </Actions>
        </form>

      </ModalBody>
    </Overlay>
  )
}
