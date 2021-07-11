import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  //Setting up Mirage database
  //Naming tables

  models: {
    transaction: Model,
  },


  //Saving initial data in api using seeds (optional)
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 10000,
          createdAt: new Date('2021-04-10 08:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 200,
          createdAt: new Date('2021-04-05 08:00:00'),
        }
      ]
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      // return[
      //   {
      //     id: 1,
      //     title: 'Transaction 1',
      //     amount: 400,
      //     type: 'deposit',
      //     category: 'food',
      //     createdAt: new Date()
      //   }
      // ]

      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
