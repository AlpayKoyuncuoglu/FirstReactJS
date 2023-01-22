import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // this.
 
  state = {
    categories: [
      { categoryId: 1, categoryName: "beverages" },
      { categoryId: 2, categoryName: "condiments" },
      { categoryId: 3, categoryName: "beverages" },
    ],
    currentCategory: "",
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* <h3>this.state.counter</h3> */}
        <br></br>
        <br></br>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
          {/* <ListGroupItem active>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
