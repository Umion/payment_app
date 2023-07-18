import type { ReactNode } from "react";

export interface HeadersModel {
  key: keyof ItemModel
  label: string;
}

export type PaymentType = 'Deposit' | 'Payout' | 'Refund'
export type StatusType = 'Success' | 'Decline' | 'Processing'

export interface ItemModel {
  external_id: number;
  id: number;
  date_created: string;
  date_finished: string;
  processing_currency: string;
  processing_amount: number;
  user_currency: string;
  user_amount: number;
  type: string;
  status: string;
  card: string;
  payment_method: string;
  user_category: string;
  payment_group: string;
  gate: string;
  payment_system: string;
  order_id: number;
  customer_method: number;
  user_id: string;
  country: string;
}

export interface HeadersRenderModel {
  [key: string]: (item: HeadersRenderProps) => ReactNode;
}

export interface CellRenderModel {
  [key: string]: (item: CellRenderProps) => ReactNode;
}

interface HeadersRenderProps {
  header: HeadersModel
  colIndex: number
  result: string | number
}

interface CellRenderProps extends HeadersRenderProps {
  item: ItemModel
  rowIndex: number
}