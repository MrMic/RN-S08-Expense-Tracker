import { View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  // ______________________________________________________________________
  function amountChangeHandler() { }

  // ______________________________________________________________________
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          inputMode: "numeric",
          // KeyboardType: "numeric",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => { },
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: () => { },
        }}
      />
    </View>
  );
}

export default ExpenseForm;
