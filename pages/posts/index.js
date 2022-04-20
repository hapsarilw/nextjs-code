import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps(){
    // we dont want to fetch for every request -> not great in performance
    // instead doing it once during the build process
    // if we ever update files & reflect those changes -> rebuild & redeploy
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }        
    }    
}

export default AllPostsPage;
