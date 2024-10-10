import { Exercise, ExerciseType } from "@/types";
import { useState } from "react";

export const AddTraining = () => {
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [type, setType] = useState<ExerciseType | undefined>();

  return <>
    
  </>;
};
