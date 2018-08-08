import React from 'react';

import {openCreateTeamModal} from 'app/actionCreators/modal';
import {tct} from 'app/locale';

import PluginRow from './pluginRow';

export default class PluginList extends React.Component {
  render() {
    const {urlPrefix} = this.props;
    const pluginNodes = this.props.pluginList.map((plugin, idx) => {
      return (
        <PluginRow
          name={plugin.name}
          errors={plugin.errors}
          smileStatus={plugin.smileStatus}
          urlPrefix={urlPrefix}
        />
      );
    });

    if (pluginNodes.length !== 0) {
      return pluginNodes;
    }
  }
}
