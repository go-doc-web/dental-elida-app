import React from 'react';
import Link from 'next/link';
import css from './AddressPanel.module.css';

import CallIcon from '@/componets/Icon/CallIcon';
import Location from '@/componets/Icon/LocationIcon';
import { constans } from '@/constants/const.header';
import removeDashInTelNumber from '@/helpers';

const AddressPanel = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperTel}>
        <CallIcon />
        <Link className={css.linkTel} href={`tel:${removeDashInTelNumber(constans.numberTel)}`}>
          {constans.numberTel}
        </Link>
      </div>
      <div className={css.wrapperAddress}>
        <Location />
        <Link className={css.linkAddress} href={'#'}>
          {constans.location}
        </Link>
      </div>
    </div>
  );
};

export default AddressPanel;
