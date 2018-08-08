import React from 'react';
import createReactClass from 'create-react-class';
import {Flex} from 'grid-emotion';
import Table from './table';
import OrganizationState from 'app/mixins/organizationState';

const PluginHellth = createReactClass({
  mixins: [OrganizationState],

  render() {
    console.log('ORG', this.context.organization, this.getOrganization());
    return (
      <Flex className="organization-home" justify="center" align="center">
        <Table organization={this.context.organization} />
      </Flex>
    );
  },
});

export default PluginHellth;
