import { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Settings, Package, MessageSquare, LayoutDashboard, LogOut, Plus } from 'lucide-react';
import { getProducts, getCategories } from '../../lib/data';

function AdminSidebar() {
  const location = useLocation();
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Categories', path: '/admin/categories', icon: Settings },
    { name: 'Inquiries', path: '/admin/inquiries', icon: MessageSquare },
  ];

  return (
    <div className="w-64 bg-[#0a0a0a] min-h-[calc(100vh-80px)] border-r border-white/5 p-6 hidden md:block">
      <h2 className="text-[var(--color-gold)] font-serif text-xl mb-8">Admin Panel</h2>
      <nav className="space-y-2">
        {navItems.map(item => (
          <Link 
            key={item.name} 
            to={item.path}
            className={`flex items-center px-4 py-3 rounded text-sm transition-colors ${location.pathname === item.path ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <item.icon size={18} className="mr-3" /> {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-8 border-t border-white/5 mt-8">
        <Link to="/" className="flex items-center px-4 py-3 text-gray-400 text-sm hover:text-white transition-colors">
          <LogOut size={18} className="mr-3" /> Exit Admin
        </Link>
      </div>
    </div>
  );
}

function ProductsManager() {
  const products = getProducts();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-serif">Manage Products</h2>
        <button className="bg-[var(--color-gold)] text-black px-4 py-2 text-sm uppercase tracking-wider flex items-center hover:bg-white transition-colors">
           <Plus size={16} className="mr-2" /> Add Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-gray-500 text-xs uppercase tracking-widest">
              <th className="p-4 font-normal">Product</th>
              <th className="p-4 font-normal">Category</th>
              <th className="p-4 font-normal">Status</th>
              <th className="p-4 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 flex items-center gap-4">
                   <img src={p.imageUrl} alt={p.name} className="w-12 h-12 object-cover rounded" />
                   <span className="font-medium">{p.name}</span>
                </td>
                <td className="p-4 text-gray-400 text-sm">{p.category}</td>
                <td className="p-4">
                  {p.isFeatured ? <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded border border-green-500/20">Featured</span> : <span className="px-2 py-1 text-xs bg-gray-500/10 text-gray-400 rounded border border-gray-500/20">Standard</span>}
                </td>
                <td className="p-4">
                   <button className="text-[var(--color-gold)] text-sm hover:text-white transition-colors mr-4">Edit</button>
                   <button className="text-red-400 text-sm hover:text-red-300 transition-colors">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DashboardOverview() {
  const products = getProducts();
  const categories = getCategories();
  
  return (
    <div>
      <h2 className="text-2xl font-serif mb-8">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#0a0a0a] p-6 border border-white/5 rounded-lg">
           <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Total Products</p>
           <p className="text-3xl font-serif">{products.length}</p>
        </div>
        <div className="bg-[#0a0a0a] p-6 border border-white/5 rounded-lg">
           <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Categories</p>
           <p className="text-3xl font-serif">{categories.length}</p>
        </div>
        <div className="bg-[#0a0a0a] p-6 border border-white/5 rounded-lg">
           <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">New Inquiries</p>
           <p className="text-3xl font-serif">5</p>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pass, setPass] = useState('');

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center -mt-20">
         <div className="bg-[#0a0a0a] p-10 border border-white/5 max-w-md w-full text-center">
            <h2 className="text-2xl font-serif mb-6">Admin Login</h2>
            <form onSubmit={(e) => { e.preventDefault(); if(pass === 'admin') setIsAuthenticated(true); else alert('Use "admin" as password'); }}>
               <input 
                 type="password" 
                 placeholder="Enter admin password..." 
                 value={pass}
                 onChange={e => setPass(e.target.value)}
                 className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors text-center text-xl mb-8 tracking-widest"
               />
               <button type="submit" className="w-full bg-[var(--color-gold)] text-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors">
                 Login
               </button>
               <p className="text-xs text-gray-500 mt-4">Hint: Password is 'admin'</p>
            </form>
         </div>
      </div>
    )
  }

  return (
    <div className="flex bg-[#050505] min-h-[calc(100vh-80px)]">
      <AdminSidebar />
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
         <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/products" element={<ProductsManager />} />
            <Route path="*" element={<div className="text-gray-500">Module under construction.</div>} />
         </Routes>
      </div>
    </div>
  );
}
