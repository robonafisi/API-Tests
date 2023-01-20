import { React, useState, useEffect } from 'react';

const default_endpoint = 'https://api.twitter.com/2/users/:id/followers';

export async function getServerSideProps() {

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://api.twitter.com/2/users/1264069561869049856/followers',
    headers: { 
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANIplQEAAAAAnCU9cx3hmSwQdoGbed3%2Bc6uOeIY%3D2wj9XP0PoJz8ZYdtzQHWJ6pe6Ocm6IR3XDeQsIZRyn4gkFFzxz', 
      'Cookie': 'guest_id=v1%3A167404021070772330'
    }
  };


  const followers = await axios(config);

  const datathis = followers.data.data;

  return{
    props:{
      datathis
    },
  };
}

export default function Home({ datathis }) {
  
  return (
    <div>
      <h1>My Twitter Followers:</h1>
      {datathis.map(follower =>{
        const { id, name, username } = follower;
        return(
          <p>{name}</p>
        )
      })}
    </div>
  )
}