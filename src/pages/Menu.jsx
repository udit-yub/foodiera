import React, { useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import Title from "../components/title";
import Item from "../components/item";
import { Categories } from "./data";
import Footer from "../components/footer";
import { Foods } from "./data";

const Menu = () => {
  const [category, setcategory] = useState([]);
  const [sortype, setsortype] = useState("relevant");
  const [filteredfoods, setfilteredfoods] = useState([]);
  const [showcategories, setshowcategories] = useState(true);
  const [search , setsearch] = useState([])

  const togglefilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) 
        : [...prev, value] 
        // Add the value if it doesn't exist
    );
  };
  const applyfilter = ()=>{
    let filtered = [...Foods]
    if(search) {
      filtered = filtered.filter((food)=>food.name.toLowerCase().includes(search))
    }
    if(category.length) {
      filtered = filtered.filter((food)=>category.includes(food.category))
    }
    return filtered
  }
  const toggleshowcategories = ()=>{
    setshowcategories(!showcategories)
  }

  useEffect(()=>{
    let filtered = applyfilter()
    setfilteredfoods(filtered)
  }, [category, Foods, search])

  return (
    <section className="max-padd-container mt-24">
      <div className="w-full max-w-2xl flexCenter">
        
        <input type="text" onChange={(e)=>setsearch(e.target.value.toLowerCase())} placeholder="Search here..." className="border-gray-800 outline-none w-full py-3 text-sm pl-4 rounded"/>
        <div onClick={toggleshowcategories} className="flexCenter cursor-pointer text-lg border-1 pl-2">
          <LuSettings2 />
        </div>
      </div>
      {showcategories && (
        <div className="my-14">
          <h3 className="h3 mb-4 hidden sm:flex">Categories</h3>
          <div className="flexCenter sm:flexStart flex-wrap gap-x-12 gap-y-4">
            {Categories.map((cat) =>( 
              <label key={cat.name}>
                <input value={cat.name} onChange={(e)=>togglefilter(e.target.value, setcategory)} type="checkbox" className="hidden peer"></input>
                <div className="flexCenter flex-col gap-2 peer-checked:text-secondary cursor-pointer">
                  <div className="bg-white h-20 w-20 flexCenter rounded-full">
                    <img
                      src={cat.image}
                      alt=""
                      className="object-cover h-10 w-10"
                    />
                  </div>
                  <span className="medium-14">{cat.name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
      <div className="my-8 mb-20">
        <div className="flexBetween !items-start gap-7 flex-wrap pb-16 max-sm:flexCenter text-center">
          <Title
            title1={"Our"}
            title2={"Food List"}
            titleStyles={"!pb-0"}
            parastyles={"!block"}
          />
          <div className="flexCenter gap-x-2">
            <span className="sm:flex medium-16">sort by:</span>
            <select className="text-sm p-2.5 outline-none bg-white text-gray-20 rounded">
              <option>relevant</option>
              <option>low</option>
              <option>high</option>
            </select>
          </div>
        </div>
        <div className=' grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 xl:mt-20'>
        {filteredfoods.length > 0 ? (
          filteredfoods.map((food) => <Item foods={food} key={food._id}></Item>)
        ) : (
          <p className="capitalize">No foods found for selected filter</p>
        )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Menu;
