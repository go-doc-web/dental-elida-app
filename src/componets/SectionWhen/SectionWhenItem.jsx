import React from 'react';
import Image from 'next/image';

const SectionWhenItem = ({ title, icon }) => {
  return (
    <li className="when-list_item">
      <div className="icon-wrapper">
        <Image
          src={icon}
          alt={title}
          width={36}
          // height={32}
          // className="section-img"
          sizes="100vw"
          priority={true}
        />
      </div>
      <h3 className="when-list_item-title">{title}</h3>
    </li>
  );
};

export default SectionWhenItem;
