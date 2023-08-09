import style from "./Schools.module.css";
import School from "../School/School";

export default function Schools() {
  const shards = ["purple", "black", "green", "white", "red", "grey"]

  return (
    <div className={style.main}>
      {shards.map(shard => {
        return (
          <School 
            icon={`/${shard}.png`} 
            key={shard} 
            href={`/spell-schools/${shard}`} 
            name={shard}
          >
            {shard}
          </School>
        )
      })}
    </div>
  );
};