import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
.transfer-card {
  background-color: #283142;
  border-radius: 10px;
  padding: 30px 10px;
}

.transfer-title {
  color: black;
  font-size: 24px;
  margin: 20px;
}

.transfer-radio {
  display: flex;
  gap: 12px;
}

.transfer-form-control-container {
  margin-bottom: 16px;
  max-width: 300px;
}

.transfer-form-control {
  width: 100%;
  height: 46px;
  background-color: #1b2531;
  border: 1px solid #384459;
  border-radius: 5px;
  color: #9aaabe;
  padding: 0 20px;
  font-size: 18px;
}

.transfer-table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #384459;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.transfer-table thead {
  height: 55px;
  font-size: 16px;
  color: black;
  font-weight: 700;
}

.transfer-table tbody {
  font-size: 14px;
  font-weight: 400;
  color: #1b2531;
  text-align: center;
}

.transfer-table tbody tr {
  height: 74px;
  border-top: 1px solid #5f6e82;
}

.transfer-table tbody tr:hover>td {
  background-color: #9aaabe;
}

.transfer-table tbody tr:nth-child(odd) {
  background-color: white;
}

.transfer-red-btn-container {
  display: flex;
  justify-content: center;
}

.show576 {
  display: flex;
}

.show992 {
  display: flex;
}

@media (min-width: 576px) {
  .show576 {
      display: table-cell;
  }

  .transfer-card {
      padding: 35px;
  }

  .transfer-table tbody tr {
      height: 55px;
  }

  .transfer-table tbody {
      font-size: 18px;
  }
}

@media (min-width: 992px) {
  .show992 {
      display: table-cell;
  }
}
`;

export const OrderDetails = styled.div`
  margin-top: 32px;
  display: none;
  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  button {
    border: 2px solid black;
  margin: 20px 40px;
  padding: 10px 20px;
    display: none;
  border-radius: 500px;

  background-color: white;
  color: red;
  font-weight: 700;
}
.buttonContainer{


}
.button_top {
  border: 2px solid black;
  margin: 20px 40px;
  padding: 10px 20px;
  border-radius: 500px;

  background-color: white;
  color: black;
  font-weight: 700;

}

`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .primary {
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;
  }

`;

export const InputBlock = styled.div`
font-size: 14px;
      letter-spacing: -.24px;
      border: solid 1px #eee;
      box-sizing: border-box;
      padding: 18px 11px;
      border-radius: 5px;
      width: 100%;
      color: #666;
`;
