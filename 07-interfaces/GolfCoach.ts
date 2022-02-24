import { Coach } from "./Coach";

export class GolfCoach implements Coach {
  getDailyWorkout(): string {
    return "Hit a 100 balls at the range";
  }
  
}