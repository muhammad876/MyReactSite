import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import {DISHES} from './dishes';
import HomePage from './homepage';
import {Route,Switch,Redirect} from 'react-router-dom';
import Contact from './contact';
import { COMMENTS } from './comments';
import { PROMOTIONS } from './promotions';
import { LEADERS } from './leaders';
import  DishDetail from './dishDetails';
import About from './aboutus';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
      }
   
    render(){
      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
      const Homepage = () => {
        return(
            <HomePage
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
      const Leaders = () =>{
        return (
           <About leaders={this.state.leaders}></About>
        );
      }
        return(
            <div>
            <Header></Header>
            <Switch>
              <Route path='/home' component={Homepage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={()=><Contact></Contact>}  />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route path='/aboutus' component={Leaders}></Route>
              <Redirect to="/home" />
          </Switch>
            {/* <Menu dishes={this.state.dishes}></Menu> */}
            <Footer></Footer>
            </div>
        );
    }
}
export default Home;