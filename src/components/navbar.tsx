import { Button } from "./ui/button"

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-6">
        <h1 className="text-gray-custom-900 text-4xl font-bold">Shortly</h1>
        <div className="flex items-center gap-x-4 ">
          <Button variant="ghost" className={"font-semibold text-gray-custom-500 hover:text-gray-custom-900"}>Features</Button>
          <Button variant="ghost" className={"font-semibold text-gray-custom-500 hover:text-gray-custom-900"}>Pricing</Button>
          <Button variant="ghost" className={"font-semibold text-gray-custom-500 hover:text-gray-custom-900"}>Resources</Button>
        </div>
      </div>

      <div className="flex items-center gap-x-6">
        <Button variant="ghost" className={"font-semibold text-gray-custom-500 hover:text-gray-custom-900"}>Login</Button>
        <Button className="rounded-full bg-cyan hover:bg-cyan hover:opacity-40">Sign up</Button>
      </div>
    </div>
  )
}

export default Navbar