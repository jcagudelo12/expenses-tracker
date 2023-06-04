import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionForm() {
  const {addTransaction} = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id:1,
      description,
      amount
    });
    console.log(description, amount);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Ingrese una descripción"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="mount"
          id="mount"
          placeholder="00.00"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
