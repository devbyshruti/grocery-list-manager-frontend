import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import {
  Home,
  ShoppingCart,
  Package,
  LogOut,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const isActive = (path) =>
    location.pathname === path
      ? "text-green-600 after:w-full"
      : "text-gray-600 dark:text-gray-300 after:w-0";

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav className="border-b bg-white dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        
        <Link to="/" className="text-2xl font-bold">
          <span className="text-green-600">Smart</span>
          <span className="dark:text-white">Grocery</span>
        </Link>

        
        <div className="hidden md:flex items-center gap-8 relative">
          {[
            { path: "/", label: "Dashboard", icon: Home },
            { path: "/grocery", label: "Grocery", icon: ShoppingCart },
            { path: "/pantry", label: "Pantry", icon: Package },
          ].map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`relative flex items-center gap-2 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-green-600 after:transition-all ${isActive(
                path
              )}`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}

         
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

         
          <div className="relative group">
            <div className="w-9 h-9 bg-green-600 text-white flex items-center justify-center rounded-full cursor-pointer">
              {user.email?.charAt(0).toUpperCase()}
            </div>

            <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
              
             
              <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 border-b dark:border-gray-700">
                {user?.email}
              </div>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        </div>

       
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white dark:bg-gray-900">
          <Link to="/" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/grocery" onClick={() => setMenuOpen(false)}>Grocery</Link>
          <Link to="/pantry" onClick={() => setMenuOpen(false)}>Pantry</Link>
          <button onClick={handleLogout} className="text-red-500">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;