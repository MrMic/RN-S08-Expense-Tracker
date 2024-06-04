import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-9316a-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  // console.log("🪚 response.data:", response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
