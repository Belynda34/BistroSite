import React from 'react'
import Button from './Button';
import Card7 from './Card7';
import Box from './Box';


function Menu() {
  return (
    <div>
        <div className='text-center pt-20 space-y-10'>
          <h1 className='text-7xl font-semibold'>Our Menu</h1>
          <p className='text-lg'>We consider all the drivers of change gives you the components<br/> you need to change to create a truly happens</p>
        </div>
        <div className='flex justify-center space-x-6 mt-10'>
          <button className='w-[100px] h-[48px] border-2 rounded-[24px] border-transparent bg-rose-800 text-white'>All</button>
          <Button content='Breakfast'/>
          <Button content='Main Dishes'/>
          <Button content='Drinks'/>
          <Button content='Desserts'/>
        </div>
        <section  className='space-y-6 mt-28'>
          <div className='flex justify-center space-x-10'>
            <Card7 img='./images/pic25.png' cost='$9.99' title='Fried Eggs' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>
            <Card7 img='./images/pic26.png' cost='$15.99' title='Hawaiian Pizza' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>
            <Card7 img='./images/pic27.png' cost='$7.25' title='Martinez Cocktail' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>
            <Card7 img='./images/pic29.png' cost='$20.99' title='Butterscotch Cake' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>
          </div>
          <div className='flex justify-center space-x-10'>
          <Card7 img='./images/pic28.png' cost='$5.89' title='Minit Lemonade' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>
          <Card7 img='./images/pic30.png' cost='$18.05' title='Chocolate Icecream' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>
          <Card7 img='./images/pic31.png' cost='$12.55' title='Cheese Burger' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>
          <Card7 img='./images/pic32.png' cost='$12.99' title='Classic Waffles' desc='Made with eggs, lettuce, salt, oil, and other ingredients'/>

          </div>

        </section>

        <section className='flex bg-gray-100 pt-40 justify-center mx-auto pb-40'>
          <div className='w-[20em] text-wrap mr-40'>
            <h1 className='text-5xl font-semibold'>You can order through apps</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
          </div>
          <div className='space-y-5'>
            <div className='flex space-x-5 justify-center'>
              <Box img='./images/pic48.png' width='w-[12em]'/>
              <Box img='./images/pic49.png'  width='w-[12em]'/>
              <Box img='./images/pic50.png' width='w-[12em]'/>
            </div>
            <div className='flex space-x-5' >
              <Box img='./images/pic51.png' width='w-[15em]'/>
              <Box img='./images/pic52.png' width='w-[15em]'/>
              <Box img='./images/pic53.png' width='w-[15em]'/>
            </div>
            <div className='flex space-x-5 justify-center'>
              <Box img='./images/pic54.png' width='w-[12em]'/>
              <Box img='./images/pic55.png' width='w-[12em]'/>
              <Box img='./images/pic56.png' width='w-[12em]'/>
            </div> 
          </div>
        </section>
    </div>
  )
}

export default Menu;