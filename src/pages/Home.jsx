import React,{useState, useEffect} from 'react'
import {AiFillDelete} from "react-icons/ai"
import {MdOutlineEdit} from "react-icons/md" 
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const getPost = async () => {
    const response = await fetch("https://blogwebsite-e9qb.onrender.com/get-blocks");
    const data = await response.json();
    setPosts(data.blocks);
  }
  useEffect(() => {
    getPost();
  }, [posts])
  const deletePost = async (id) => {
    const response = await fetch("https://blogwebsite-e9qb.onrender.com/delete-blog/" + id ,{
      method: "DELETE"
    })
    if (response.status === 200) {
      toast.success("blog deleted successfully");
    } else {
      toast.error("not deleted");      
    } 
  }

  const updatePost = async (id) => {
    console.log(title, description, id);
    const response = await fetch(`https://blogwebsite-e9qb.onrender.com/update-blog/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description})
    });
    if(response.status === 200){
      toast.success("blog updated successfully");
    }else {
      toast.error("not updated");      
    }
  }

  return (
  <>
    <Toaster position="bottom-center" reverseOrder={false} />
    <div className='mt-10 '>
    {
    posts.map((single)=>{
      return (
        <div key={single._id} className='w-[40vw] border-black mx-auto p-3 rounded-md hover:shadow-md m-2' style={{backgroundColor: "#352F44"}}>
          <div className='flex justify-end text-lg gap-3'>
            <AiFillDelete onClick={()=>deletePost(single._id)} className='text-white hover:text-red-400 cursor-pointer hover:scale-110 transition-all' />
            <MdOutlineEdit onClick={()=>{
              setEditPost(!editPost);
              setSelectedPost(single._id);
            }} className='text-white hover:text-red-400 cursor-pointer hover:scale-110 transition-all' />
          </div>
          <h2 className='text-lg text-white font-bold my-2 outline-none focus:bg-gray-900 rounded-md focus:p-1' 
          contentEditable={editPost && selectedPost === single._id} 
          onInput={(e)=> setTitle(e.target.innerText)} >
            {single.title}
          </h2>
          <h3 className='text-gray-200 font-semibold text-green-400 outline-none focus:bg-gray-900 rounded-md focus:p-1' 
          contentEditable={editPost && selectedPost === single._id}
          onInput={(e)=> setDescription(e.target.innerText)} >
            {single.description}
          </h3>    
          <button onClick={()=>updatePost(single._id)} className={`${selectedPost === single._id && editPost?"block": "hidden"} bg-slate-500 hover:bg-slate-600 px-3 py-1 my-1 rounded-md text-white`}>Save</button>
        </div>
      )
    })
    }   
    </div>
  </>
  )
}

export default Home