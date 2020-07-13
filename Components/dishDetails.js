import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {DISHES} from './dishes';
import { COMMENTS } from './comments';
class DishDetails extends React.Component{
    constructor(props){
        super(props);    
        this.state = {
            dishes: DISHES,
            comments : COMMENTS
        };
    }
render(){
    const comments =this.props.comments.map((itr)=>{
        return (
<div>
<ul class = "list-unstyled">
         <li>{itr.comment}</li>
       <br></br>
         <li>--{itr.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(itr.date)))}</li>
         <li></li>
      </ul>
</div> 
        );
    });
    return (
        <div className="container">
            <div className="row">

             <div  className="col-md-5 m-1">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                     </Breadcrumb>
                     <br></br>
              <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                          <CardTitle>{this.props.dish.name}</CardTitle>
                          <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
              </div>
              <div  className="col-md-5 m-1">
                  <br></br><br></br><br></br><br></br><br></br>
                  <h4>Comments</h4>
                  <br></br>
                  <p>{comments}</p>
              </div>
              </div> 
            </div>
      
        
       
    )
    
}
}
export default DishDetails;