import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm( { submitButtonLabel, onCancel, onSubmit, defaultValues } ) {
  // const [amountValue, setAmountValue] = useState("");
  const [ inputValues, setInputValues ] = useState( {
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate( defaultValues.date ) : "",
    description: defaultValues ? defaultValues.description : "",
  } );
  // ______________________________________________________________________
  function inputChangeHandler( inputIdentifier, enteredValue ) {
    setInputValues( ( currentInputValues ) => {
      return {
        ...currentInputValues,
        [ inputIdentifier ]: enteredValue,
      };
    } );
  }

  // ______________________________________________________________________
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date( inputValues.date ),
      description: inputValues.description,
    };

    onSubmit( expenseData );
  }

  // ______________________________________________________________________
  return (
    <View style={ styles.form }>
      <Text style={ styles.title }>Your Expense</Text>
      <View style={ styles.inputRow }>
        <Input
          style={ styles.rowInput }
          label="Amount"
          textInputConfig={ {
            inputMode: "numeric",
            // KeyboardType: "numeric",
            onChangeText: inputChangeHandler.bind( this, "amount" ),
            value: inputValues.amount,
          } }
        />
        <Input
          style={ styles.rowInput }
          label="Date"
          textInputConfig={ {
            inputMode: "numeric",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind( this, "date" ),
            value: inputValues.date,
          } }
        />
      </View>
      <Input
        label="Description"
        textInputConfig={ {
          multiline: true,
          onChangeText: inputChangeHandler.bind( this, "description" ),
          value: inputValues.description,
        } }
      />
      <View style={ styles.buttons }>
        <Button style={ styles.button } mode="flat" onPress={ onCancel }>
          Cancel
        </Button>
        <Button style={ styles.button } onPress={ submitHandler }>
          { submitButtonLabel }
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

// ______________________________________________________________________
const styles = StyleSheet.create( {
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
} );
