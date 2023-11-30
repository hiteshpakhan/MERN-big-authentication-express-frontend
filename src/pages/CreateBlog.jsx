import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const CreateBlog = () => {
  const nevigate = useNavigate();
  const postData = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const blog = {title, description};
    // sending data to the backend
    const response = await fetch("https://blogwebsite-e9qb.onrender.com/post-blog",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }); 
    if (response.status === 200) {
      toast.success("blog posted successfully");
      
      e.target.title.value = "";
      e.target.description.value = "";
      
      setTimeout(()=>{
        nevigate("/");
      }, 2000)

    } else {
      alert("failed!! something went wrong");
    }
  } 

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='w-[90vw] lg:w-[60vw] mx-auto mt-10' >
        <h1 className='text-2xl font-bold text-center'>Create Task</h1>
        <form className='flex flex-col gap-3' onSubmit={postData} >
          <lable htmlFor="title" className="font-semibold text-lg" >Title :</lable>
          
          <input type='text' name='title' 
          placeholder='Enter the blog Title' 
          className='px-3 py-2 rounded-md outline-none border-2 border-gray-400' />
          
          <lable htmlFor="description" className="font-semibold text-lg" >Description :</lable>

          <textarea name='description' className='p-3 rounded-md outline-none border-2 border-gray-400' rows={10} />
          
          <button type='submit' className='bg-slate-700 hover:bg-cyan-800 py-3 font-bold text-xl rounded-md text-white border-gray-400'>Post Blog</button>
        </form>
      </div>
    </>
  )
}

export default CreateBlog
