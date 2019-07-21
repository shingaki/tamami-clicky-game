import React, { Component } from "react";
import ActorCard from "./components/ActorCard/";
import Wrapper from "./components/Wrapper/";
import Title from "./components/Title/";
import actors from "./actors.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on an actor to earn points! Click on the same one twice and you lose!";

class App extends Component {

    // Setting this.state.actors to the actors json array
    state = {
        actors,
        correctGuesses,
        bestScore,
        clickMessage
    };

    setClicked = id => {

        // Make a copy of the state actors array to work with
        const actors = this.state.actors;

        // Filter for the clicked actor
        const clickedActor = actors.filter(actor => actor.id === id);

        // If the actor image's clicked value is already true,
        // do the game over actions
        if (clickedActor[0].clicked){


            correctGuesses = 0;
            clickMessage = "Oops!!! You already clicked on this one!!!!"

            for (let i = 0 ; i < actors.length ; i++){
                actors[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ correctGuesses });
            this.setState({actors});

            // Otherwise, if clicked = false, and the user hasn't finished
        } else if (correctGuesses < 11) {

            // Set its value to true
            clickedActor[0].clicked = true;

            // increment the appropriate counter
            correctGuesses++;

            clickMessage = "Awesome! Keep playing! You're doing great!!";

            if (correctGuesses > bestScore){
                bestScore = correctGuesses;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            actors.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.actors equal to the new actors array
            this.setState({ actors });
            this.setState({correctGuesses});
            this.setState({clickMessage});
        } else {

            // Set its value to true
            clickedActor[0].clicked = true;

            // restart the guess counter
            correctGuesses = 0;

            // Egg on the user to play again
            clickMessage = "WHAT!!! You Won!!";
            bestScore = 12;
            this.setState({ bestScore });

            for (let i = 0 ; i < actors.length ; i++){
                actors[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            actors.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.actors equal to the new actors array
            this.setState({ actors });
            this.setState({correctGuesses});
            this.setState({clickMessage});

        }
    };

    render() {
        return (
            <Wrapper>
                <Title>Famous Actors Clicky Game</Title>
                <br /> <br /> <br />

                <h3 className="scoreSummary">
                    {this.state.clickMessage}
                </h3>

                <h3 className="scoreSummary card-header">
                    Score: {this.state.correctGuesses}
                    <br />
                    Best Score: {this.state.bestScore}
                </h3>
                <div className="container">
                    <div className="row">
                        {this.state.actors.map(actor => (
                            <ActorCard
                                setClicked={this.setClicked}
                                id={actor.id}
                                key={actor.id}
                                image={actor.image}
                            />
                        ))}
                    </div>
                </div>

            </Wrapper>
        );
    }
}

export default App;