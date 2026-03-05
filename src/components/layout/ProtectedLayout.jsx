import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, Package, ChefHat } from "lucide-react";

const ProtectedLayout = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">

      <aside className="w-64 hidden md:flex flex-col p-6 border-r border-border bg-white/5 backdrop-blur-lg">
        <div className="flex items-center gap-2 mb-10">
  <ShoppingCart className="w-5 h-5 text-primary" />
  <span className="font-semibold text-lg tracking-tight text-primary">
    FreshTrack
  </span>
</div>

        <nav className="flex flex-col gap-3">
          <SidebarLink to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarLink to="/grocery" icon={<ShoppingCart size={18} />} label="Grocery" />
          <SidebarLink to="/pantry" icon={<Package size={18} />} label="Pantry" />
          <SidebarLink to="/recipes" icon={<ChefHat size={18} />} label="Recipes" />
        </nav>
      </aside>

      
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
       isActive
        ? "bg-primary/10 text-primary"
        : "hover:bg-muted"
      }`
    }
  >
    {icon}
    <span className="font-medium">{label}</span>
  </NavLink>
);

export default ProtectedLayout;
