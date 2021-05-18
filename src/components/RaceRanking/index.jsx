/* eslint-disable no-restricted-globals */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bullets } from "./components/Bullets";
import { UserList } from "./components/UserList";
import { raceRankingFactory, SORT_TYPE } from "./utils/race-ranking-factory";

const fetchUsers = raceRankingFactory();

export const RaceRanking = () => {
  const [raceRankingUsers, setRaceRankingUsers] = useState([]);
  const timeRef = useRef();

  const isRandomMode = useMemo(() => location.search === "?random", []);
  const time = useMemo(() => 1000 / (isRandomMode ? 60 : 10), [isRandomMode]);

  const refreshUsersList = useCallback(() => {
    const users = fetchUsers(isRandomMode ? SORT_TYPE.RANDOM : SORT_TYPE.FIXED);
    setRaceRankingUsers(() => [...users]);
  }, [isRandomMode]);

  useEffect(() => {
    // Initial render race ranking users
    refreshUsersList();

    // Auto update new infomation of the list race ranking
    timeRef.current = setInterval(() => refreshUsersList(), time);

    return () => {
      clearInterval(timeRef.current);
    };
  }, [refreshUsersList, time]);

  return (
    <div className="race-ranking">
      <Bullets length={raceRankingUsers.length} />
      <UserList raceRankingUsers={raceRankingUsers} />
    </div>
  );
};
