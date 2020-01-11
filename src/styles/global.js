import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, html, #root{
  min-height: 100%;
}

body{
  background: #7158c1;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

button {
  cursor: pointer;
}
`;
