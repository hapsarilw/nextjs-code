import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  // get all featured posts
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
    // not use revalidate -> execute once outside of development 
    // during development -> will executed for every request
    // outside development -> will executed only once
  }
}

export default HomePage;

// 1) Hero => Present ourselves
// 2) Featured Posts
