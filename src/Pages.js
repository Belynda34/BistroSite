import React from 'react'
import PageComp from './Components/PageComp';
import Card6 from './Components/Card6';
function Pages() {
  return (
    <div className='bg-gray-50'>

     <div className='space-y-6'>
     <h1 className='pt-28 text-center text-5xl font-bold'>Our Blog & Articles</h1>
     <p className='text-center text-lg'>We consider all the drivers of change gives you the components you need<br/> to change to create a truly happens.</p>
     </div>
     <div className='mt-28'>
      <PageComp/>
     </div>

    <section className='mt-28'>
      <h1 className='text-5xl font-bold text-center'>The Secret tips & tricks to prepare a <br/> prefect burger & pizza for our customers</h1>

      <img src='./images/pic45.png' alt=''  className='mt-20 w-[1180px] h-[689px] flex mx-auto justify-center rounded-tr-xl rounded-tl-xl'/>

     <div className='relative  mt-10 space-y-6 '>
      <h1 className='text-2xl font-bold text-center relative right-[303px]'>What do you need to prepare a home-made burger?</h1>
      <p className='w-[1000px] mx-auto text-left relative right-20'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world¹</p>

      <ol className='space-y-1 relative right-32'> 
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Quality Beef:</span>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg' >Seasoning:</span>Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them¹</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Don't Overwork the Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Cooking:</span>High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
      </ol>
      </div>

     <div className='text-center mt-10 space-y-6'>
    
      <h1 className='text-2xl font-bold text-center relative right-[333px]'>What are the ingredients to make it delicious?</h1>
      <p className='w-[1000px] mx-auto text-left relative right-20'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world¹</p>

      <ol className='space-y-1 relative right-32'> 
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Quality Beef:</span>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg' >Seasoning:</span>Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them¹</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Don't Overwork the Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Cooking:</span>High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
        <li className='w-[900px] mx-auto text-left'><span className='font-bold text-lg'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
      </ol>
      </div>

      <img src='./images/pic46.png' alt=''  className='mt-20 w-[1180px] h-[689px] flex mx-auto justify-center rounded-xl'/>

      <div className=' mt-10 space-y-6'>
        <h1 className='text-2xl font-bold text-center relative right-[315px]'>What are the right ingredients to make it delicious</h1>
        <p className='w-[1030px] mx-auto text-left relative right-20 text-lg'>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</p>
      </div>
    </section>

    <section className='mt-20 space-y-10 p-1 bg-white pt-20'>
      <h1 className='text-5xl font-semibold text-center'>Read More Articles</h1>
      <p className='mx-auto text-center text-xl'>We consider all the driver of change gives you the components you need<br/> to change to create a truly happens</p>

      <div className='flex justify-center space-x-10'>
          <Card6 img='./images/pic33.png' alt='' date='August 10,2023' content='How to prepare a delicious gluten free sushi'/>
          <Card6 img='./images/pic34.png' alt='' date='August 10,2023' content='Exclusive baking lessons fromt the pastry king' />
          <Card6 img='./images/pic35.png' alt='' date='August 10,2023' content='How to prepare the perfect fries in an air fryer'/>
          <Card6 img='./images/pic37.png' alt='' date='August 10,2023' content='How to prepare delicious chicken tenders'/>
      </div>

    </section>
   
    </div>
  )
}

export default Pages;