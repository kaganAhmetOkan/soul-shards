import style from "./MenuButton.module.css";

export default function MenuButton({ isActive }) {
  return (
    <div id="menu-button" className={style.main} data-active={isActive}>
      <div id="menu-button-top" className={style.top}></div>
      <div id="menu-button-mid" className={style.mid}></div>
      <div id="menu-button-bot" className={style.bot}></div>
    </div>
  );
};