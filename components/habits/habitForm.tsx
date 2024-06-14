import {
  CompletedDay,
  Frequency,
  Goal,
  Habit,
  Priority,
  SmartDescription,
} from "@/data/types/habits/habit-types";
import { Category, Day } from "@/data/types/habits/shared-types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useHabitsStore } from "@/api/stores/habitStore";
import { DialogClose } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

interface HabitFormProps {
  onClose: () => void;
}

const FormInput: React.FC<{
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ id, label, value, onChange }) => (
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      placeholder={label}
      className="rounded-2xl"
      value={value}
      onChange={onChange}
    />
  </div>
);

const FormTextarea: React.FC<{
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ id, label, value, onChange }) => (
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor={id}>{label}</Label>
    <Textarea
      id={id}
      placeholder={label}
      className="rounded-2xl"
      value={value}
      onChange={onChange}
    />
  </div>
);

const GoalSection: React.FC<{
  goalType: Goal["type"];
  goalMeta: Goal["meta"];
  setGoalType: (type: Goal["type"]) => void;
  setGoalMeta: (meta: Goal["meta"]) => void;
}> = ({ goalType, goalMeta, setGoalType, setGoalMeta }) => (
  <div>
    <Label htmlFor="goal">Meta</Label>
    <div className="grid grid-cols-3 gap-3">
      <Select
        value={goalType}
        onValueChange={(value) => setGoalType(value as Goal["type"])}>
        <SelectTrigger id="goal" className="rounded-2xl">
          <SelectValue placeholder="Meta" />
        </SelectTrigger>
        <SelectContent position="popper" className="rounded-2xl">
          <SelectItem value="SiNo">Sí/No</SelectItem>
          <SelectItem value="Cantidad">Cantidad</SelectItem>
          <SelectItem value="Cronometro">Cronómetro</SelectItem>
          <SelectItem value="Subitems">Subitems</SelectItem>
        </SelectContent>
      </Select>
      {goalType === "SiNo" && (
        <Select onValueChange={(value) => setGoalMeta(value === "true")}>
          <SelectTrigger className="rounded-2xl">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent position="popper" className="rounded-2xl">
            <SelectItem value="true">Sí</SelectItem>
            <SelectItem value="false">No</SelectItem>
          </SelectContent>
        </Select>
      )}
      {(goalType === "Cantidad" || goalType === "Cronometro") && (
        <Input
          id="goalMeta"
          type="number"
          placeholder="meta"
          className="rounded-2xl"
          value={goalMeta as number}
          onChange={(e) => setGoalMeta(Number(e.target.value))}
        />
      )}
      {goalType === "Subitems" && (
        <Textarea
          id="goalMeta"
          placeholder="Subitems separados por comas"
          className="rounded-2xl"
          value={(goalMeta as string[]).join(",")}
          onChange={(e) => setGoalMeta(e.target.value.split(","))}
        />
      )}
    </div>
  </div>
);

