import { ReactNode } from "react";

export interface Handler {
  handleAdd: any;
  handleRemove: any;
}

export interface State {
  count: number;
}

export interface Counter {
  children: ReactNode;
  initialCount: number;
}
