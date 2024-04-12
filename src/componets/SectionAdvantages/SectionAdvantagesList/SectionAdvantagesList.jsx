import React from 'react';
import Image from 'next/image';
import css from './SectionAdvantagesList.module.css';

const SectionAdvantagesList = ({ title, imgUrl, description }) => {
  return (
    <>
      <div className="section-advantages_img_thumb">
        <Image
          src={imgUrl}
          alt={title}
          width={335}
          height={335}
          className="section-img"
          sizes="100vw"
          priority={true}
        />
      </div>
      <div className="section-advantages_content">
        <h3 className="section-advantages_content-title">Skilled Oral Surgeons</h3>
        <p className="section-advantages_content-description">{description}</p>
      </div>
    </>
  );
};

export default SectionAdvantagesList;
