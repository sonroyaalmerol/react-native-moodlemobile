import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import Provider from './provider';
import {Page} from '../../../components';
import Locales from '../../../locales';

const Dashboard = ({navigation}) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    Provider.getDashboardBlocks().then(data => setBlocks(data));
  }, []);

  return (
    <Page
      appbar={{
        title: Locales.t('dashboard'),
      }}>
      {blocks.map(item => (
        <item.Block key={item.title} title={item.title} />
      ))}
    </Page>
  );
};

export default Dashboard;
