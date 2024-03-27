
import {useDispatch, useSelector} from "react-redux"
import { addPosts } from "../utils/blogSlice";
import { useEffect } from "react";
import axios from "axios";

const useGetAllPosts = () => {


    const post = useSelector((store)=> store.blogs?.posts);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        const response = await axios.get("http://localhost:3000/");
        dispatch(addPosts(response?.data));
      }
      useEffect(()=>{
        !post && fetchPosts();
      },[])
} 

export default useGetAllPosts;