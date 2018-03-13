import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { productChoosed } from '../actions';
import { Card, CardSection, Button, HeaderPicture, AddPicture } from './common';

class OrderList extends Component {
  onBurgerButtonPress() {
    const product = {
      name: 'Burger',
      price: 4,
      onions: true,
      mustard: true,
      ketchup: true,
      pickles: true,
      cheese: false,
      bacon: false,
      amount: 1
    };

    this.props.productChoosed(product);
  }

  onFrenchButtonPress() {
    const product = {
      name: 'French Fries',
      price: 4,
      amount: 1
    };

    this.props.productChoosed(product);
  }

  onChiliButtonPress() {
    const product = {
      name: 'Chili Fries',
      price: 4.50,
      amount: 1
    };

    this.props.productChoosed(product);
  }

  onSoftButtonPress() {
    const product = {
      name: 'Soft Drinks',
      pepsi: true,
      sprite: false,
      fanta: false,
      price: 2.50
    };

    this.props.productChoosed(product);
  }

  renderProductList(product, i) {
    return (
      <CardSection key={i}>
        <Text style={styles.itemAddedTextStyle}>{product.name}</Text>
        <Text style={styles.priceAddedTextStyle}>£{product.price}</Text>
      </CardSection>
    );
  }

  renderTotalPrice(products) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      totalPrice += products[i].price;
    }
    return (
      <CardSection>
        <Text style={styles.itemAddedTextStyle}>Total price</Text>
        <Text style={styles.priceAddedTextStyle}>£{totalPrice}</Text>
      </CardSection>
    );
  }

  render() {
    const {
      itemTextStyle,
      priceTextStyle,
      selectedTextStyle
      } = styles;

    return (
      <ScrollView>
        <HeaderPicture />
        <Card>
          <CardSection>
            <Text style={itemTextStyle}>Burger</Text>
            <Text style={priceTextStyle}>£4</Text>
            <AddPicture onPress={this.onBurgerButtonPress.bind(this)} />
          </CardSection>

          <CardSection>
            <Text style={itemTextStyle}>French Fries</Text>
            <Text style={priceTextStyle}>£4</Text>
            <AddPicture onPress={this.onFrenchButtonPress.bind(this)} />
          </CardSection>

          <CardSection>
            <Text style={itemTextStyle}>Chili Fries</Text>
            <Text style={priceTextStyle}>£4.50</Text>
            <AddPicture onPress={this.onChiliButtonPress.bind(this)} />
          </CardSection>

          <CardSection>
            <Text style={itemTextStyle}>Soft Drinks</Text>
            <Text style={priceTextStyle}>£2.50</Text>
            <AddPicture onPress={this.onSoftButtonPress.bind(this)} />
          </CardSection>
        </Card>
        <Card style={{ marginTop: 30 }}>
        <CardSection>
          <Text style={selectedTextStyle}>Selected Items</Text>
        </CardSection>
        {this.props.products.map((product, i) => this.renderProductList(product, i))}
        {this.renderTotalPrice(this.props.products)}
        </Card>
        <CardSection style={{ borderBottomWidth: 0 }}>
        <Button onPress={() => Actions.deliveryDetails()}>
          DELIVERY DETAILS
        </Button>
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  itemTextStyle: {
    flex: 2,
    fontSize: 20
  },
  priceTextStyle: {
    flex: 1,
    fontSize: 20
  },
  selectedTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    flex: 1
  },
  itemAddedTextStyle: {
    fontSize: 16,
    flex: 2
  },
  priceAddedTextStyle: {
    fontSize: 16,
    flex: 0.3
  }
};

const mapStateToProps = ({ product }) => {
  return {
    product: product.product,
    products: product.products
  };
};

export default connect(mapStateToProps, { productChoosed })(OrderList);
