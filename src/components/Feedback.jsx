import s from "../styles/Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <div>
      {totalFeedback > 0 ? (
        <ul className={s.list}>
          <li className={s.list_item}>Good : {good}</li>
          <li className={s.list_item}>Neutral: {neutral}</li>
          <li className={s.list_item}>Bad : {bad}</li>
          {totalFeedback > 0 && (
            <li className={s.list_item}>Total: {totalFeedback}</li>
          )}
          {good + neutral + bad > 0 && (
            <li className={s.list_item}>
              Positive: {Math.round((good / totalFeedback) * 100)}{" "}
            </li>
          )}
        </ul>
      ) : (
        "no feedback yet"
      )}
    </div>
  );
};

export default Feedback;
