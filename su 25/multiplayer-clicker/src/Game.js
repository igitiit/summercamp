import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue, set } from 'firebase/database';

function Game() {
  const [playerName, setPlayerName] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [allPlayers, setAllPlayers] = useState({});

  useEffect(() => {
    if (playerName) {
      const playerRef = ref(database, 'players/' + playerName);
      set(playerRef, { score: playerScore });

      const allPlayersRef = ref(database, 'players');
      onValue(allPlayersRef, (snapshot) => {
        const data = snapshot.val();
        setAllPlayers(data || {});
      });
    }
  }, [playerName, playerScore]);

  const handleClick = () => {
    setPlayerScore(playerScore + 1);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setPlayerName(e.target.playerName.value);
  };

  if (!playerName) {
    return (
      <form onSubmit={handleNameSubmit}>
        <input type="text" name="playerName" placeholder="Enter your name" />
        <button type="submit">Join Game</button>
      </form>
    );
  }

  return (
    <div>
      <h1>Multiplayer Clicker Game</h1>
      <h2>Your Score: {playerScore}</h2>
      <button onClick={handleClick}>Click Me!</button>
      <h3>All Players:</h3>
      <ul>
        {Object.entries(allPlayers).map(([name, data]) => (
          <li key={name}>{name}: {data.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
