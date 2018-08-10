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
        logger: 'Jira',
        count: 78127,
      },
      {
        logger: 'Slack',
        count: 18444,
      },
      {
        logger: 'Splunk',
        count: 7183,
      },
      {
        logger: 'Victor Ops',
        count: 6314,
      },
      {
        logger: 'Hipchat',
        count: 10441,
      },
      {
        logger: 'Flowdock',
        count: 4510,
      },

      {
        logger: 'Pushover',
        count: 2851,
      },
      {
        logger: 'Twilio',
        count: 2058,
      },
      {
        logger: 'PagerDuty',
        count: 662,
      },
      {
        logger: 'Ops Genie',
        count: 480,
      },
      {
        logger: 'Amazon SQS',
        count: 358,
      },
      {
        logger: 'GitHub',
        count: 265,
      },
      {
        logger: 'IRC',
        count: 253,
      },
      {
        logger: 'Campfire',
        count: 104,
      },
      {
        logger: 'VSTS',
        count: 45,
      },
      {
        logger: 'Gitlab',
        count: 42,
      },
      {
        logger: 'Visualstudio',
        count: 23,
      },
      {
        logger: 'Phabricator',
        count: 21,
      },
      {
        logger: 'Bitbucket',
        count: 17,
      },
      {
        logger: 'Redmine',
        count: 6,
      },
      {
        logger: 'Clubhouse',
        count: 2,
      },
      {
        logger: 'Asana',
        count: 2,
      },
      {
        logger: 'Groveio',
        count: 1,
      },
    ];

    return (
      <div className="team-list" style={{flex: 'auto', padding: 20}}>
        <Panel>
          <PanelHeader>
            <Box flex="1">{t('Plugins Status')}</Box>
            <Box w={112} >
              {t('Errors')}
            </Box>
            <Box w={150} pl={57}>
              {t('Details')}
            </Box>
          </PanelHeader>
          <PanelBody>
            <PluginList
              urlPrefix={urlPrefix}
              pluginList={pluginList}
              organization={this.props.organization}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}
