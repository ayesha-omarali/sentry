import React from 'react';
import createReactClass from 'create-react-class';
import {Flex} from 'grid-emotion';
import Table from './table';

const PluginHellth = createReactClass({
  render() {
    return (
      <Flex className="organization-home" justify="center" align="center">
        <Table />
      </Flex>
    );
  },
});

export default PluginHellth;
