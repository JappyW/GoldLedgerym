import { Training } from "@/types";

export const trainings: Training[] = [
  {
    date: new Date("2024/09/18"),
    duration: 3231,
    exercises: [
      {
        name: "Chest press",
        type: "chest",
        sets: [12, 12, 12, 12],
        weight: 52,
      },
    ],
    type: "chest",
  },
];
