import { TrainingList } from "@/app/pages/TrainingList";
import { trainings } from "@/mocks/trainings";

export default function TabThreeScreen() {
  return <TrainingList trainingList={trainings} />;
}
