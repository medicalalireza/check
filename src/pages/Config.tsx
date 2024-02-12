import { useState } from "react";
import "./Config.css";

const Config = () => {
  const [currentState, setState] = useState(0);
  const [copy, setCopy] = useState("");
  const data = [
    {
      id: 1,
      body: `vless://558e7fe9-3f07-43b6-90a8-eff5d68c1d2a@tun-germany-10.hennessypro-supra.site:8093?type=tcp&path=%2F&host=upload.com&headerType=http#علیرضا-6721695`,
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
