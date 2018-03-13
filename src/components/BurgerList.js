import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { productUpdate, priceItemUpdate, addProduct } from '../actions';

class BurgerList extends Component {
  onButtonPress() {
    this.props.addProduct(this.props.product);
  }

  render() {
    const { onions, mustard, ketchup, pickles, cheese, bacon, price } = this.props.product;

    return (
      <View>
        <Card>
          <Text style={styles.nameTextStyle}>Burger</Text>
          <CardSection>
            <Text style={styles.toppingsTextStyle}>Toppings</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>Onions</Text>
            <Switch
              value={onions}
              onValueChange={value => this.props.productUpdate({ prop: 'onions', value })}
            />
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>Mustard</Text>
            <Switch
              value={mustard}
              onValueChange={value => this.props.productUpdate({ prop: 'mustard', value })}
            />
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>Ketchup</Text>
            <Switch
              value={ketchup}
              onValueChange={value => this.props.productUpdate({ prop: 'ketchup', value })}
            />
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>Pickles</Text>
            <Switch
              value={pickles}
              onValueChange={value => this.props.productUpdate({ prop: 'pickles', value })}
            />
          </CardSection>
          <CardSection>
            <Text style={styles.toppingsTextStyle}>Extra Toppings</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>Cheese</Text>
            <Switch
              value={cheese}
              onValueChange={value => this.props.priceItemUpdate({ prop: 'cheese', value, price })}
            />
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>Bacon</Text>
            <Switch
              value={bacon}
              onValueChange={value => this.props.priceItemUpdate({ prop: 'bacon', value, price })}
            />
          </CardSection>
        </Card>

        <Card>
          <CardSection>
          <Text style={styles.itemTextStyle}>Price</Text>
          <Text style={styles.priceTextStyle}>£{price}</Text>
          </CardSection>
        </Card>

        <CardSection style={{ borderBottomWidth: 0 }}>
        <Button onPress={this.onButtonPress.bind(this)}>
          ADD
        </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  nameTextStyle: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center'
  },
  toppingsTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    flex: 1
  },
  itemTextStyle: {
    fontSize: 16,
    flex: 2
  },
  priceTextStyle: {
    fontSize: 16,
    flex: 0.2
  }
};

const mapStateToProps = ({ product }) => {
  return {
    product: product.product,
    products: product.products
  };
};

export default connect(mapStateToProps, { productUpdate, priceItemUpdate, addProduct })(BurgerList);
