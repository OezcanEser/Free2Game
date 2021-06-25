import React, { useState, useRef } from 'react';

import { useOnClickOutside } from './Hook';
import { GlobalStyles } from './global';

import { Burger, Menu } from './components';

function App() {
   const [open, setOpen] = useState(false);
   const node = useRef();
   const menuId = 'main-menu';

   useOnClickOutside(node, () => setOpen(false));

   return (
      <>
         <GlobalStyles />
         <div>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
         </div>
         <div></div>
      </>
   );
}

export default App;
