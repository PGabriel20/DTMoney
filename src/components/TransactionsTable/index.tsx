import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className='deposit'>R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/07/2021</td>
          </tr>
          <tr>
            <td>Pizza Luna</td>
            <td className='withdraw'>- R$69,00</td>
            <td>Comida</td>
            <td>09/07/2021</td>
          </tr>
          <tr>
            <td>Freela</td>
            <td className='deposit'>R$500,00</td>
            <td>Desenvolvimento</td>
            <td>10/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}