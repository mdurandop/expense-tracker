import React from 'react'
import BottomNav from './BottomNav'

const Container = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-80 border border-black border-solid h-screen relative flex justify-center items-center'>
        <BottomNav />
        </div>
    </div>
  )
}

export default Container
