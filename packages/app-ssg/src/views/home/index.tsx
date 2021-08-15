import React from 'react';

import styles from './index.module.scss';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  let list = ['222', '444'];
  return (
     <h1>
       list
       <ul>
         {list.map(item => <li key={item}>{item}</li>)}
       </ul>
     </h1>
  );
};
export default Home;