import { Link } from "react-router-dom";
import ROUTES from "../routes/router";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4">
      <ul>
        <li><Link to={ROUTES.HOME}>Dashboard</Link></li>
        <li><Link to={ROUTES.TASKS}>Tasks</Link></li>
        <li><Link to={ROUTES.LOGIN}>Login</Link></li>
      </ul>
    </aside>
  );
}
