import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import style from "./AppBar.module.css";
import clsx from "clsx";

const clsxHeader = clsx("container", style.header);

export default function AppBar() {
  return (
    <header className={clsxHeader}>
      <Logo />
      <Navigation />
    </header>
  );
}
