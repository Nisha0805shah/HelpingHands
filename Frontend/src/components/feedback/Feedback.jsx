import { useState } from "react";
import './feedback.css';
import TopBar from '../topbar/Topbar'
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#A9A9A9",
  lightcorol: "#f08080",
  white:"#FFFFFF"
};

export default function Feedback() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <>
      <TopBar />
      <div className="feedbackmain">
        <div className="feedback">
        <h2> Service Ratings </h2>
        <div className="stars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={30}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.lightcorol : colors.white}
                className="star-size"
              />
            )
          })}
        </div>
        <textarea
          placeholder="What's your experience?"
          className="textareafeedback"
        />
        <br></br>
        <button className="feedbackbutton">Submit</button>

      </div>
      </div>
    </>
  );
};