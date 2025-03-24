import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"


export default function ContactList({ users, onDelete}) {
  return (
    <>
      <ul className={css.list}>
        {users.map((user) => (
          <li className={css.item} key={user.id}>
            <Contact data={user} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}