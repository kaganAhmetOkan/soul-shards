import style from "./Hero.module.css";

export default function Hero({ children }) {
  return (
    <div className={style.main}>
      {children}
    </div>
  );
};