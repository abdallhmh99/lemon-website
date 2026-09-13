import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import logoImg from '../../assets/logo.png';

export const Header = () => {
  const { totalCount, setIsDrawerOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المنتجات', path: '/products' },
    { name: 'من نحن', path: '/about' }
  ];

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Right: Logo */}
        <Link to="/" className="brand-logo-link">
          <img src={logoImg} alt="ليمون Lemon" className="brand-logo-img" />
        </Link>

        {/* Center: Nav links */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-item-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Left: Actions */}
        <div className="nav-actions-group">
          {/* Quick Search Form */}
          {searchOpen ? (
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', background: '#FFF', borderRadius: '20px', border: '1px solid var(--border-color)', padding: '3px 10px' }}>
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن منتج..."
                style={{ border: 'none', outline: 'none', fontSize: '0.85rem', width: '130px', background: 'transparent', fontFamily: 'inherit' }}
              />
              <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex' }} title="بحث">
                <Search size={16} />
              </button>
              <button type="button" onClick={() => setSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', marginLeft: '4px' }} title="إغلاق">
                <X size={16} />
              </button>
            </form>
          ) : (
            <button
              className="nav-action-btn"
              onClick={() => setSearchOpen(true)}
              title="بحث عن منتجات"
              type="button"
            >
              <Search size={22} />
            </button>
          )}

          <button
            className="nav-action-btn"
            onClick={() => setIsDrawerOpen(true)}
            title="سلة المشتريات"
            type="button"
          >
            <ShoppingCart size={22} />
            <span className="cart-badge-pill">{totalCount}</span>
          </button>

          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            title="القائمة"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#FFFBEB',
          padding: '20px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          textAlign: 'right'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontWeight: 700,
                color: location.pathname === link.path ? 'var(--color-green-dark)' : 'var(--color-text-dark)',
                fontSize: '1.05rem'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
