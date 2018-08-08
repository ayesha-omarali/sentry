import {Box} from 'grid-emotion';
import {Link} from 'react-router';
import React from 'react';
import createReactClass from 'create-react-class';

import {addErrorMessage, addSuccessMessage} from 'app/actionCreators/indicator';
import {joinTeam, leaveTeam} from 'app/actionCreators/teams';
import {t, tct} from 'app/locale';
import {PanelItem} from 'app/components/panels';

const PluginRow = createReactClass({
  render() {
    const {name, errors, smileStatus, urlPrefix} = this.props;

    return (
      <PanelItem p={0} align="center">
        <Box flex="1" p={2}>
          <Link to={`${urlPrefix}details/${name}/`}>{name}</Link>
        </Box>
        <Box w={150}>{errors}</Box>
        <Box p={2}>
          <a className="btn btn-default btn-sm">{t('View Details')}</a>
        </Box>
      </PanelItem>
    );
  },
});

export default PluginRow;
