import css from "./tips.module.css";

function Tips({tips}){
    return(
    <div>
        <ul className={css.list}>
        {tips.map((item, index) => (
          <li className={css.item} key={item.index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default Tips;