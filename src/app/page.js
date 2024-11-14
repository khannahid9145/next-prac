import Image from "next/image";

export default function Home() {
  return (
    <>

      <navbar className="flex justify-between items-center bg-purple-200 py-1">
        <ul className="flex items-center">
          <li className="px-3 font-bold">Next Js</li>
          <li className="px-3">Home</li>
          <li className="px-3">About</li>
          <li className="px-3">Contact</li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-purple-400 rounded-xl px-2 w">Try</button>
          <button className="bg-purple-400 rounded-xl px-2 w">Contact Us</button>
        </div>
      </navbar>

      <div className="flex justify-center py-28">
        <div className="bg-purple-300 h-80 w-96 rounded-lg flex justify-center justify-items-center">
          <p className="h-7 border-b-2 w-80 border-black text-center font-mono">Text Style</p>
        </div>
      </div>
    </>

  );
}
