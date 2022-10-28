import { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(1);
  const handleChange = (e) => {
    select(+e.target.value);
    setSelected(+e.target.value);
  };

  useEffect(() => {
    if (feedbackEdit.edit == true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value="1"
          onChange={handleChange}
          checked={selected == 1}
        />
        <label htmlFor="num1">1</label>
      </li>

      <li>
        <input
          type="radio"
          name="rating"
          value="2"
          id="num2"
          onChange={handleChange}
          checked={selected == 2}
        />
        <label htmlFor="num2">2</label>
      </li>

      <li>
        <input
          type="radio"
          name="rating"
          value="3"
          id="num3"
          onChange={handleChange}
          checked={selected == 3}
        />
        <label htmlFor="num3">3</label>
      </li>

      <li>
        <input
          type="radio"
          name="rating"
          value="4"
          id="num4"
          onChange={handleChange}
          checked={selected == 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          onChange={handleChange}
          checked={selected == 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num6"
          value="6"
          onChange={handleChange}
          checked={selected == 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num7"
          value="7"
          onChange={handleChange}
          checked={selected == 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num8"
          value="8"
          onChange={handleChange}
          checked={selected == 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num9"
          value="9"
          onChange={handleChange}
          checked={selected == 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num10"
          onChange={handleChange}
          checked={selected == 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
