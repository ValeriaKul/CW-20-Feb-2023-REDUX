import React from "react";
import { useDispatch } from "react-redux";
import { sumAction } from "../../store/reducer/clickerReducer";

//* добавить компонент AddForm
//* данный компонент содержит форму с полем ввода и кнопкой. При отправке формы, число в store должно увеличиваться на указанное число в поле ввода.

export default function AddForm() {

  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const { number } = event.target;
    //* dispatch({ type: SUM, payload: +number.value });
    dispatch(sumAction(number.value))
    number.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input type="number" name="number"  />
      <button>plus</button>
    </form>
  );
}
