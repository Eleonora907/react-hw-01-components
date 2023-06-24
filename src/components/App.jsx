import {Profile} from './Profile/Profile';
import user from 'data/user.json';
import { Stats } from './Stats/Stats';
import data from 'data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
    <Profile {...user} />
    <Stats title="Upload stats" stats={data} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
    </>
  )
}