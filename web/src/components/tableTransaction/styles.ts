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
.dsmeta-card {
  background-color: #283142;
  border-radius: 10px;
  padding: 30px 10px;
}

.dsmeta-sales-title {
  color: #676fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.dsmeta-form-control-container {
  margin-bottom: 16px;
  max-width: 300px;
}

.dsmeta-form-control {
  width: 100%;
  height: 46px;
  background-color: #1b2531;
  border: 1px solid #384459;
  border-radius: 5px;
  color: #9aaabe;
  padding: 0 20px;
  font-size: 18px;
}

.dsmeta-sales-table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}

.dsmeta-sales-table thead {
  height: 55px;
  font-size: 16px;
  color: #e9e9e9;
  font-weight: 700;
}

.dsmeta-sales-table tbody {
  font-size: 14px;
  font-weight: 400;
  color: #cfcfcf;
  text-align: center;
}

.dsmeta-sales-table tbody tr {
  height: 74px;
  border-top: 1px solid #5f6e82;
}

.dsmeta-sales-table tbody tr:hover>td {
  background-color: #384459;
}

.dsmeta-sales-table tbody tr:nth-child(odd) {
  background-color: #242c3b;
}

.dsmeta-red-btn-container {
  display: flex;
  justify-content: center;
}

.show576 {
  display: none;
}

.show992 {
  display: none;
}

@media (min-width: 576px) {
  .show576 {
      display: table-cell;
  }

  .dsmeta-card {
      padding: 35px;
  }

  .dsmeta-sales-table tbody tr {
      height: 55px;
  }

  .dsmeta-sales-table tbody {
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

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item{
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }

  }
  button {
  /* Variables */
 --button_radius: 0.75em;
 --button_color: #fcfcfc;
 --button_outline_color: #000000;

 font-size: 17px;
 margin:12px;
 font-weight: bold;
 border: none;
 border-radius: var(--button_radius);
 background: var(--button_outline_color);
}

.button_top {

 box-sizing: border-box;

 border: 2px solid var(--button_outline_color);
 border-radius: var(--button_radius);
 padding: 0.75em 1.5em;
 background: var(--button_color);
 color: var(--button_outline_color);
 transform: translateY(-0.2em);
 transition: transform 0.1s ease;
}

button:hover .button_top {
  /* Pull the button upwards when hovered */
 transform: translateY(-0.33em);
}

button:active .button_top {
  /* Push the button downwards when pressed */
 transform: translateY(0);
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

  .secondary {
    padding: 14px 24px;
    color: #D73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 12px;
  }
`;

export const InputBlock = styled.div`
font-size: 14px;
      letter-spacing: -.24px;
      border: solid 1px #eee;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 18px 11px;
      border-radius: 5px;
      width: 100%;
      color: #666;
      -webkit-appearance: none;
`;
