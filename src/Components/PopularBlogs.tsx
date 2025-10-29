import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {

    const blogs = [
        {
            title:"My Amazing Blog Title 1",
            author:"Jordan",
            likes:142,
            Comments:44,
        },
         {
            title:"My Amazing Blog Title 2",
            author:"John",
            likes:1490,
            Comments:40,
        }, {
            title:"My Amazing Blog Title 3",
            author:"Joe",
            likes:100,
            Comments:440,
        },{
            title:"My Amazing Blog Title 4",
            author:"vicky",
            likes:1001,
            Comments:40,
        },
    ];

   return (
     
        <div className="bg-white p-5 w-[25rem] mt-4 border ml-5 rounded">
            <h2 className="text-xl font-bold mb-5"> Popular Blogs </h2>

            <ul>
                {blogs.map((blog, index) => (
                    <li key={index} className="mb-4">
                        <div className="flex justify-between items-center">
                             <span className="font-bold mb-2"> {blog.title}</span>
                        </div>
                        <span className="text-gray-600 ">
                           Published by {blog.author}
                        </span>
                        <div className="flex items-center mt-2">
                             <MessageCircle size={16}/>
                             <span className="text-gray-500 mr-5 ml-1">
                               {blog.likes}
                             </span>

                          <ThumbsUp size={16}/>

                          <span className="text-gray-500 mr-2 ml-2">
                            {blog.Comments}
                          </span>

                        </div>
                    </li>
                ))}
            </ul>

        </div>

   )
      

};

export default PopularBlogs;