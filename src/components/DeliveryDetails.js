import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, HeaderPicture } from './common';
import { onDetailsChange } from '../actions';

class DeliveryDetails extends Component {
  render() {
    return (
      <View>
        <HeaderPicture />
        <Card>
          <CardSection>
            <Text style={styles.itemTextStyle}>Fill In Delivery Details</Text>
          </CardSection>
          <CardSection>
            <Input
              label="Full Name"
              placeholder="John Doe"
              onChangeText={value => this.props.onDetailsChange({ prop: 'name', value })}
              value={this.props.name}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Address"
              placeholder="24 City Road"
              onChangeText={value => this.props.onDetailsChange({ prop: 'address', value })}
              value={this.props.address}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Postcode"
              placeholder="CF10 2XF"
              onChangeText={value => this.props.onDetailsChange({ prop: 'postcode', value })}
              value={this.props.postcode}
            />
          </CardSection>
          <CardSection>
            <Input
              label="City"
              placeholder="Cardiff"
              onChangeText={value => this.props.onDetailsChange({ prop: 'city', value })}
              value={this.props.city}
            />
          </CardSection>
        </Card>
        <CardSection style={{ borderBottomWidth: 0 }}>
        <Button onPress={() => Actions.orderOverview()}>
          PROCEED TO ORDER
        </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  itemTextStyle: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center'
  }
};

const mapStateToProps = ({ details }) => {
  const { name, address, postcode, city } = details;
  return { name, address, postcode, city };
};

export default connect(mapStateToProps, { onDetailsChange })(DeliveryDetails);
