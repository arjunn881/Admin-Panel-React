import React, { useState } from 'react'
import '../menu/menu.css'


export default function Menu() {

    const [style, setStyle] = useState('logo')

    
  return (
<div className="menu">
    <div className="logo">
        <h3>PRODUCT ADMIN</h3>
        
    </div>
    <div className='menuitemcon'>
    <div className="menuitem">
    <i class="fa-solid fa-gauge"></i>
        <li>Dashboard</li>
        
        
    </div>

    <div className="menuitem">
    <i class="fa-regular fa-file-lines"></i>
        <li>Reports</li>
        

        
    </div>

    <div className="menuitem">
    <i class="fa-solid fa-cart-shopping"></i>
        <li>Products</li>
        

    </div>


    <div className="menuitem">
    <i class="fa-regular fa-user"></i>
        <li>Accounts</li>
        

    </div>


    <div className="menuitem">
    <i class="fa-sharp fa-solid fa-gear"></i>
        <li>Settings</li>
        

    </div>
    </div>
    <div className="logout">
         <span>Admin,</span> 
        <b><span>Logout</span></b>
    </div>
</div>
  )
}
