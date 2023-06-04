import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount, //El + convierte a número el string que llegue como amount
    });
    setAmount(0);
    setDescription("");
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
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          name="mount"
          id="mount"
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Agregar Transacción
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
