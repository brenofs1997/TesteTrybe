import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

export const Content = styled.header`
  width: 150px;
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
