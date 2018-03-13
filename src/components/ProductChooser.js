import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Switch } from 'react-native';
import { Card, CardSection, Button } from './common';
import BurgerList from './BurgerList';
import { productUpdate, addProduct } from '../actions/';

class ProductChooser extends Component {
  onButtonPress() {
    this.props.addProduct(this.props.product);
  }

  checkWhatToRender() {
    const { name } = this.props.product;
    if (name === 'Burger') {
      return this.renderBurger();
    }
    if (name === 'Soft Drinks') {
      return (
        <View>
          <Card>
            <Text style={styles.nameTextStyle}>Soft Drinks</Text>
            <CardSection>
              <Text style={styles.toppingsTextStyle}>Drink Choices</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.itemTextStyle}>Pepsi</Text>
              <Switch
                value={this.props.product.pepsi}
                onValueChange={value => this.props.productUpdate({ prop: 'pepsi', value })}
              />
            </CardSection>
            <CardSection>
              <Text style={styles.itemTextStyle}>Sprite</Text>
              <Switch
                value={this.props.product.sprite}
                onValueChange={value => this.props.productUpdate({ prop: 'sprite', value })}
              />
            </CardSection>
            <CardSection>
              <Text style={styles.itemTextStyle}>Fanta</Text>
              <Switch
                value={this.props.product.fanta}
                onValueChange={value => this.props.productUpdate({ prop: 'fanta', value })}
              />
            </CardSection>
            </Card>
            <Card>
              <CardSection>
              <Text style={styles.itemTextStyle}>Price</Text>
              <Text style={styles.priceTextStyle}>£{this.props.product.price}</Text>
              </CardSection>

            <CardSection style={{ borderBottomWidth: 1 }}>
            <Button onPress={this.onButtonPress.bind(this)}>
              ADD
            </Button>
            </CardSection>
          </Card>
        </View>
      );
    }

    return (
      <View>
        <Card>
        <Text style={styles.nameTextStyle}>{this.props.product.name}</Text>
          <CardSection>
          <Text style={styles.itemTextStyle}>Price</Text>
          <Text style={styles.priceTextStyle}>£{this.props.product.price}</Text>
          </CardSection>
        </Card>

        <Card>
        <CardSection style={{ borderBottomWidth: 1 }}>
        <Button onPress={this.onButtonPress.bind(this)}>
          ADD
        </Button>
        </CardSection>
      </Card>
    </View>
    );
  }

  renderBurger() {
    return <BurgerList />;
  }

  render() {
    return (
      <View>
        {this.checkWhatToRender()}
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
  }
};

const mapStateToProps = ({ product }) => {
  return {
    product: product.product
  };
};

export default connect(mapStateToProps, { productUpdate, addProduct })(ProductChooser);
