import React from 'react';
import createReactClass from 'create-react-class';
import {Flex} from 'grid-emotion';
import PluginIcon from 'app/plugins/components/pluginIcon';
import Form from 'app/views/settings/components/forms/form';
import styled from 'react-emotion';
import JsonForm from 'app/views/settings/components/forms/jsonForm';
import {PanelAlert} from 'app/components/panels';

import {Panel, PanelBody, PanelHeader} from 'app/components/panels';
import {t, tct} from 'app/locale';
import {Box} from 'grid-emotion';
import {PanelItem} from 'app/components/panels';

const pluginDetails = createReactClass({
  render() {
    const tests = [
      {
        name: 'Configure',
        result: 'Failure',
        error: '500 INTERNAL SERVER ERROR',
      },
      {
        name: 'Link Issue',
        result: 'Failure',
        error: '500 INTERNAL SERVER ERROR',
      },
      {
        name: 'Create Issue',
        result: 'Failure',
        error: '500 INTERNAL SERVER ERROR',
      },
      {
        name: 'Sync Issue Status',
        result: 'Failure',
        error: '500 INTERNAL SERVER ERROR',
      },
      {
        name: 'Sync Issue Comment',
        result: 'Failure',
        error: '500 INTERNAL SERVER ERROR',
      },
      {
        name: 'Sync Issue Assignee',
        result: 'Failure',
        error: '500 INTERNAL SERVER ERROR',
      },
      {
        name: 'Create Repository',
        result: 'Failure',
        error: '500 INTERNAL SERVER ERROR',
      },
    ];

    const testData = tests.map((plugin, idx) => {
      return (
        <PanelItem p={0} align="center">
          <Box flex="1" p={2}>
            {plugin.name}
          </Box>
          <Box w={150}>{plugin.result}</Box>
          <Box p={2} align="right">
            {' '}
            {plugin.error}
          </Box>
        </PanelItem>
      );
    });
    const pluginInfo = {
      name: 'Jira',
      errors: 123,
      pluginStatus: 'Under Maintenance',
      smileStatus: 4,
    };

    return (
      <PluginDetails>
        <HeaderContainer
          p={2}
          justify="space-between"
          align="left"
          className="sub-header"
          style={{marginBottom: 16}}
        >
          <HeaderName style={{alignItems: 'center', flexDirection: 'row'}}>
            <strong>{t(`Plugin Hell(th) of ${pluginInfo.name}`)}</strong>
            <PluginIcon p={2} pl={5} size={50} pluginId={pluginInfo.name.toLowerCase()} />
          </HeaderName>
        </HeaderContainer>

        <div className="team-list" style={{flex: 'auto', padding: 20}}>
          <Panel>
            <PanelHeader>
              <Box flex="1">{t('Test')}</Box>
              <Box w={150} pl={42}>
                {t('Test Result')}
              </Box>
              <Box w={150} pl={57}>
                {t('Error Received')}
              </Box>
            </PanelHeader>
            <PanelBody> {testData} </PanelBody>
          </Panel>
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

const HeaderContainer = styled(Flex)`
  font-size: 18px;
`;

const HeaderName = styled(Flex)`
  align: center;
`;

const Card = styled(Flex)`
  margin-top: 1em;
  background-color: #fff;
  width: 600px;
  min-height: 100px;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.02) 5px 5px 10px 10px;
`;

const CardHeader = styled(Flex)`
  width: 100%;
  padding: 1em;
  text-align: center;
  border-bottom: 1px solid #dedede;
  background-color: #fafafa;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
`;

const CardContent = styled(Flex)`
  text-align: center;
  padding: 1em 1em 1.5em 1em;
`;

{
  /*<div style={{flex:'auto', padding:20}}>*/
}
{
  /*<Form>*/
}
{
  /*<JsonForm*/
}
{
  /*title={t('Digests')}*/
}
{
  /*fields={[{name: "Test 1", type: "text"}, {name: "Test 2", type: "text"}]}*/
}
{
  /*renderHeader={() => (*/
}
{
  /*<PanelAlert type="info">*/
}
{
  /*{t(*/
}
{
  /*'Sentry will automatically digest alerts sent ' +*/
}
{
  /*'by some services to avoid flooding your inbox ' +*/
}
{
  /*'with individual issue notifications. To control ' +*/
}
{
  /*'how frequently notifications are delivered, use ' +*/
}
{
  /*'the sliders below.'*/
}
{
  /*)}*/
}
{
  /*</PanelAlert>*/
}
{
  /*)}*/
}
{
  /*/>*/
}
{
  /*</Form>*/
}
{
  /*</div>*/
}
