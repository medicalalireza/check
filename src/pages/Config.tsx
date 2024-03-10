import { useState } from "react";
import "./Config.css";
const Config = () => {
  const [currentState, setState] = useState(0);
  const [copy, setCopy] = useState("");
  const data = [
    {
      id: 1,
      body: `vless://09d9deb3-616d-4752-9c45-00347037d382@tun-germany-4.hennessypro-supra.com:8074?type=tcp&path=%2F&host=upload.com&headerType=http#علیرضا-5869015`,
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
