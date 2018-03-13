import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, HeaderPicture } from './common';

class OrderOverview extends Component {
  renderTotalPrice(products) {
    if (products === undefined) {
      return (
        <CardSection>
          <Text style={styles.itemTextStyle}>Total price</Text>
          <Text style={styles.priceTotalTextStyle}>£0</Text>
        </CardSection>
      );
    }
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      totalPrice += products[i].price;
    }
    return (
      <CardSection>
        <Text style={styles.itemTextStyle}>Total price</Text>
        <Text style={styles.priceTotalTextStyle}>£{totalPrice}</Text>
      </CardSection>
    );
  }

  render() {
    const { itemTextStyle, selectedTextStyle, priceTextStyle } = styles;
    return (
      <View>
        <HeaderPicture />
        <Card>
          <CardSection>
            <Text style={selectedTextStyle}>Order Overview</Text>
          </CardSection>
          <CardSection>
            <Text style={itemTextStyle}>Payment Method</Text>
            <Text style={priceTextStyle}>Cash On Delivery</Text>
          </CardSection>
          <CardSection>
          <Text style={itemTextStyle}>Delivery Address</Text>
          <Text style={priceTextStyle}>{this.props.address}</Text>
          </CardSection>
          <CardSection>
          <Text style={itemTextStyle} />
          <Text style={priceTextStyle}>{this.props.postcode}</Text>
          </CardSection>
          <CardSection>
          <Text style={itemTextStyle} />
          <Text style={priceTextStyle}>{this.props.city}</Text>
          </CardSection>
          {this.renderTotalPrice(this.props.products)}
        </Card>
        <CardSection style={{ borderBottomWidth: 0 }}>
        <Button>
          ORDER
        </Button>
        </CardSection>
      </View>
    );
  }
}
const styles = {
  selectedTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    flex: 1
  },
  itemTextStyle: {
    fontSize: 16,
    flex: 2
  },
  priceTextStyle: {
    fontSize: 16,
    flex: 2
  },
  priceTotalTextStyle: {
    fontSize: 16,
    flex: 0.5
  }
};

const mapStateToProps = ({ details, product }) => {
  const { name, address, postcode, city } = details;
  return { name, address, postcode, city, products: product.products };
};

export default connect(mapStateToProps)(OrderOverview);
