import { KPIData, MachineStatus, ProductionData, InventoryData, QualityMetric } from '../types/dashboard';

type Callback = (data: any) => void;

class MockWebSocketService {
  private listeners: Map<string, Callback[]> = new Map();
  private intervals: NodeJS.Timeout[] = [];

  subscribe(event: string, callback: Callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  unsubscribe(event: string, callback: Callback) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  private emit(event: string, data: any) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }

  start() {
    const kpiInterval = setInterval(() => {
      const kpis: KPIData[] = [
        {
          id: 'production-rate',
          label: 'Production Rate',
          value: Math.floor(850 + Math.random() * 150),
          unit: 'units/hr',
          trend: (Math.random() - 0.5) * 10,
          status: Math.random() > 0.3 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical'
        },
        {
          id: 'efficiency',
          label: 'Overall Efficiency',
          value: Math.floor(82 + Math.random() * 15),
          unit: '%',
          trend: (Math.random() - 0.5) * 8,
          status: Math.random() > 0.2 ? 'good' : 'warning'
        },
        {
          id: 'downtime',
          label: 'Downtime Today',
          value: Math.floor(15 + Math.random() * 30),
          unit: 'min',
          trend: (Math.random() - 0.5) * 20,
          status: Math.random() > 0.4 ? 'good' : Math.random() > 0.6 ? 'warning' : 'critical'
        },
        {
          id: 'quality-rate',
          label: 'Quality Pass Rate',
          value: Math.floor(94 + Math.random() * 5),
          unit: '%',
          trend: (Math.random() - 0.5) * 3,
          status: 'good'
        }
      ];
      this.emit('kpi', kpis);
    }, 3000);

    const machineInterval = setInterval(() => {
      const machines: MachineStatus[] = [
        {
          id: 'M-001',
          name: 'Packaging Line A',
          status: Math.random() > 0.15 ? 'operational' : Math.random() > 0.5 ? 'maintenance' : 'offline',
          efficiency: Math.floor(85 + Math.random() * 15),
          temperature: Math.floor(68 + Math.random() * 8),
          output: Math.floor(450 + Math.random() * 100),
          lastMaintenance: '2 days ago'
        },
        {
          id: 'M-002',
          name: 'Processing Unit B',
          status: Math.random() > 0.1 ? 'operational' : 'maintenance',
          efficiency: Math.floor(88 + Math.random() * 12),
          temperature: Math.floor(72 + Math.random() * 6),
          output: Math.floor(520 + Math.random() * 80),
          lastMaintenance: '5 days ago'
        },
        {
          id: 'M-003',
          name: 'Quality Control C',
          status: Math.random() > 0.2 ? 'operational' : 'maintenance',
          efficiency: Math.floor(90 + Math.random() * 10),
          temperature: Math.floor(65 + Math.random() * 5),
          output: Math.floor(380 + Math.random() * 120),
          lastMaintenance: '1 day ago'
        },
        {
          id: 'M-004',
          name: 'Storage System D',
          status: Math.random() > 0.25 ? 'operational' : Math.random() > 0.7 ? 'maintenance' : 'offline',
          efficiency: Math.floor(78 + Math.random() * 20),
          temperature: Math.floor(70 + Math.random() * 10),
          output: Math.floor(300 + Math.random() * 150),
          lastMaintenance: '7 days ago'
        }
      ];
      this.emit('machine', machines);
    }, 5000);

    const productionInterval = setInterval(() => {
      const now = new Date();
      const production: ProductionData[] = Array.from({ length: 24 }, (_, i) => {
        const time = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000);
        return {
          timestamp: time.toISOString(),
          production: Math.floor(800 + Math.random() * 400),
          target: 1000
        };
      });
      this.emit('production', production);
    }, 10000);

