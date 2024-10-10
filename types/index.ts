export type ExerciseType = "chest" | "back" | "legs" | "arms" | "cardio";

export type Exercise = {
  name: string;
  sets: number[];
  weight: number;
  type: ExerciseType;
};

export type Training = {
  date: Date;
  type: ExerciseType;
  duration: number;
  exercises: Exercise[];
};
