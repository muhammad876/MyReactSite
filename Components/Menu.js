import React,{Component} from 'react';
import {CardImgOverlay} from 'reactstrap';
import { Card, CardImg,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
      
    }      
render(){
   const presentMenu =this.props.dishes.map((itr)=>{
        return (
<div  className="col-12 col-md-5 m-1">
     <Link to={`/menu/${itr.id}`}>
      <Card key={itr.id}>
        <CardImg top width="100%" src={itr.image} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>{itr.name}</CardTitle>
        </CardImgOverlay>
      </Card>  
      </Link>
</div> 
        );
    });
    return (
      <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Menu</h3>
                  <hr />
              </div>                
          </div>
          <div className="row">
              {presentMenu}
          </div>
      </div>
  );
}
}
export default Menu;