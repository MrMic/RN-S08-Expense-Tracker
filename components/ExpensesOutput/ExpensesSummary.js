import { Text, View } from "react-native";

function ExpensesSummary() {
  return (
    <View>
      <Text>{expensesPeriod}</Text>
      <Text>{expenses.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
