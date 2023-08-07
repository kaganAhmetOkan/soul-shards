import style from "./Hero.module.css";

export default function Hero({ children, color }) {
  return (
    <div data-color={color} className={style.main}>
      {children}
    </div>
  );
};