import { Fragment } from "react";
import Head from 'next/head';

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max's blog </title>
        <meta name='description' content='I post about prgramming and web development'></meta>
      </Head>
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
