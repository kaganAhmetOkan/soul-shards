import style from "./Navbar.module.css";
import MenuButton from "../MenuButton/MenuButton";

export default function Navbar() {
  return (
    <div className={style.main}>
      <MenuButton />
    </div>
  );
};