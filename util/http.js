import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-9316a-default-rtdb.europe-west1.firebasedatabase.app";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function fecthExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  // console.log("🪚 response.data:", response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      description: response.data[key].description,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
    };

    expenses.push(expenseObj);
  }

  return expenses;
}
