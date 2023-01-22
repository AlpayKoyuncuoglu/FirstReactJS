import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import { Component } from "react";

export default class App extends Component {
  state = { currentCategory: "" };

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
  };

  render() {
    let titleProduct = "Product List2";
    let productInfo = { title: "ProductList" };
    let titleCategory = "Product List2";
    let categoryInfo = { title: "CategoryList" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs={3}>
              {/* <CategoryList title="Category List" /> */}
              {/* <CategoryList title={titleCategory} /> */}
              <CategoryList
                changeCategory={this.changeCategory}
                info={categoryInfo}
                currentCategory={this.state.currentCategory}
              ></CategoryList>
            </Col>
            <Col xs="9">
              {/* <ProductList title="Product List" /> */}
              {/* <ProductList title={titleProduct} /> */}
              <ProductList currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
