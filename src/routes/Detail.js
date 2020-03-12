import React from "react";





class Detail extends React.Component{


    componentDidMount() {
        const {location, history} = this.props;
        console.log(location);
        console.log(history);
        
        if(location.state === undefined)
        {
            console.log(location);
            history.push("/");
        }
    }
    render(){
        
        const {location} = this.props
        console.log(location);
        if(location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }
  
    }

}


export default Detail;