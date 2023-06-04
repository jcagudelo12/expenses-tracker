import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpensesChart() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage =
    totalIncome !== 0 ? Math.round((totalExpenses / totalIncome) * 100) : 0;
  const totalImcomePercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={["#e74c13", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "Ingresos", y: totalImcomePercentage },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y} %`}
      labelComponent={
        <VictoryLabel
          angle={0}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpensesChart;
