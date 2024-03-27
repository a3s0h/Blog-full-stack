import React from 'react'

const BlogTemplate = ({data}) => {

    const {title , excert , content , author , category , comments , featuredImage } = data;

    const createdAt = data?.createdAt;
const date = new Date(createdAt);
const formattedDate = date.toISOString().split('T')[0];


  return (
    <div className="py-10">
        <div className="h-[400px] w-[350px] rounded-lg">
            <img
                className="w-full h-full rounded-lg"
            src={featuredImage} alt="postImage" />
        </div>
        <div className="p-5 text-left">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{author?.name}</h2>
                <p className="italic ">{category?.name}</p>
            </div>
            <p className="text-gray-800 italic">{excert}</p>
            <p>{formattedDate}</p>
        </div>
    </div>
  )
}

export default BlogTemplate