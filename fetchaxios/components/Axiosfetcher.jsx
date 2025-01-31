import axios from "axios";

const api_url ="https://jsonplaceholder.typicode.com/posts";



const Axiosfetcher =()=>{
  const [posts,setPosts] = useState([]);
  const [newPost,setNewPost] = useState({title:"",body:""});

  const fetchPosts =async()=> {
    try{
   
        const response = await axios.get(url);
        setPosts(response.data);
}catch(err){
        console.error("Errorfetching posts:",err);
    }
  };

  const fetchpostbyID = async(id) =>{
    try{
    const response = await axios.get(`${url}/${id}`);
    console.log(response.data);
    }catch(error){
console.error(error);
    }
  };

  const handleCreatePost = async()=>{
    try{
const response = await axios.post(url,newPost);
setPosts([...posts, response.data]);
setNewPost({title:"",body:""});
    }catch(error){
  console.error(error);
    }
  };
const handleUpdatePost = async(id) => {
    try{
        const updatedData = {title:"Updated Title", body: "Updated Body"};
        await axios.put('url/${id}',updatedData);
        fetchPosts();
    }catch(error){
        console.error("Error Updating the post:",error);
    }
};

const handleDeletePost =async(id)=>{
try{
    await axios.delete(`${url}/${id}`);
    setPosts(posts.filter((post)=> post.id !== id));
}catch(err){
    console.error("Error deleting post:",err);
}
};

    return(
        <>
        <h1>Hello axios!</h1>
        </>
    );
};

export default Axiosfetcher;