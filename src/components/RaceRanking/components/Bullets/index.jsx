import { memo } from 'react';

const BulletsWithoutMemo = ({ length }) => {
  const bulletElements = Array.from({ length }).map((v, i) => (
    <span key={i}>{i + 1}</span>
  ));

  return <div className="bullets">{bulletElements}</div>;
};

export const Bullets = memo(BulletsWithoutMemo);