    const inventoryInterval = setInterval(() => {
      const inventory: InventoryData[] = [
        {
          product: 'Raw Materials',
          current: Math.floor(6500 + Math.random() * 2000),
          capacity: 10000,
          status: Math.random() > 0.3 ? 'optimal' : Math.random() > 0.6 ? 'low' : 'critical'
        },
        {
          product: 'Packaging Materials',
          current: Math.floor(4200 + Math.random() * 1500),
          capacity: 7500,
          status: Math.random() > 0.4 ? 'optimal' : 'low'
        },
        {
          product: 'Finished Goods',
          current: Math.floor(2800 + Math.random() * 1200),
          capacity: 5000,
          status: 'optimal'
        },
        {
          product: 'Quality Control Supplies',
          current: Math.floor(1500 + Math.random() * 800),
          capacity: 3000,
          status: Math.random() > 0.5 ? 'optimal' : 'low'
        }
      ];
      this.emit('inventory', inventory);
    }, 7000);

    const qualityInterval = setInterval(() => {
      const quality: QualityMetric[] = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return {
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          passRate: Math.floor(92 + Math.random() * 7),
          defectRate: Math.floor(2 + Math.random() * 4),
          reworkRate: Math.floor(1 + Math.random() * 3)
        };
      });
      this.emit('quality', quality);
    }, 8000);

    this.intervals.push(kpiInterval, machineInterval, productionInterval, inventoryInterval, qualityInterval);

    this.emit('kpi', this.generateInitialKPIs());
    this.emit('machine', this.generateInitialMachines());
    this.emit('production', this.generateInitialProduction());
    this.emit('inventory', this.generateInitialInventory());
    this.emit('quality', this.generateInitialQuality());
  }

  stop() {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
    this.listeners.clear();
  }

  private generateInitialKPIs(): KPIData[] {
    return [
      {
        id: 'production-rate',
        label: 'Production Rate',
        value: 925,
        unit: 'units/hr',
        trend: 5.2,
        status: 'good'
      },
      {
        id: 'efficiency',
        label: 'Overall Efficiency',
        value: 89,
        unit: '%',
        trend: 2.8,
        status: 'good'
      },
      {
        id: 'downtime',
        label: 'Downtime Today',
        value: 22,
        unit: 'min',
        trend: -8.5,
        status: 'good'
      },
      {
        id: 'quality-rate',
        label: 'Quality Pass Rate',
        value: 96,
        unit: '%',
        trend: 1.2,
        status: 'good'
      }
    ];
  }

  private generateInitialMachines(): MachineStatus[] {
    return [
      {
        id: 'M-001',
        name: 'Packaging Line A',
        status: 'operational',
        efficiency: 92,
        temperature: 72,
        output: 485,
        lastMaintenance: '2 days ago'
      },
      {
        id: 'M-002',
        name: 'Processing Unit B',
        status: 'operational',
        efficiency: 95,
        temperature: 75,
        output: 560,
        lastMaintenance: '5 days ago'
      },
      {
        id: 'M-003',
        name: 'Quality Control C',
        status: 'operational',
        efficiency: 97,
        temperature: 68,
        output: 420,
        lastMaintenance: '1 day ago'
      },
      {
        id: 'M-004',
        name: 'Storage System D',
        status: 'maintenance',
        efficiency: 85,
        temperature: 74,
        output: 380,
        lastMaintenance: '7 days ago'
      }
    ];
  }

  private generateInitialProduction(): ProductionData[] {
    const now = new Date();
    return Array.from({ length: 24 }, (_, i) => {
      const time = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000);
      return {
        timestamp: time.toISOString(),
        production: Math.floor(800 + Math.random() * 400),
        target: 1000
      };
    });
  }

  private generateInitialInventory(): InventoryData[] {
    return [
      {
        product: 'Raw Materials',
        current: 7800,
        capacity: 10000,
        status: 'optimal'
      },
      {
        product: 'Packaging Materials',
        current: 5200,
        capacity: 7500,
        status: 'optimal'
      },
      {
        product: 'Finished Goods',
        current: 3400,
        capacity: 5000,
        status: 'optimal'
      },
      {
        product: 'Quality Control Supplies',
        current: 2100,
        capacity: 3000,
        status: 'optimal'
      }
    ];
  }

  private generateInitialQuality(): QualityMetric[] {
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return {
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        passRate: Math.floor(92 + Math.random() * 7),
        defectRate: Math.floor(2 + Math.random() * 4),
        reworkRate: Math.floor(1 + Math.random() * 3)
      };
    });
  }
}

export const mockWebSocket = new MockWebSocketService();
