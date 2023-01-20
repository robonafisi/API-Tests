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

  axios(config)
  .then(function (response) {
    const data = JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  //const data = JSON.stringify(response.data);
  return{
    props:{
      data
    }
  }
}

export default function Home({ data}) {
  
  console.log("WoWwwwwwwwwwwwwwww", data);
  return (
    <div>
      
    </div>
  )
}