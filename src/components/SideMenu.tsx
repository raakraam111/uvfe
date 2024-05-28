// SideMenu.tsx
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { toast } from 'react-toastify';

export default function SideMenu() {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    let path = pathname.split("/");
    let active = '/' + path[1];
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    let menuData = [
        { path: '/dashboard', icon: 'fa fa-home mb--20', label: 'Dashboard'},
        { path: '/purchase', icon: 'fa fa-shopping-cart  mb--20', label: 'Purchases' },
        { path: '/withdrawals', icon: 'fa fa-arrow-up mb--20', label: 'Withdrawals'},
        { path: '/settings', icon: 'fa fa-cog mb--20', label: 'Settings'},
        { path: '/auth', icon: 'fa fa-power-off mb--20', label: 'Logout'}
    ];

    const isActive = (path) => active === path;
    const handleLogout = () => {
        dispatch(logout());
        router.push('/auth');
        toast.success('You have been logged out successfully.');
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
    // console.log({isMobileMenuOpen})
    return (
        // <>
        //     <div className="hamburger mb20" onClick={toggleMobileMenu}>
        //         <i className="fa fa-bars c-white" ></i>
        //     </div>
        //     <div className={isMobileMenuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        //         {menuData.map((menu, index) => (
        //             <div key={index} onClick={menu.path === '/auth' ? handleLogout : toggleMobileMenu}>
        //                 <Link href={menu.path}>
        //                     <div className={`icon-holder ${isActive(menu.path) ? 'active' : ''}`}>
        //                         <i className={menu.icon}></i>
        //                         {menu.path.substr(1)} {/* Display menu label */}
        //                     </div>
        //                 </Link>
        //             </div>
        //         ))}
        //     </div>
        //     <div className="icon-column col-md-1">
        //         <div className="icon-navigation">
        //             {menuData.map((menu, index) => (
        //                 <div key={index} onClick={menu.path === '/auth' ? handleLogout : null}>
        //                     <Link href={menu.path}>
        //                         <div className={`icon-holder ${isActive(menu.path) ? 'active' : ''}`}>
        //                             <i className={menu.icon}></i>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </>

      <>
        <div className="hamburger mb20" onClick={toggleMobileMenu}>
          <i className="fa fa-bars c-white"></i>
        </div>
        <div className={isMobileMenuOpen ? 'mobile-menu open' : 'mobile-menu'}>
          <i className="fa fa-times close-icon" onClick={toggleMobileMenu}></i> {/* Close icon */}
          {menuData.map((menu, index) => (
            <div key={index} onClick={() => {
                toggleMobileMenu();
                if (menu.path === '/auth') handleLogout();
              }}>
              <Link href={menu.path}>
                <div className="icon-label-container mb20">
                  <div className={`icon-holder ${isActive(menu.path) ? 'active' : ''}`}>
                    <i className={`${menu.icon} fs30`}></i>
                  </div>
                  
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="icon-column col-md-1">
          <div className="icon-navigation">
            {menuData.map((menu, index) => (
              <div key={index} onClick={menu.path === '/auth' ? handleLogout : null}>
                <Link href={menu.path}>
                  <div className={`icon-holder ${isActive(menu.path) ? 'active' : ''}`}>
                    <i className={menu.icon}></i>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </> 
    );
}


 