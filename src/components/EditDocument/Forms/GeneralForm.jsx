import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, SelectField } from '../../FormFields';

const provinces = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '1',
    label: 'فارس',
  },
  {
    value: '2',
    label: 'اصفهان',
  },
  {
    value: '3',
    label: 'تهران',
  },
  {
    value: '4',
    label: 'خوزستان',
  },
];

const cities = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '11',
    label: 'شیراز',
  },
  {
    value: '22',
    label: 'اصفهان',
  },
  {
    value: '33',
    label: 'تهران',
  },
  {
    value: '44',
    label: 'اهواز',
  },
];

const damageTypes = [
  {
    value: null,
    label: 'None',
  },
  {
    value: '111',
    label: '  ثالث مالی ',
  },
  {
    value: '222',
    label: 'بدنه',
  },
];
const insurerBranches = [
  { label: 'مرکزی', value: 'markazi' },
  { label: 'شرق', value: 'shargh' },
];
const evaluators = [
  { label: 'آرمان مشک زاده', value: 'armanMoshkzade' },
  { label: 'علی علوی', value: 'aliAlavi' },
];
export default function GeneralForm(props) {
  const {
    formField: {
      damageType,
      province,
      city,
      accidentLocation,
      visitingLocation,
      branch,
      evaluator,
    },
  } = props;
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom align='right'>
        مشخصات عمومی حادثه
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={damageType.name}
            label={damageType.label}
            data={damageTypes}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={province.name}
            label={province.label}
            data={provinces}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            name={accidentLocation.name}
            label={accidentLocation.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={visitingLocation.name}
            label={visitingLocation.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={branch.name}
            label={branch.label}
            data={insurerBranches}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={evaluator.name}
            label={evaluator.label}
            data={evaluators}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
