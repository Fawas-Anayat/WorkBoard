import { NavLink } from "react-router-dom"

const Sidebar = ({isOpen , onClose}) => {
  const NavLinkClass = ({isActive}) => isActive ? "bg-amber-900 px-4 py-2" : "px-4 py-2 hover:bg-blue-600"


  return (
    <aside className={`flex flex-col
  fixed left-0 top-0 z-50 h-full w-64
  bg-blue-700 text-2xl text-white
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  md:static md:translate-x-0`}>
      <button onClick={onClose} className="md:hidden">X</button>
      <NavLink
        to="/dashboard"
        className={NavLinkClass}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/projects"
        className={NavLinkClass}
      >
        Projects
      </NavLink>

      <NavLink
        to="/tasks"
        className={NavLinkClass}
      >
        Tasks
      </NavLink>

      <NavLink
        to="/notifications"
        className={NavLinkClass}
      >
        Notifications
      </NavLink>

      <NavLink
        to="/team"
        className={NavLinkClass}>
        Team
      </NavLink>

      <NavLink
        to="/settings"
        className={NavLinkClass}>
        Settings
      </NavLink>
    </aside>
  )
}

export default Sidebar