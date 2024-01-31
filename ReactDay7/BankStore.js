import { legacy_createStore as createStore } from "redux";

// Reducer Function
const bankReducer = (state, action) => {
  let updatedState = {};
  switch (action.type) {
    case "CREATE":
      updatedState.balance = 500;
      break;
    case "DEPOSIT":
      updatedState.balance = state.balance + parseFloat(action.amount);
      break;
    case "WITHDRAW":
      if (state.balance - action.amount >= 500) {
        if (state.balance < parseFloat(action.amount)) {
          alert("Insufficient Balance");
          updatedState.balance = state.balance;
        } else {
          updatedState.balance = state.balance - parseFloat(action.amount);
        }
      } else {
        updatedState.balance = state.balance;
        alert("Your Account should maintain a minimum balance of $500");
      }
      break;
    default:
      updatedState = state;
  }
  return updatedState;
};

// Create Store
const bankStore = createStore(bankReducer);
export default bankStore;
