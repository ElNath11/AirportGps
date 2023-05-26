import React from 'react'
import Navbar from '../components/Navbar'
import MapJson from '../utils/MapJson'

const result = [];

MapJson.forEach(item => {
  const [loc, lat, long] = item;
  result.push({
    loc: loc,
    long: lat.toString(),
    lat: long.toString()
  });
});

function Blog() {
console.log('MAP', MapJson)
  return (
    <>  
        <Navbar />
        <div>Blog</div>
    </>
  )
}

export default Blog