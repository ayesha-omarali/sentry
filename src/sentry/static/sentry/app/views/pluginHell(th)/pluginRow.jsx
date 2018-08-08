import {Box} from 'grid-emotion';
import {Link} from 'react-router';
import React from 'react';
import createReactClass from 'create-react-class';
import Button from 'app/components/buttons/button';

import {addErrorMessage, addSuccessMessage} from 'app/actionCreators/indicator';
import {joinTeam, leaveTeam} from 'app/actionCreators/teams';
import {t, tct} from 'app/locale';
import {PanelItem} from 'app/components/panels';

const PluginRow = createReactClass({
  render() {
    const {name, errors, smileStatus, urlPrefix, organization} = this.props;
    return (
      <PanelItem p={0} align="center">
        <Box flex="1" p={2}>
          <Link to={`${urlPrefix}details/${name}/`}>{name}</Link>
        </Box>
        <Box w={150}>{errors}</Box>
        <Box p={2} align="right">
          <Button size="small" to={`/organizations/${organization.slug}/hellth/${name}`}>
            {t('View Details')}
          </Button>
        </Box>}
      </PanelItem>
    );
  },
});

export default PluginRow;
