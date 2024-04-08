import bed from "../assets/bed.png"
import fork from "../assets/fork.png"
import house from "../assets/house.png"
import lock from "../assets/lock.png"
import todo from "../assets/todo.png"
import lens from "../assets/lens.png"
import welcome from "../assets/welcome.jpg"

type searchProp = {
  setSearch:any
}

const Menubar = (props:searchProp) => {
  return (
    <>
    <div className="flex mt-14 ml-72">
     <img src={house} className="w-6 h-6"/>
     <h1 className="ml-3">Search All</h1>
     <img src={bed} className="w-6 h-6 ml-10"/>
     <h1 className="ml-3">Hotels</h1>
     <img src={todo} className="w-6 h-6 ml-10"/>
     <h1 className="ml-3">Things to do</h1>
     <img src={fork} className="w-6 h-6 ml-10"/>
     <h1 className="ml-3">Restaurants</h1>
     <img src={lock} className="w-6 h-6 ml-10"/>
     <h1 className="ml-3">Holiday homes</h1>
    </div> 
    <div className="flex border border-spacing-1 p-3 shadow-lg rounded-full ml-60 mt-10 w-8/12">
        <img src={lens} className="w-6 h-6"/>
        <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder="Places to go, things to do, hotels..." className="ml-3 w-96 outline-none"/>
    </div>
    <div className="p-16">
        <img src={welcome}className="h-screen w-screen rounded-xl"/>
    </div>
    </>
       
  )
}

export default Menubar
