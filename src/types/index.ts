

export interface Light {
  id: number;
  name: string;
  status: 'Active' | 'Inactive' | 'Faulty';
  lastUpdated: string;
}

export interface ChartDataPoint {
  time: string;
  value: number;
}