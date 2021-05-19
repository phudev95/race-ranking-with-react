import PropTypes from 'prop-types';
import { memo } from 'react';

const BulletsWithoutMemo = ({ length }) => {
  const bulletElements = Array.from({ length }).map((v, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={i}>{i + 1}</span>
  ));

  return <div className="bullets">{bulletElements}</div>;
};

BulletsWithoutMemo.propTypes = {
  length: PropTypes.number.isRequired,
};

export const Bullets = memo(BulletsWithoutMemo);
