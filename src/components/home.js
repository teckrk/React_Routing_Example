import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

export default function Home() {
  // const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const navTopage = (url) => {
    navigate(url);
  }
  const navWithCondition = () => {
    let x = true;
    if(x){
      navigate('/about');
    }else{
      navigate('/filter');
    }
  }
  return (
    <div>
      <h1> Home Page </h1>
      <h5> Here we learn About Routing concept in reactJS</h5>
      <button onClick={() => navTopage('/about')}>Go to About Page</button>
      <br />
      <br />
      <button onClick={() => navTopage('/filter')}>Go to Filter Page</button>
      <br />
      <br />
      <h5> if x = true , then Go to about Page else : filter Page </h5>
      <h6>x = true</h6>
      <button onClick={() => navWithCondition()}>Go with COndition</button>
    </div>
  )
}
