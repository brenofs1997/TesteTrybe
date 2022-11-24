import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

export const Content = styled.div`
  width: 190px;
  max-width: 1216px;
  align-items: center;
  justify-content: center;

.saldo-container{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.saldo-content{

  font-size: 30px;
  font-weight: bold;
  border: 4px solid black;
  border-radius: 15px;
  height: 100px;
  width: fit-content;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  display:flex;
  padding: 1rem;

  .span{
    align-items: center;
    text-align: center;
  }
}
.saldo-buttons{
  margin-top:12px;
  align-items: center;
  justify-content: center;
  display:flex;
  width:100%;

}
button {
  /* Variables */
  border: 2px solid black;
  margin: 20px 40px;
  padding: 10px 20px;
  border-radius: 500px;

  background-color: white;
  color: black;
  font-weight: 700;
}

.button_top {


}

button:hover .button_top {
  /* Pull the button upwards when hovered */

}

button:active .button_top {
  /* Push the button downwards when pressed */

}

`;
