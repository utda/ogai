import { Pane } from "~/types/common";

export const useSettings = () => {
  const theme = useState("theme", () => "");
  const url = useState("url", () => "");

  const xmlString = useState("xmlString", () => "");

  const xmlDoc = useState<Element | null>("xmlDoc", () => null);

  const panes = useState("panes", () => [] as Pane[]);

  const color = useState("color", () => "");

  return {
    color,
    theme,
    url,
    xmlString,
    xmlDoc,
    panes,
  };
};
