import { React, useState, useEffect } from 'react';

export async function getServerSideProps() {
  console.log("Hello",process.env.brearer_token)
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://api.twitter.com/2/users/1264069561869049856/followers',
    headers: { 
      'Authorization': process.env.brearer_token, 
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
  console.log("Hello")
  return (
    <div>
      <h1>My Twitter Followers:</h1>
      {datathis.map(follower =>{
        const { id, name, username } = follower;
        return(
          <p>{name} {username}</p>
        )
      })}
    </div>
  )
}