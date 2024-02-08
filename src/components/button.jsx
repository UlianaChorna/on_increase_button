export const Button = ({ multiplier, onIncrease }) => {
  return (
    <button onClick={() => onIncrease(multiplier)}>
      Increase by {multiplier}
    </button>
  );
};