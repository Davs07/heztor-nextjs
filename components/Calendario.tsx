import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { CompletedDay, Habit } from "@/data/types/habits/habit-types";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Day } from "@/data/types/habits/shared-types";

interface CalendarioProps {
  habit: Habit;
  handleCheckboxChange: (date: string) => void;
}

export const Calendario: React.FC<CalendarioProps> = ({
  habit,
  handleCheckboxChange,
}: CalendarioProps) => {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>(
    habit.completedDays?.map((day) => parseISO(day.date)) || []
  );

  React.useEffect(() => {
    setSelectedDates(
      habit.completedDays?.map((day) => parseISO(day.date)) || []
    );
  }, [habit]); // Actualizar cuando el habit cambie

  return (
    <div className="w-full h-full bg-card shadow-sm rounded-2xl py-6 grid place-items-center">
      <Calendar
        mode="multiple"
        locale={es}
        selected={selectedDates}
        onSelect={(dates: []) => {
          setSelectedDates(dates || []);
        }}
        onDayClick={(day: Day) => {
          handleCheckboxChange(format(day, "yyyy-MM-dd"));
        }}
        className=""
        disabled={(date: Date) =>
          date > new Date() || date < new Date("2024-01-01")
        }
      />
    </div>
  );
};
