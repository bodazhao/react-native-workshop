import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { selectEvents, selectEventsLoading, selectEventsRefreshing } from '../selectors';

import { connect } from 'react-redux';
import { loadEvents } from '../actions';

class EventsList extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>First</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>Last</Text>
      </View>
    );
  }
}
export default connect(
  state => ({
    events: selectEvents(state),
    loading: selectEventsLoading(state),
    refreshing: selectEventsRefreshing(state),
  }),
  { loadEvents }
)(EventsList);
