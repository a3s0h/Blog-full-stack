const Post = require("../modals/post");

const getAllPosts = async (req, res) => {
    try {
        const postData = await Post.find()

        res.status(200).json(postData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPostById = async (req,res) => {
    try{
        const id = (req.params.id);
        const data = await Post.findById(id);

        res.status(200).json(data);

    }
    catch(error) {
        res.status(500).json({message : error.message});
    }
}


const postByCategory = async (req,res )=> {
    try{
        const category = req.params.categoryName;
        // console.log(category)
        const data = await Post.find({ "category.name" : category});

        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

module.exports = { getAllPosts,getPostById, postByCategory };