import React from 'react';
import createReactClass from 'create-react-class';
import {Flex} from 'grid-emotion';
import PluginIcon from 'app/plugins/components/pluginIcon';
import Form from 'app/views/settings/components/forms/form';
import styled from 'react-emotion';
import JsonForm from 'app/views/settings/components/forms/jsonForm';
import {PanelAlert} from 'app/components/panels';
import Button from 'app/components/buttons/button';

import {Panel, PanelBody, PanelHeader} from 'app/components/panels';
import {t, tct} from 'app/locale';
import {Box} from 'grid-emotion';
import {PanelItem} from 'app/components/panels';
import OrganizationState from 'app/mixins/organizationState';
const plugins = {
  plugins: [
    {
      key: 'bitbucket',
      displayName: 'Bitbucket (old plugin)',
      features: ['issueBasic', 'repository'],
      testResults: [
        {
          name: 'Configure',
          result: 'Pass',
        },
        {
          name: 'Link Issue',
          result: 'Pass',
        },
        {
          name: 'Create Issue',
          result: 'Pass',
        },
        {
          name: 'Create Repository',
          result: 'Pass',
        },
      ],
      testScore: 100,
      information: 'Off-brand Github.',
      login: 'To be filled in at a later date.',
      install: 'Ask LB :P.',
    },
    {
      key: 'integrations:bitbucket',
      displayName: 'Bitbucket (new integration)',
      features: ['issueBasic', 'repository'],
      testResults: [
        {
          name: 'Configure',
          result: 'Pass',
        },
        {
          name: 'Link Issue',
          result: 'Pass',
        },
        {
          name: 'Create Issue',
          result: 'Pass',
        },
        {
          name: 'Create Repository',
          result: 'Pass',
        },
      ],
      testScore: 100,
    },
    {
      key: 'vsts',
      displayName: 'Visual Studio Team Services (new integration)',
      features: ['issueBasic', 'issueSync', 'repository'],
      testResults: [
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
      ],
      testScore: 0,
      information:
        'Visual Studio Team Services is Jira + Bitbucket/Github in Microsoft land.',
      login: "App controlled by Cramer. Ping him for access. He'd love to help!",
      install: 'Ask LB :P.',
    },
    {
      key: 'visualstudio',
      displayName: 'Visual Studio Team Services (old plugin)',
      features: ['issueBasic', 'repository'],
      testResults: [
        {
          name: 'Configure',
          result: 'Pass',
        },
        {
          name: 'Link Issue',
          result: 'Pass',
        },
        {
          name: 'Create Issue',
          result: 'Pass',
        },
        {
          name: 'Create Repository',
          result: 'Pass',
        },
      ],
      testScore: 100,
      information:
        'Visual Studio Team Services is Jira + Bitbucket/Github in Microsoft land.',
      login: "App controlled by Cramer. Ping him for access. He'd love to help!",
      install: 'Ask LB :P.',
    },
  ],
};

const pluginDetails = createReactClass({
  mixins: [OrganizationState],

  render() {
    let {orgId, pluginId} = this.props.params;
    const pluginInfo = plugins.plugins.filter(plugin => {
      return plugin.key === pluginId;
    })[0];
    console.log(pluginInfo, pluginId);
    const testData = pluginInfo.testResults.map((test, idx) => {
      return (
        <PanelItem p={0} align="center">
          <Box flex="1" p={2}>
            {test.name}
          </Box>
          <Box w={135}>{test.result}</Box>
          <Box w={170} p={2} align="right">
            {test.error || 'N/A'}
          </Box>
        </PanelItem>
      );
    });

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
            <strong style={{paddingRight:10}}>{t(`Plugin Hell(th) of ${pluginInfo.displayName}`)}</strong>
            <PluginIcon p={2} pl={20} size={50} pluginId={pluginInfo.key} />
          </HeaderName>
          <Button
            align="right"
            size="small"
            to={`/organizations/${this.context.organization.slug}/hellth/`}
            style={{alignItems: 'center'}}
          >
            {t('Back To Plugin Hell(th) Home')}
          </Button>
        </HeaderContainer>

        <CardWrapper>
          <Card>
            <CardHeader>How To Login</CardHeader>
            <CardContent>{t(`${pluginInfo.login}`)}</CardContent>
          </Card>

          <Card>
            <CardHeader>What is it</CardHeader>
            <CardContent>{t(`${pluginInfo.information}`)}</CardContent>
          </Card>

          <Card>
            <CardHeader>How To Install</CardHeader>
            <CardContent>{t(`${pluginInfo.install}`)}</CardContent>
          </Card>
        </CardWrapper>

        <div className="team-list" style={{flex: 'auto', padding: 20}}>
          <Panel>
            <PanelHeader>
              <Box w={150} flex="1">
                {t('Test')}
              </Box>
              <Box w={135}>{t('Test Result')}</Box>
              <Box w={150}>{t('Error Received')}</Box>
            </PanelHeader>
            <PanelBody> {testData} </PanelBody>
          </Panel>
        </div>
      </PluginDetails>
    );
  },
});

export default pluginDetails;

const PluginWrapper = styled(Flex)`
  box-shadow: rgba(0, 0, 0, 0.02) 5px 5px 10px 10px;
  height: 30px;
  align: right;
`;
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

const CardWrapper = styled(Flex)`
  flex-flow: row;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  align: center;
`;
const Card = styled(Flex)`
  flex-flow: row wrap;
  margin-top: 1em;
  background-color: #fff;
  width: 600px;
  min-height: 100px;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.02) 5px 5px 10px 0px;
  padding-left: 15px;
`;

const CardHeader = styled(Flex)`
  height: 30%;
  width: 100%;
  padding: 1em;
  text-align: center;
  border-bottom: 1px solid #dedede;
  background-color: #fafafa;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  padding-bottom:30px;
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
