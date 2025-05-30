import s from "../styles/Options.module.css";

const Options = ({ good, neutral, bad, updateFeedback, resetBTN }) => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.list_btn} onClick={() => updateFeedback("good")}>
          Good
        </li>
        <li className={s.list_btn} onClick={() => updateFeedback("neutral")}>
          Neutral
        </li>
        <li className={s.list_btn} onClick={() => updateFeedback("bad")}>
          Bad
        </li>
        {good + neutral + bad > 0 && (
          <li className={s.list_btn} onClick={resetBTN}>
            Reset
          </li>
        )}
      </ul>
    </div>
  );
};
export default Options;
