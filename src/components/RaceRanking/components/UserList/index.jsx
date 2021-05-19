import { UserInformation } from "../UserInformation"

export const UserList = ({ raceRankingUsers }) => {
  return (
    <div className="user-list">
      {
        raceRankingUsers.map(raceRankingUser => (
          <UserInformation key={raceRankingUser.id} raceRankingUser={raceRankingUser} />
        ))
      }
    </div>
  )
}