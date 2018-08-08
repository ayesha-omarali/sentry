import React from 'react';
import {Panel, PanelBody, PanelHeader} from 'app/components/panels';
import {t, tct} from 'app/locale';
import {Box} from 'grid-emotion';

import PluginList from './pluginList';

export default class Table extends React.Component {
  render() {
    const urlPrefix = 'organizations/sentry/hellth/';
    const pluginList = [
      {
        name: 'OpsGenie',
        errors: 123,
        smileStatus: 4,
      },
      {
        name: 'Jira',
        errors: 119,
        smileStatus: 4,
      },
      {
        name: 'VSTS',
        errors: 232,
        smileStatus: 4,
      },
      {
        name: 'Trello',
        errors: 444,
        smileStatus: 4,
      },
    ];
    return (
      <div className="team-list" style={{flex: 'auto', padding: 20}}>
        <Panel>
          <PanelHeader>
            <Box flex="1">{t('Plugins Status')}</Box>
            <Box w={150} pl={42}>
              {t('Errors')}
            </Box>
            <Box w={150} pl={57}>
              {t('Details')}
            </Box>
          </PanelHeader>
          <PanelBody>
            <PluginList urlPrefix={urlPrefix} pluginList={pluginList} />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}
