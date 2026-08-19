
const Navbar = ({onMenuClick}) => {
  return (
    <nav className="flex items-center justify-between bg-amber-800 text-2xl text-blue-50 px-6 py-3">
        <button onClick={onMenuClick} className="md:hidden" >☰</button>
        <div>WorkBoard</div>
        <div>username</div>
    </nav>
  )
}

export default Navbar;
