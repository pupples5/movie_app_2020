import React from 'react';
import Potato from './Potato.js';
import PropTypes from "prop-types";

/*
function Food(props){
  console.log(props.fav);
  return <h1>like Potato</h1>

}*/
// props.fav -> {fav} javascript6에서 지원함
// 밑에처럼 <Food 컴포넌트에 props형태로 데이터를 넣을 수 있는데 이러면 Food()함수에서 첫번째 매개변수 위치로 할당되서 전달됨
function Food({name, picture, rating}){
 
return (<div><h1>like {name}</h1>
        <img src = {picture} alt = {name}></img>
        <h3>{rating}</h3>
</div>
);
}


const foodILike= [
  {
    name : "Kimchi",
    picture : "https://i.imgur.com/sW1WNds.jpeg",
    rating : 5
  },
  {
    name : "Pizza",
    picture : "https://i.imgur.com/J9osDN7.jpg",
    rating: 4.6
  }
]


// js map 개념
/*
friends = ["dal","mark","park","kim"];

freinds.map(fucntion(friend){
  console.log(friend); 
  return friend +"Hi";
})
array에 정의한 function을 실행시키고 그 결과 값을 어레이로 반환해주는 함수
*/

// 내가 얻고싶은 prop 타입을 아래에 명세
Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired

 }


function App() {
  return (
    <div className="App">
     <h1>Hello!</h1>
     {foodILike.map((dish, index) => 
 <Food name ={dish.name.toString()} picture = {dish.picture} rating = {dish.rating} key = {index}/>)}
    </div>
   
  );
}

//JSX 개념 javascript HTML 사용해서 랜더링할 페이지 생성해줌
//component 는 HTML을 반환하는 react가 동작하는게 이 파트
export default App;
