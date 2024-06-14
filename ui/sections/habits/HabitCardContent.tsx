import { Habit } from "@/data/types/habit-types";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

type Props = {
  habit: Habit;
};

export const HabitCardContent = ({ habit }: Props) => {
  return (
    <CardContent className="space-y-0 pt-0 pb-0 gap-2 px-3 text-secondary-foreground flex flex-wrap">
      <Button variant={"ghost"} className="txs">
        {habit.categoryId}
      </Button>
      <Button variant={"ghost"} className="txs">
        {habit.priority}
      </Button>
      <Button variant={"ghost"} className="txs">
        {habit.frequencyType ? habit.frequencyType : "No hay frecuencia"}
      </Button>
    </CardContent>
  );
};
