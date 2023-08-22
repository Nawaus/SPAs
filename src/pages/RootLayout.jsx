import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>Main layout</p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <p>Made by React Router Dom</p>
      </footer>
    </>
  );
}
