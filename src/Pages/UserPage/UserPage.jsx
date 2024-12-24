import { useDispatch, useSelector } from "react-redux";
import style from "./UserPage.module.css";
import { useNavigate } from "react-router-dom";
import { logoutUserThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export default function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleClick = (values, actions) => {
    dispatch(logoutUserThunk(values))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
    actions.resetForm();
  };
  return (
    <main className={style.main}>
      <p> user: {user.email}</p>
      <button onClick={handleClick}>loosdfasdfsadut</button>
    </main>
  );
}