const FrequencySection: React.FC<{
  frequencyType: Frequency["type"];
  specificDays: Day[];
  intervalDays: number;
  setFrequencyType: (type: Frequency["type"]) => void;
  setSpecificDays: (days: Day[]) => void;
  setIntervalDays: (days: number) => void;
}> = ({ frequencyType, intervalDays, setFrequencyType, setIntervalDays }) => {
  const [specificDays, setSpecificDays] = useState<Day[]>([]);

  const handleCheckboxChange = (day: Day) => {
    setSpecificDays((prevDays: Day[]) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  return (
    <div>
      <Label htmlFor="frequency">Frecuencia</Label>
      <Tabs
        value={frequencyType}
        onValueChange={(value: string) =>
          setFrequencyType(value as Frequency["type"])
        }>
        <TabsList>
          <TabsTrigger value="TodosLosDias">Todos los días</TabsTrigger>
          <TabsTrigger value="DiasEspecificos">Días específicos</TabsTrigger>
          <TabsTrigger value="CadaXdías">Cada x días</TabsTrigger>
        </TabsList>

        <TabsContent value="TodosLosDias">
          <div className="grid grid-cols-3 gap-3">
            {Object.values(Day).map((day) => (
              <div key={day} className="flex items-center space-x-2">
                <Checkbox
                  id={day}
                  checked={true}
                  onCheckedChange={() => handleCheckboxChange(day)}
                />

                {/* <Label htmlFor={day}>{day}</Label> */}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="DiasEspecificos">
          <div className="flex justify-evenly">
            {Object.values(Day).map((day) => (
              <div key={day} className="flex items-center space-x-2">
                {/* <Checkbox
                  id={day}
                  checked={specificDays.includes(day)}
                  onCheckedChange={() => handleCheckboxChange(day)}
                /> */}
                <div
                  className={cn(
                    "size-5 rounded-full border border-main grid place-content-center text-xs cursor-pointer",
                    specificDays.includes(day)
                      ? "bg-main text-white"
                      : "text-main"
                  )}
                  onClick={() => handleCheckboxChange(day)}>
                  {day.substring(1, 0)}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="CadaXdías">
          <Label htmlFor="interval">Intervalo de días</Label>
          <Input
            type="number"
            id="interval"
            placeholder="Cada cuántos días"
            value={intervalDays}
            onChange={(e) => setIntervalDays(Number(e.target.value))}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

/* const SmartDescriptionSection: React.FC<{
  smartDescription: SmartDescription;
  DialogClose?: React.ReactNode;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}> = ({ smartDescription, handleChange }) => (
  <>
    {Object.keys(smartDescription).map((key) => (
      <FormTextarea
        key={key}
        id={key}
        label={key}
        value={smartDescription[key as keyof SmartDescription]}
        onChange={handleChange}
      />
    ))}
  </>
); */

export const HabitForm: React.FC<HabitFormProps> = ({ onClose }) => {
  const addHabit = useHabitsStore((state) => state.createHabit);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goalType, setGoalType] = useState<Goal["type"]>("");
  const [goalMeta, setGoalMeta] = useState<Goal["meta"]>(false);
  const [priority, setPriority] = useState<Priority>("");
  const [frequencyType, setFrequencyType] =
    useState<Frequency["type"]>("TodosLosDias");
  const [specificDays, setSpecificDays] = useState<Day[]>([]);
  const [intervalDays, setIntervalDays] = useState<number>(1);
  const [category, setCategory] = useState<Category>(Category.Crecimiento);
  const [smartDescription, setSmartDescription] = useState<SmartDescription>({
    purposeAndMotivation: "",
    benefitsAndConsequences: "",
    currentHabitsAndEnvironment: "",
    capacityAndResources: "",
    possibleObstaclesAndSolutions: "",
  });
  const [comments, setComments] = useState<string[]>([]);
  const [completedDays, setCompletedDays] = useState<CompletedDay[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setSmartDescription((prev) =>
      id === "name" || id === "description"
        ? { ...prev }
        : {
            ...prev,
            [id]: value,
          }
    );
    if (id === "name") setName(value);
    if (id === "description") setDescription(value);
    if (id === "goalMeta")
      setGoalMeta(
        goalType === "Cantidad" || goalType === "Cronometro"
          ? Number(value)
          : value.split(",")
      );
    if (id === "interval") setIntervalDays(Number(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHabit: Habit = {
      id: uuidv4(),
      name,
      description,
      goal:
        goalType === "SiNo"
          ? { type: "SiNo", meta: goalMeta as boolean }
          : goalType === "Cantidad"
          ? { type: "Cantidad", meta: goalMeta as number }
          : goalType === "Cronometro"
          ? { type: "Cronometro", meta: goalMeta as number }
          : { type: "Subitems", meta: goalMeta as string[] },
      frequency:
        frequencyType === "TodosLosDias"
          ? { type: "TodosLosDias" }
          : frequencyType === "DiasEspecificos"
          ? { type: "DiasEspecificos", dias: specificDays }
          : { type: "CadaXdías", veces: intervalDays },
      category,
      smartDescription,
      comments,
      completedDays,
      priority,
    };
    addHabit(newHabit);
    console.log(newHabit);
    // Reset form
    setName("");
    setDescription("");
    setGoalType("SiNo");
    setGoalMeta(false);
    setFrequencyType("TodosLosDias");
    setSpecificDays([]);
    setIntervalDays(1);
    setCategory(Category.Crecimiento);
    setPriority("");
    setSmartDescription({
      purposeAndMotivation: "",
      benefitsAndConsequences: "",
      currentHabitsAndEnvironment: "",
      capacityAndResources: "",
      possibleObstaclesAndSolutions: "",
    });
    setComments([]);
    setCompletedDays([]);
  };

  return (
    <Card className="max-w-[500px] max-h-[5000px] w-full rounded-2xl overflow-y-auto">
      <CardHeader>
        <CardTitle>Crea un nuevo hábito</CardTitle>
        <CardDescription>
          Construye hábitos que te construyan a ti.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <FormInput
              id="name"
              label="Nombre"
              value={name}
              onChange={handleChange}
            />
            <FormTextarea
              id="description"
              label="Descripción"
              value={description}
              onChange={handleChange}
            />
            <GoalSection
              goalType={goalType}
              goalMeta={goalMeta}
              setGoalType={setGoalType}
              setGoalMeta={setGoalMeta}
            />
            <FrequencySection
              frequencyType={frequencyType}
              specificDays={specificDays}
              intervalDays={intervalDays}
              setFrequencyType={setFrequencyType}
              setSpecificDays={setSpecificDays}
              setIntervalDays={setIntervalDays}
            />
            <div>
              <Label htmlFor="category">Categoría</Label>
              <Select onValueChange={(value) => setCategory(value as Category)}>
                <SelectTrigger id="category" className="rounded-2xl">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value={Category.Salud}>
                    {Category.Salud}
                  </SelectItem>
                  <SelectItem value={Category.Relaciones}>
                    {Category.Relaciones}
                  </SelectItem>
                  <SelectItem value={Category.Desarrollo}>
                    {Category.Desarrollo}
                  </SelectItem>
                  <SelectItem value={Category.Finanzas}>
                    {Category.Finanzas}
                  </SelectItem>
                  <SelectItem value={Category.Crecimiento}>
                    {Category.Crecimiento}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="priority">Prioridad</Label>
                <Select
                  onValueChange={(value) => setPriority(value as Priority)}>
                  <SelectTrigger id="priority" className="rounded-2xl">
                    <SelectValue placeholder="Elige una prioridad" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Muy alta">Muy alta</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                    <SelectItem value="Media">Media</SelectItem>
                    <SelectItem value="Baja">Baja</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* <SmartDescriptionSection
              smartDescription={smartDescription}
              handleChange={handleChange}
            /> */}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DialogClose>
          <Button variant="outline" type="button">
            Cancelar
          </Button>
        </DialogClose>
        <DialogClose asChild onClick={onClose}>
          <Button onClick={handleSubmit}>Crear</Button>
        </DialogClose>
      </CardFooter>
    </Card>
  );
};
