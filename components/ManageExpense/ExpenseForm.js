import { View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() { }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          KeyboardType: "decimal-pad",
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
