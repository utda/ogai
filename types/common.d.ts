export interface Menu {
  title: string;
  href?: string;
  to?: string;
  header?: boolean;
  target?: string;
}

export interface Item {
  title: string;
  disabled: boolean;
  href?: string;
  to?: string;
}

// defaultPanes配列の要素の型を定義
export interface PaneItem {
  id: string;
  label?: string;
  componentKey: string;
  props?: { [key: string]: any };
  size: number;
}

export interface Pane {
  size: number;
  items: PaneItem[];
}
