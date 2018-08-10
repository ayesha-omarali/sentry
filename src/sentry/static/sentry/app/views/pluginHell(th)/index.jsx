import React from 'react';
import createReactClass from 'create-react-class';
import {Flex} from 'grid-emotion';
import Table from './table';
import OrganizationState from 'app/mixins/organizationState';
import styled from 'react-emotion';
import {t} from 'app/locale';

const PluginHellth = createReactClass({
  mixins: [OrganizationState],

  render() {
    console.log('ORG', this.context.organization, this.getOrganization());
    return (
      <PluginHealth>
        <Header
          p={2}
          pl={21}
          justify="space-between"
          align="center"
          className="sub-header"
          style={{marginBottom: 16}}
        >
          <strong>{t(`Plugin Hell(th)`)}</strong>
        </Header>
        <Flex className="organization-home" justify="center" align="center">
          <Table organization={this.context.organization} />
        </Flex>
      </PluginHealth>
    );
  },
});{}

const PluginHealth = styled('div')`
  .control-group {
    margin-bottom: 0; /* Do not want the global control-group margins  */
  }
`;

const Header = styled(Flex)`
  font-size: 18px;
`;

export default PluginHellth;
