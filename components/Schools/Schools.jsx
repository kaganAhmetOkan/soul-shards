import style from "./Schools.module.css";
import School from "../School/School";
import iconPurple from "@/public/purple.png";
import iconBlack from "@/public/black.png";
import iconGreen from "@/public/green.png";
import iconGrey from "@/public/grey.png";
import iconRed from "@/public/red.png";
import iconWhite from "@/public/white.png";


export default function Schools() {
  const icons = [
    {
      name: "purple",
      img: iconPurple,
    },
    {
      name: "black",
      img: iconBlack,
    },
    {
      name: "green",
      img: iconGreen,
    },
    {
      name: "grey",
      img: iconGrey,
    },
    {
      name: "red",
      img: iconRed,
    },
    {
      name: "white",
      img: iconWhite,
    },    
  ];
  
  return (
    <div className={style.main}>
      {icons.map(icon => <School icon={icon.img} key={icon.name} href={`/spell-schools/${icon.name}`} name={icon.name}>{icon.name}</School>)}
    </div>
  );
};