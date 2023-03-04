
import React from 'react';
import RollDice from './RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
return (
	<div>
   <center><h1>Codeyoung Rolling Dice Game</h1></center> 
	<RollDice />
	</div>
);
}

export default App;