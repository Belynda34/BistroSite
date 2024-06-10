import React from 'react'

function Contact() {
  return (
    <div className=''>

      <div className=' h-[550px] bg-gray-50 text-center pt-16 space-y-6'>
          <h1 className='text-7xl r'>Contact Us</h1>
          <p className='t'>We consider all the drivers of change gives you the components<br/> you need to change to create a truly happens</p>
      </div>

      <div className= 'bg-white w-[700px] h-[540px] shadow-2xl mx-auto relative bottom-[250px]  rounded-3xl'>
        <form className='space-y-5'>
          <div className='flex pt-10 pl-10 space-x-5'>
            <div className='space-y-2'>
              <label className='text-xl font-semibold ' >Name</label><br/>
              <input type='text' placeholder='Enter your name' className='w-[19em] h-12 border-2 rounded-full pl-4'/>
            </div>
            <div className='space-y-2'>
              <label  className='text-xl font-semibold '>Email</label><br/>
              <input type='text' placeholder='Enter email address' className='w-[19em] h-12 border-2 rounded-full pl-4'/>
            </div>
          </div>
          <div className='pl-10 space-y-4 '>
            <div>
             <label  className='text-xl font-semibold '>Subject</label><br/>
             <input type='text' placeholder='Write subject' className='w-[39em] h-12  border-2 rounded-full pl-4 mt-2'/>
            </div>
          
            <div>
             <label  className='text-xl font-semibold '> Message</label><br/>
              <input type='text' placeholder='Write you Message' className='pb-24 pl-4 w-[39em] h-40 border-2 rounded-lg'/>
            </div>
         
          </div>
          <input type='submit' placeholder='Send'  className='ml-10 mt-5 w-[39em] h-12 text-white bg-rose-900 rounded-full  '/>
          
        </form>
      </div>

      <section className='flex justify-center relative bottom-20 space-x-20 text-lg'>
        <div className='space-y-4'>
          <h1 className='font-bold text-xl'>Call Us:</h1>
          <p  className='text-rose-800 font-bold'>+1-234-567-8900</p>
        </div>
        <div>
          <h1 className='font-bold text-xl'>Hours:</h1>
          <p className='pt-4'>Mon-Fri:11am-8pm</p>
          <p>Sat,Sun 9am-10pm</p>
        </div>
        <div>
          <h1 className='font-bold text-xl'>Our Location:</h1>
          <p className='pt-4'>123 Bridge Street</p>
          <p>Nowhere Land, LA 12345</p>
          <p>United States</p>
        </div>
      </section>

    </div>
  )
}

export default Contact