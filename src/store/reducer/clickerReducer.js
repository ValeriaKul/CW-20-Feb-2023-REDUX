/* 
{
    type: 'INCREMENT',
    payload: 100
} 
*/
export const SUM = "SUM";
export const MINUS = "MINUS";
export const INCREMENT = "INCREMENT";

export const sumAction = (payload) => {
  return {
    type: SUM,
    payload: +payload,
  };
};
export const minusAction = (payload) => {
  return {
    type: MINUS,
    payload: +payload,
  };
};


export const clickerReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "CLEAR") {
    return 0;
  } else if (action.type === SUM) {
    return state + action.payload;
  } else if (action.type === MINUS) {
    return state - action.payload;
  } else {
    return state;
  }
};
