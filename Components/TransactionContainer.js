import React, { createContext, useContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionContainer = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([
    { id: 1, name: 'Starbucks', place: 'Ottawa, ON', amount: '$15', date: '2024-04-01' },
    { id: 2, name: 'Apple Store', place: 'Mississauga, ON', amount: '$210', date: '2024-04-02' },
    { id: 3, name: 'Sephora', place: 'Saskatoon, SK', amount: '$65', date: '2024-04-03' },
    { id: 4, name: 'Shoppers Drug Mart', place: 'Regina, SK', amount: '$45', date: '2024-04-04' },
    { id: 5, name: 'Pizza Hut', place: 'Kitchener, ON', amount: '$30', date: '2024-04-05' },
    { id: 6, name: 'The Cheesecake Factory', place: 'St. Johns NL', amount: '$90', date: '2024-04-06' },
    { id: 7, name: 'Nike', place: 'Hamilton, ON', amount: '$120', date: '2024-04-07' },
    { id: 8, name: 'Tim Hortons', place: 'Lethbridge, AB', amount: '$10', date: '2024-04-08' },
    { id: 9, name: 'Whole Foods', place: 'Fredericton, NB', amount: '$55', date: '2024-04-09' },
    { id: 10, name: 'Cineplex', place: 'Whitehorse, YT', amount: '$25', date: '2024-04-10' }
  ]
  );

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};
