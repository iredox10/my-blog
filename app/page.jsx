import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Search from "./components/Search";
import SideBar from "./components/SideBar";

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blogs')
  const data = await res.json()
  // console.log(data)
  return data
}

export default async function Home() {
  // const data = await getData()b
  return (
  <>
  <Header />
  <Search />
  <div className="flex px-5">
    <SideBar />
  <div className="mx-4 my-4 md:grid grid-cols-3 gap-4 md:mx-12">
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  </div>
  </div>
  </>
  )
}
