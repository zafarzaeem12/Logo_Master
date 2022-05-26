import React,{useState} from 'react'

const Logo = () => {
    var [Logos , SetLogos] = useState({})
    var Logos = [
        {
            id:1,
            image:'./assets/images/cat-images/1.png',
            name:"elo"
        },
        {
            id:2,
            image:'./assets/images/cat-images/2.png',
            name:"elo"
        },
        {
            id:3,
            image:'./assets/images/cat-images/3.png',
            name:"elo"
        },
        {
            id:4,
            image:'./assets/images/cat-images/4.png',
            name:"elo"
        },
        {
            id:5,
            image:'./assets/images/cat-images/5.png',
            name:"elo"
        },
        {
            id:6,
            image:'./assets/images/cat-images/6.png',
            name:"elo"
        },
        {
            id:7,
            image:'./assets/images/cat-images/7.png',
            name:"elo"
        },
        {
            id:8,
            image:'./assets/images/cat-images/8.png',
            name:"elo"
        },
        {
            id:9,
            image:'./assets/images/cat-images/9.png',
            name:"elo"
        },
        {
            id:10,
            image:'./assets/images/cat-images/10.png',
            name:"elo"
        },
        {
            id:11,
            image:'./assets/images/cat-images/11.png',
            name:"elo"
        },
        {
            id:12,
            image:'./assets/images/cat-images/12.png',
            name:"elo"
        },
        {
            id:13,
            image:'./assets/images/cat-images/13.png',
            name:"elo"
        },
        {
            id:14,
            image:'./assets/images/cat-images/14.png',
            name:"elo"
        },
        {
            id:15,
            image:'./assets/images/cat-images/15.png',
            name:"elo"
        },
    ]
  return (
    <div>{Logos}</div>
  )
}

export default Logo
