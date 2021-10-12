import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import "./App.css";
import "bulma/css/bulma.css"
// import "./index.css"

function App() {
  let [state, setState] = useState(false)

  return (
    <>
      <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

// function App() {
//   return (
//     <>
//       {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
//       <nav className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" >
//           <div className="relative flex items-center justify-between h-16" >
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* <!--Mobile menu button--> */}
//               <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//                 <span className="sr-only">Open main menu</span>
//                 {/* <!--
//         Icon when menu is closed.

//         Heroicon name: outline/menu

//         Menu open: "hidde

export default App;