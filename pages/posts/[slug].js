import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

// /posts/getting-started-with-next-js -> slug identifier & human readable
function PostDetailPage(props) {
    return <PostContent post={props.post}/>
}

export function getStaticProps(context){
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600 // refresh data every 10 minutes
    };
}

export function getStaticPaths(){
    const postFilenames = getPostsFiles();
    // Map file names to slugs
    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug}})),
        fallback: false,
    };
}

export default PostDetailPage;