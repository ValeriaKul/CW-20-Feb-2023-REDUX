import React from "react";
import { useDispatch } from "react-redux";
import { minusAction } from "../../store/reducer/clickerReducer";

//* Добавить компонент MinuseForm, который содержит форму с полем ввода. При отправке формы число из поля вычитается из state

export default function MinusForm() {
  const dispatch = useDispatch();
  const submit = (event) => {
    event.preventDefault();
    const { number } = event.target;
    //* dispatch({ type: "MINUS", payload: +number.value });
    dispatch(minusAction(number.value))
    number.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input type="number" name="number" />
      <button>minus</button>
    </form>
  );
}
