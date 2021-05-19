import PropTypes from 'prop-types';
import { UserInformation } from '../UserInformation';

export const UserList = ({ raceRankingUsers }) => {
  return (
    <div className="user-list">
      {raceRankingUsers.map((raceRankingUser) => (
        <UserInformation
          key={raceRankingUser.id}
          raceRankingUser={raceRankingUser}
        />
      ))}
    </div>
  );
};

UserList.propTypes = {
  raceRankingUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      base64: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
    })
  ).isRequired,
};
