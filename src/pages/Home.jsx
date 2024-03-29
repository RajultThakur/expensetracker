import React from 'react'
import ExpenseCard from '../components/cards'
import { useState } from 'react'
import TransactionList from '../components/list/Transaction';
import Chart from '../components/chart';

export default function Home() {
    const [items, setItems] = useState([
      {
        title : "Samosa",
        price : 30,
        date : "March 11, 2024",
        type : "food"
      },
      {
        title : "Movie",
        price : 300,
        date : "March 14, 2024",
        type : "entertainment"
      },
      {
        title : "Auto",
        price : 200,
        date : "March 26, 2024",
        type : "travel"
      },
      {
        title : "Burger",
        price : 290,
        date : "March 13, 2024",
        type : "food"
      },
      {
        title : "Ola",
        price : 210,
        date : "March 14, 2024",
        type : "travel"
      },
      {
        title : "Game Zone",
        price : 200,
        date : "March 26, 2024",
        type : "entertainment"
      },

    ])
    const [income, setIncome] = useState(4500);
    const [expense, setExpense] = useState(0)

    const addIncome = (balance) => {
      localStorage.setItem("income",income + balance);
      setIncome((prev) => {
        prev + balance;
      })
    }

    const addExpense = (balance) => {
      localStorage.setItem("income",expense + balance);
      setExpense((prev) => {
        prev + balance;
      })
    }

  return (
    <div className='w-screen h-screen bg-gray-700 flex flex-col p-3 px-4 gap-3'>
        {/* expense card */}
        <div className='flex justify-between gap-3 items-center h-max' >
            <ExpenseCard title="Wallet Balance" balance={4500} buttonName="Income" changeBalance = {addIncome}/>
            <ExpenseCard title="Expenses" balance={4500} buttonName="Expense" changeBalance={addExpense}/>
            <Chart/>
        </div>
        {/* transactions */}
        <div className='flex-1 flex items-center justify-between gap-2'>

          <div className='transaction bg-white h-[350px] overflow-y-scroll rounded-xl w-[60%]'>
            {items.map((item, idx) => {
              return (
                <TransactionList key={idx} title={item.title} price={item.price} date = {item.date} type={item.type} />
              )
            })}
          </div>
          <div className='bg-white flex-1 h-[350px] rounded-xl p-2 flex flex-col gap-2'>
most expenses
<progress></progress>
<progress></progress>
<progress></progress>
          </div>

        </div>
    </div>
  )
}
