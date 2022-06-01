import "./category.css"

export default function Category() {
  return (
    <div className="post">
      <img className="postImage"
      src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" 
      alt="" />

      <div className="postInfo">
        <span className="postTitle">Lorem ipsum dolor sit.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nobis suscipit quasi quibusdam dolore recusandae voluptatem ab eveniet,
         rerum accusamus porro dignissimos. Saepe aspernatur voluptatibus, 
         quas quisquam cupiditate alias modi consectetur?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nobis suscipit quasi quibusdam dolore recusandae voluptatem ab eveniet,
         rerum accusamus porro dignissimos. Saepe aspernatur voluptatibus, 
         quas quisquam cupiditate alias modi consectetur?
      </p>
    </div>
  )
}
