import React from 'react';
import './App.css';
import collegeBasketballTeamsData from './CollegeBasketballTeams.json';

// Define the TypeScript interface for a Team object
interface Team {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

// Convert JSON team data to an array of Team objects
const collegeBasketballTeams: Team[] =
  collegeBasketballTeamsData.teams as Team[];

// Welcome functional component: displays introductory content
function Welcome() {
  return (
    <header>
      <h1>Welcome to the College Basketball Teams Directory!</h1>
      <p>
        Explore a comprehensive list of college basketball teams across various
        conferences. Get to know the team names, mascots, and their locations.
        Whether you're a die-hard basketball fan or just curious, this is your
        go-to resource for college basketball teams.
      </p>
    </header>
  );
}

// TeamComponent class-based component: renders individual team information
class TeamComponent extends React.Component<Team> {
  render() {
    const { school, name, city, state } = this.props;

    // Return a structured HTML representation of a team card
    return (
      <div className="team-card">
        <h2 className="team-school">{school}</h2>
        <h3 className="team-name">{name}</h3>
        <p className="team-location">
          {city}, {state}
        </p>
      </div>
    );
  }
}

// TeamList functional component: renders a list of all team components
function TeamList() {
  return (
    <div className="team-list">
      {collegeBasketballTeams.map((team: Team) => (
        <TeamComponent
          key={team.tid}
          tid={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

// App functional component: main component that combines other components
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
