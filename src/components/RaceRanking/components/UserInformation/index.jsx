import PropTypes from 'prop-types';
import { memo } from 'react';
import { LAP_LENGTH } from '../../utils/constant';

const UserInformationWithoutMemo = ({ raceRankingUser }) => {
  return (
    <div className="user-information" key={raceRankingUser.id}>
      <img alt="" src={raceRankingUser.base64} />
      <label htmlFor="race-progress-meter">{raceRankingUser.fullName}</label>
      <meter
        id="race-progress-meter"
        value={raceRankingUser.progress % LAP_LENGTH}
        min="0"
        max={LAP_LENGTH}
      />
      <i className="km">
        {raceRankingUser.progress.toFixed(2)} km (Round{' '}
        {Math.floor(raceRankingUser.progress / LAP_LENGTH) + 1})
      </i>
    </div>
  );
};

UserInformationWithoutMemo.propTypes = {
  raceRankingUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
};

export const UserInformation = memo(UserInformationWithoutMemo);
