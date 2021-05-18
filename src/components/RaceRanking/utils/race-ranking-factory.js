import { USER_JOINED } from "./constant";
import { fakeUsers } from "./fake-users";

export const SORT_TYPE = {
  RANDOM: 'RANDOM',
  FIXED: 'FIXED'
}

/**
 * raceRankingFactory()
 * @returns array of user
 */
export function raceRankingFactory() {
  const users = JSON.parse(JSON.stringify(fakeUsers)).slice(0, USER_JOINED);
  const totalUsers = users.length;

  return function (type = SORT_TYPE.FIXED) {
    if (type === SORT_TYPE.FIXED) {
      const randomUserIndex = Math.floor(Math.random() * 2);
      let temporaryValue = Object.assign({}, users[randomUserIndex]);
      temporaryValue.progress = temporaryValue.progress  + Math.random() * 20;

      users[randomUserIndex] = temporaryValue;
    }

    else {
      const randomUserIndex = Math.floor(Math.random() * totalUsers);

      let temporaryValue = Object.assign({}, users[randomUserIndex]);
      temporaryValue.progress = temporaryValue.progress + Math.random() * 20;
      users[randomUserIndex] = temporaryValue;
    }

    // Sort
    users.sort((a, b) => b.progress - a.progress);

    return users;
  };
}
