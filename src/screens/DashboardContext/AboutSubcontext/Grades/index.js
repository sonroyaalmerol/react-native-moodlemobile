import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';

import {Page} from '../../../../components';
import Provider from './provider';
import {styles} from './styles';
import Locales from '../../../../locales';

const Grades = ({navigation}) => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    Provider.getGrades().then(data => setGrades(data));
  }, []);

  return (
    <Page
      appbar={{
        title: Locales.t('grades'),
        canGoBack: navigation.canGoBack(),
        goBack: navigation.goBack,
      }}>
      <View>
        {grades.map(({course, totalgrade}, index) => (
          <Card
            key={index}
            style={{
              ...styles.marginHorizontalDefault,
              ...styles.marginTopDefault,
              ...styles.paddingHorizontalDefault,
              ...styles.paddingVerticalDefault,
            }}>
            <View style={{...styles.rowDirection}}>
              <Text style={{...styles.gradeTitleStyle}}>{course}</Text>

              <View style={{...styles.gradeTextStyle}}>
                <Text style={{...styles.whiteColor}}>{totalgrade}</Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </Page>
  );
};

export default Grades;
