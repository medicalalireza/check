import { useState } from "react";
import "./Config.css";
const Config = () => {
  const [currentState, setState] = useState(0);
  const [copy, setCopy] = useState("");
  const data = [
    {
      id: 1,
      body: ``,
    },
  ];

  const handleClick = (entity: number) => {
    const selectedData = data.find((item) => item.id === entity);
    if (selectedData) {
      navigator.clipboard.writeText(selectedData.body);
      setCopy(selectedData.body);
      setState(entity);
    }
  };

  return (
    <div className="container">
      {data.map((item) => (
        <button
          key={item.id}
          className={item.id === currentState ? "btn selected" : "btn"}
          onClick={() => handleClick(item.id)}
        >
          افزودن کلید
        </button>
      ))}

      <div>
        <h2 className="box">متن کپی شده</h2>
        <p>{copy}</p>
      </div>
    </div>
  );
};

export default Config;
