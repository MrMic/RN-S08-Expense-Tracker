import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-9316a-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData,
  );
}
