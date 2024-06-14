import {
  Habit,
  HabitPriority,
  GoalType,
  Category,
  HabitLog,
} from "@/data/types/habit-types";
import { Card } from "@/components/ui/card";
import { CategoryColors } from "@/data/types/habits/shared-types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { PopoverArrow } from "@radix-ui/react-popover";
import { addDays, isAfter } from "date-fns";
import { useState } from "react";

interface HabitCardComponentProps {
  habit: Habit;
  habitLogs: HabitLog[];
  daysOfCurrentWeek: Array<{
    formattedDate: Date;
  }>;
  handleRedirect: (id: string) => void;
  addCompletedDay: (habitId: string, date: Date) => void;
}

export const HabitCardComponent = ({
  habit,
  habitLogs,
  daysOfCurrentWeek,
  handleRedirect,
  addCompletedDay,
}: HabitCardComponentProps) => {
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const [completedDays, setCompletedDays] = useState(
    habitLogs.filter((habitLogitos) => habitLogitos.habitId === habit.id)
  );

  return (
    <Card
      key={habit.id}
      className={cn(
        `text-gray-600 uppercase text-sm leading-normal grid grid-cols-8 h-16 place-items-center  shadow-none rounded-lg bg-card border border-input border-l-4`
      )}>
      <div
        onClick={() => handleRedirect(habit.id.toString())}
        className="py-0 px-4 w-full  whitespace-nowrap cursor-pointer text-start">
        {habit.name}
      </div>
      {daysOfCurrentWeek.map(({ formattedDate }) => {
        const isFutureDate = isAfter(new Date(formattedDate), today);

        const isChecked = completedDays.some(
          (day) => day.completedAt === formattedDate
        );

        return (
          <div key={habit.id} className="py-3 px-6 text-center">
            <Popover>
              <PopoverTrigger>
                {!isFutureDate ? (
                  <div
                    className={cn(
                      `size-8 border-2  rounded-lg border-blue-500 grid place-content-center text-xs cursor-pointer`,
                      isChecked ? `bg-rose-500` : `bg-green-500/30`
                    )}
                    onClick={() => {
                      if (
                        completedDays.some(
                          (day) => day.completedAt === formattedDate
                        )
                      ) {
                        console.log(completedDays);
                      }
                      addCompletedDay(habit.id.toString(), formattedDate);
                    }}></div>
                ) : (
                  <div className={`size-8 border-2  rounded-lg `}></div>
                )}
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <p>El tipo de hábito es: {habit.goalType}</p>
                <p>Meta: </p>
              </PopoverContent>
            </Popover>
          </div>
        );
      })}
    </Card>
  );
};
