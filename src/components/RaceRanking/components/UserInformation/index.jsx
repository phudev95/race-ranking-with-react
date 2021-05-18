import { memo } from "react";
import { LAP_LENGTH } from "../../utils/constant";

const UserInformationWithoutMemo = ({ raceRankingUser }) => {
  return (
    <div className="user-information" key={raceRankingUser.id}>
      <img alt="" src={raceRankingUser.image} />
      <label>{raceRankingUser.fullName}</label>
      <meter
        value={raceRankingUser.progress % LAP_LENGTH}
        min="0"
        max={LAP_LENGTH}
      />
      <i className="km">
        {raceRankingUser.progress.toFixed(2)} km (Round{" "}
        {Math.floor(raceRankingUser.progress / LAP_LENGTH) + 1})
      </i>
    </div>
  );
};

export const UserInformation = memo(UserInformationWithoutMemo);
