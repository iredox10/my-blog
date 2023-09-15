import Blog from "./components/Blog";
import Header from "./components/Header";
import Search from "./components/Search";
import SideBar from "./components/SideBar";

const getBlogs = async () => {
  const res = await fetch('http://localhost:3000/api/blogs',{cache: 'no-store'})
  const data = await res.json()
  return data
}

export default async function Home() {
  const blogs = await getBlogs()
  return (
  <>
  <Header />
  <Search />
  <div className="flex px-5">
    <SideBar />
      <div  className="mx-4 my-4 md:grid grid-cols-5 gap-4 md:mx-12">
    {blogs.map(blog => (
  <Blog key={blog._id} blog={blog} />
  ))}
  </div>
  </div>
  </>
  )
}
