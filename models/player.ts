import { Colours } from '../models/colours.enum';

export class Player {
  // name is a string, results is an array of Result
  name: string;
  score: number;
  rolls: number[];
  colour: Colours;

  // TO(DONE)DO: receives a name and initialises the results array to an empty array
  constructor(_name: string) {
    this.name = _name;
    this.score= 0;
    this.rolls = [];
    this.colour = Colours.Brown;
  }

  // return the total number of rolls
  totalRolls(): number {
    return this.rolls.length;
  }
}
