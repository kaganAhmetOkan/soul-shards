import style from "./Shards.module.css";
import Shard from "../Shard/Shard";

export default function Shards() {
  const shards = ["purple", "black", "green", "white", "red", "grey"]

  return (
    <div className={style.main}>
      {shards.map(shard => {
        return (
          <Shard 
            icon={`/images/${shard}.png`} 
            key={shard} 
            href={`/shards/${shard}`} 
            name={shard}
          >
            {shard}
          </Shard>
        )
      })}
    </div>
  );
};