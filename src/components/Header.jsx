import Logo from "./Logo"

const Header = () => {
  return (
    <div className="bg-[#D4EE26] p-5 flex items-center justify-between">
      <Logo />
      <div>
        <input type="text" placeholder="Search for projects" name="search" id="search" className="text-xl rounded-md p-1 px-3 outline-none"/>
      </div>
      <div>
        <ul className="flex items-center gap-8 font-semibold">
          <li>Home</li>
          <li>My Projects</li>
          <li>Profile</li>
        </ul>
      </div>
      <div>
        <button className="bg-black text-white p-2 rounded-md ">New Project</button>
      </div>
    </div>
  )
}

export default Header