import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const Shopcontext = createContext();

const Context = (props) => {
  const [cartitems, setcartitems] = useState([]);

  const addtocart = async (itemid, size) => {
    if (!size) {
      toast.error('Please select the size first');
      return;
    }
    let cartdata = structuredClone(cartitems); 
    if (cartdata[itemid]) {
      if (cartdata[itemid][size]) {
        cartdata[itemid][size] += 1;
      } else {
        cartdata[itemid][size] = 1;
      }
    } else {
      cartdata[itemid] = {};
      cartdata[itemid][size] = 1;
    }
    setcartitems(cartdata);
  };

  const cartcount = () => {
    let totalcount = 0;
    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        try {
          if (cartitems[items][item] > 0) {
            totalcount += cartitems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalcount;
  };

  

  const contextvalue = { addtocart, cartitems, setcartitems, cartcount };

  return (
    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default Context;
