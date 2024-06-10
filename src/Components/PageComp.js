import React from "react";
import Card6 from "./Card6";

const PageComp = () =>{
    return(
        <section className="space-y-10">
        <div className='flex justify-center space-x-10'>
          <Card6 img='./images/pic33.png' alt='' date='August 10,2023' content='How to prepare a delicious gluten free sushi'/>
          <Card6 img='./images/pic34.png' alt='' date='August 10,2023' content='Exclusive baking lessons fromt the pastry king' />
          <Card6 img='./images/pic35.png' alt='' date='August 10,2023' content='How to prepare the perfect fries in an air fryer'/>
          <Card6 img='./images/pic37.png' alt='' date='August 10,2023' content='How to prepare delicious chicken tenders'/>
        </div>
        <div className='flex justify-center space-x-10'>
          <Card6 img='./images/pic36.png' alt='' date='August 10,2023' content='5 great cooking gadgets you can buy to save time'/>
          <Card6 img='./images/pic38.png' alt='' date='August 10,2023' content='The secret tips & tricks to prepare a perfect burger'/>
          <Card6 img='./images/pic39.png' alt='' date='August 10,2023'  content='7 delicious cheesecake reciped you can prepare'/>
          <Card6 img='./images/pic40.png' alt='' date='August 10,2023' content='5 great pizza restaurants you should visit in this city'/>
        </div>
  
        <div className='flex justify-center space-x-10'>
          <Card6 img='./images/pic41.png' alt='' date='August 10,2023' content='5 great cooking gadgets you can buy to save time'/>
          <Card6 img='./images/pic42.png' alt='' date='August 10,2023' content='How to prepare a delicious gluten free sushi'/>
          <Card6 img='./images/pic43.png' alt='' date='August 10,2023' content='Top 20 simple  and quick desserts for kids'/>
          <Card6 img='./images/pic44.png' alt='' date='August 10,2023'content='Top 20 simple and quick desserts for kids'/>
        </div>
        </section>
    )
}

export default PageComp;