import React from 'react';
//import Potato from './Potato.js';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
/*
function Food(props){
  console.log(props.fav);
  return <h1>like Potato</h1>

}*/
// props.fav -> {fav} javascript6에서 지원함
// 밑에처럼 <Food 컴포넌트에 props형태로 데이터를 넣을 수 있는데 이러면 Food()함수에서 첫번째 매개변수 위치로 할당되서 전달됨
// function Food({name, picture, rating}){

// return (<div><h1>like {name}</h1>
//         <img src = {picture} alt = {name}></img>
//         <h3>{rating}</h3>
// </div>
// );
//}


// const foodILike= [
//   {
//     name : "Kimchi",
//     picture : "https://i.imgur.com/sW1WNds.jpeg",
//     rating : 5
//   },
//   {
//     name : "Pizza",
//     picture : "https://i.imgur.com/J9osDN7.jpg",
//     rating: 4.6
//   }
// ]


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
// Food.propTypes = {
//     name : PropTypes.string.isRequired,
//     picture : PropTypes.string.isRequired,
//     rating : PropTypes.number.isRequired

//  }


// function App() {
//   return (
//     <div className="App">
//      <h1>Hello!</h1>
//      {foodILike.map((dish, index) => 
//  <Food name ={dish.name.toString()} picture = {dish.picture} rating = {dish.rating} key = {index}/>)}
//     </div>

//   );
// }

//JSX 개념 javascript HTML 사용해서 랜더링할 페이지 생성해줌
//component 는 HTML을 반환하는 react가 동작하는게 이 파트




//state 예제
// react는 class component의 render 메소드를 자동으로 실행
// class App extends React.Component{

//   //동적 데이터
//   state = {
//     count : 0,

//   };

//   add = () => {
//     //this.state.count +=1; current쓰면 리액트가 현재의 state를 반환해줘서 그걸로 처리가 가능
//     this.setState(current =>{count : current.state.count + 1});
//   };
//   minus = () => {
//     //this.state.count -=1;
//     this.setState({count : this.state.count-1});
//   };//참고로 state 변경후 render함수 재호출로 refresh해야 표시가됨
// // state를 직접변경하지 말고 set등을 사용해서 바꾸는걸 추천해줌 setState하면 인식하고 랜더까지 자동으로 리액트가 처리
// // 변경이 발생한 부분만 리프레쉬처리해줌 가상 DOM을 유지하고 있기때문에 빨리 처리가 가능

// componentDidMount(){
//   console.log("component rendered");
// }
// componentDidUpdate(){
//   console.log("i just updated");
// }
// componentWillUnmount(){
//   console.log("Good bye my old friend");
// }
// render(){
//   console.log("component render");
//   return (<div>
//     <h1>The number is : {this.state.count}</h1>
//     <button onClick={this.add}>Add</button>
//     <button onClick={this.minus}>Minus</button>
//     </div>
//   );
//   }


// }

//component 라이프 사이클
// mounting updating unmounting(컴포넌트 사망 : 다른페이지 이동, render재호출 등등)
// constructor -> JS에서 클래스 생성때 만드는 함수였던 것 render전에 호출됨




class Home extends React.Component {
  state = {
    isLoading: true,
    moives: []
  };


  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    // setTimeout(() =>{
    //   this.setState({isLoading : false});
    // }, 6000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (<div className="loader">
          <span className="loader_text">Loading.....</span>
        </div>) : (
            <div className="movies">
              {movies.map(movie => {
                console.log(movie);
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres= {movie.genres}
                />
              })}
            </div>


          )}
      </section>
    );
  }
}



export default Home;


//redux state 유지 가능 moive 리스트 매번 불러오는거 막기

