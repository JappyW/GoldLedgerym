import { ThemedView } from "../../../components/ThemedView";
import { ThemedText } from "../../../components/ThemedText";
import { Training } from "../../../types";
import { Collapsible } from "../../../components/Collapsible";
import { buildTrainingTitle } from "@/utils/buildTrainingTitle";

export const TrainingList = ({
  trainingList,
}: {
  trainingList: Training[];
}) => {
  return (
    <ThemedView>
      {trainingList.map(({ date, duration, exercises, type }) => {
        return (
          <Collapsible
            key={date.toString()}
            title={buildTrainingTitle(date, type, duration)}
          >
            <ThemedView>
              {exercises.map((exercise) => {
                return (
                  <ThemedView style={{ display: "flex", flexDirection: "row" }}>
                    <ThemedText type="default">
                      {exercise.name} {exercise.weight} kg{" "}
                      {exercise.sets.map((repetitions) => {
                        return `${repetitions} `;
                      })}
                    </ThemedText>
                  </ThemedView>
                );
              })}
            </ThemedView>
          </Collapsible>
        );
      })}
    </ThemedView>
  );
};
