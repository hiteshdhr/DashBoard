export interface KPIData {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: number;
  status: 'good' | 'warning' | 'critical';
}

export interface MachineStatus {
  id: string;
  name: string;
  status: 'operational' | 'maintenance' | 'offline';
  efficiency: number;
  temperature: number;
  output: number;
  lastMaintenance: string;
}

export interface ProductionData {
  timestamp: string;
  production: number;
  target: number;
}

export interface InventoryData {
  product: string;
  current: number;
  capacity: number;
  status: 'optimal' | 'low' | 'critical';
}

export interface QualityMetric {
  date: string;
  passRate: number;
  defectRate: number;
  reworkRate: number;
}

export interface WebSocketMessage {
  type: 'kpi' | 'machine' | 'production' | 'inventory' | 'quality';
  data: any;
  timestamp: string;
}
