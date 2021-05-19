/* eslint-disable no-restricted-globals */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bullets } from "./components/Bullets";
import { UserList } from "./components/UserList";
import { raceRankingFactory } from "./utils/race-ranking-factory";
import { getSettings } from "./utils/settings";

export const RaceRanking = () => {
  const [raceRankingUsers, setRaceRankingUsers] = useState([]);

  const intervalRef = useRef();
  const settings = useMemo(() => getSettings(), []);
  const fetchUsers = useMemo(() => raceRankingFactory(), []);

  const refreshUsersList = useCallback(() => {
    const users = fetchUsers(settings.scenario);
    setRaceRankingUsers(() => [...users]);
  }, []);

  useEffect(() => {
    refreshUsersList();

    intervalRef.current = setInterval(refreshUsersList, settings.time);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [refreshUsersList]);

  return (
    <div className="race-ranking">
      <Bullets length={raceRankingUsers.length} />
      <UserList raceRankingUsers={raceRankingUsers} />
    </div>
  );
};
