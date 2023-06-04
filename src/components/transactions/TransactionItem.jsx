import { useGlobalState } from "../../context/GlobalState";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full justify-between items-center flex">
      <p className="text-lg">{transaction.description}</p>
      <span>${transaction.amount}</span>
      <button
        className="bg-red-700 text-white px-3 py-2 rounded-lg block mb-2"
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        <Icon css="icon" icon={faTrash} />
      </button>
    </li>
  );
}

export default TransactionItem;
