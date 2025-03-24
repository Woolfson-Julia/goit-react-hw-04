import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({ data: {id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.user}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
