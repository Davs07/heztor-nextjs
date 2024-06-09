import {
  FolderKanban,
  FolderPen,
  Home,
  Pen,
  SquareCheck,
  WalletMinimal,
} from "lucide-react";

export const navigationLinks = [
  {
    title: "Vista General",
    src: "/dashboard",
    source: "/dashboard",
    icon: <Home size={18} />,
  },
  {
    title: "Hábitos",
    src: "/habits/day",
    source: "/habits",
    icon: <SquareCheck size={18} />,
  },
  {
    title: "Diario",
    src: "/journal",
    source: "/journal",
    icon: <Pen size={18} />,
  },
  {
    title: "Proyectos",
    src: "/projects/day",
    source: "/projects",
    icon: <FolderKanban size={18} />,
  },
  {
    title: "Documentos",
    src: "/documents/day",
    source: "/documents",
    icon: <FolderPen size={18} />,
  },
  {
    title: "Finanzas",
    src: "/finance",
    source: "/finance",
    icon: <WalletMinimal size={18} />,
  },
];


