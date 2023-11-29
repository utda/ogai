import { Pane } from "~/types/common";

export const useSettings = () => {
  const theme = useState("theme", () => "");
  const url = useState("url", () => "");

  const xmlString = useState("xmlString", () => "");

  const xmlDoc = useState<Element | null>("xmlDoc", () => null);

  const panes = useState("panes", () => [] as Pane[]);

  return {
    theme,
    url,
    xmlString,
    xmlDoc,
    panes,
  };
};
