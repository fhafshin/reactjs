import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
const RandomName = () => {
  const [str, setStr] = useState("");
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      axios.get("http://localhost:3001/").then((res) => {
        setIsloading(false);
        console.log(res);
        setStr(res.data);
      });
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className={styles.loading}>
          <svg className={styles.orange}>
            <g fill="none">
              <rect x="2" y="2" width="50" height="50" />
            </g>
          </svg>
          <svg className={styles.grey}>
            <g fill="none">
              <rect
                x="5"
                y="5"
                width="44"
                height="44"
                stroke="#ccc"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
      ) : (
        <div>{str}</div>
      )}
    </div>
  );
};

export default RandomName;
