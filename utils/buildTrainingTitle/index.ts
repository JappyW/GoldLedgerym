import { ExerciseType } from "@/types";
import { getDayOfWeek } from "../getDayOfWeek";
import { getParsedDuration } from "../getParsedDuration";

export const buildTrainingTitle = (
  date: Date,
  type: ExerciseType,
  duration: number
) => {
  return `${getDayOfWeek(date.getDay())} ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()} - ${type.toLocaleUpperCase()} - ${getParsedDuration(
    duration
  )}`;
};
