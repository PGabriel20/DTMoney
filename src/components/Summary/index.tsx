import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary(){
  const { transactions } = useContext(TransactionsContext);

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if(transaction.type === 'deposit'){
  //     return acc + transaction.amount;
  //   }

  //   //acc is the start value
  //   return acc;
  // }, 0)

  const summary = transactions.reduce((acc, transaction)=>{

    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
    }
    else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>{summary.deposits}</strong>
      </div>      
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>- {summary.withdraws}</strong>  
      </div>      
      <div className='highLightBackground'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>{summary.total}</strong>  
      </div>      
    </Container>
  )
}