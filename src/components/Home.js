import React, { useEffect } from 'react'
import image from '../images/farm.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data'

const Home = () => {
const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getData())
  },[])

  return (
    <>
    <HeroWrapper>
        <div className='pt-32 text-center w-10/12 mx-auto'>
            <div>
                <p className='text-white uppercase underline mb-10 font-semibold font-press-start'>Welcome to our online survey</p>
                <h1 className='text-white md:text-7xl text-4xl font-semibold font-press-start'>Agriculture <br /> Organic Products</h1>
                <div className="mt-10">
                  <Link to='/survey'>
                    <button className='bg-brown p-4 rounded m-2 uppercase  text-green font-press-start'>Take survey</button>
                  </Link>
                  <Link to='/response'>
                    <button className='bg-brown p-4 rounded m-2 uppercase text-green font-press-start'>Responses</button>
                  </Link>
                </div>
            </div>
        </div>
    </HeroWrapper>
    </>
  )
}

export default Home

const HeroWrapper =  styled.div`
background-image: url(${image});
height: auto;
background-repeat: no-repeat;
background-size: cover;
background-position: top center;
position: relative;
z-index: 1;
height: 100vh;

&::after{
position: absolute;
content: "";
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: black;
opacity: 0.5;
z-index: -1;
`