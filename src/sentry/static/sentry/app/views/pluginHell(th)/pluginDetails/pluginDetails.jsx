import React from 'react';
import createReactClass from 'create-react-class';
import {Flex} from 'grid-emotion';
import PluginIcon from 'app/plugins/components/pluginIcon';
import {t} from 'app/locale';
import SettingsPageHeader from 'app/views/settings/components/settingsPageHeader';
import Form from 'app/views/settings/components/forms/form';
import styled from 'react-emotion';
import JsonForm from 'app/views/settings/components/forms/jsonForm';
import {PanelAlert} from 'app/components/panels';

const pluginDetails = createReactClass({
  render() {
    const pluginInfo = {
      name: 'Jira',
      errors: 123,
      pluginStatus: 'Under Maintenance',
      smileStatus: 4,
    };
    return (
      <PluginDetails>
        <Header
          p={2}
          justify="space-between"
          align="center"
          className="sub-header"
          style={{marginBottom: 16}}
        >
          <strong>{t(`Plugin Hell(th) of ${pluginInfo.name}`)}</strong>
        </Header>
        {/*<SettingsPageHeader*/}
        {/*title={t(`Plugin Hell(th) of ${pluginInfo.name}`)}*/}
        {/*style={{paddingLeft: 20, paddingTop: 20}}*/}
        {/*/>*/}
        <Flex className="organization-home" justify="center" align="center">
          Something will be here soon (:
          <PluginIcon size={36} pluginId={pluginInfo.name.toLowerCase()} />
        </Flex>
        <div style={{flex: 'auto', padding: 20}}>
          <Form>
            <JsonForm
              title={t('Digests')}
              fields={[{name: 'Test 1', type: 'text'}, {name: 'Test 2', type: 'text'}]}
              renderHeader={() => (
                <PanelAlert type="info">
                  {t(
                    'Sentry will automatically digest alerts sent ' +
                      'by some services to avoid flooding your inbox ' +
                      'with individual issue notifications. To control ' +
                      'how frequently notifications are delivered, use ' +
                      'the sliders below.'
                  )}
                </PanelAlert>
              )}
            />
          </Form>
        </div>
      </PluginDetails>
    );
  },
});

export default pluginDetails;

const PluginDetails = styled('div')`
  .control-group {
    margin-bottom: 0; /* Do not want the global control-group margins  */
  }
`;

const Header = styled(Flex)`
  font-size: 18px;
`;
