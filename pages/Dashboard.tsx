import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import KPICard from '../components/KPICard';
import ProductionChart from '../components/ProductionChart';
import InventoryChart from '../components/InventoryChart';
import QualityChart from '../components/QualityChart';
import MachineStatusTable from '../components/MachineStatusTable';
import { mockWebSocket } from '../services/mockWebSocket';
import { KPIData, MachineStatus, ProductionData, InventoryData, QualityMetric } from '../types/dashboard';
import { Activity } from 'lucide-react';

export default function Dashboard() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [kpis, setKpis] = useState<KPIData[]>([]);
  const [machines, setMachines] = useState<MachineStatus[]>([]);
  const [productionData, setProductionData] = useState<ProductionData[]>([]);
  const [inventoryData, setInventoryData] = useState<InventoryData[]>([]);
  const [qualityData, setQualityData] = useState<QualityMetric[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const handleKPIUpdate = (data: KPIData[]) => {
      setKpis(data);
      setLastUpdate(new Date());
    };

    const handleMachineUpdate = (data: MachineStatus[]) => {
      setMachines(data);
      setLastUpdate(new Date());
    };

    const handleProductionUpdate = (data: ProductionData[]) => {
      setProductionData(data);
    };

    const handleInventoryUpdate = (data: InventoryData[]) => {
      setInventoryData(data);
    };

    const handleQualityUpdate = (data: QualityMetric[]) => {
      setQualityData(data);
    };

    mockWebSocket.subscribe('kpi', handleKPIUpdate);
    mockWebSocket.subscribe('machine', handleMachineUpdate);
    mockWebSocket.subscribe('production', handleProductionUpdate);
    mockWebSocket.subscribe('inventory', handleInventoryUpdate);
    mockWebSocket.subscribe('quality', handleQualityUpdate);

    mockWebSocket.start();

    return () => {
      mockWebSocket.stop();
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end mb-4">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white shadow-sm'}`}>
          <Activity className={`h-4 w-4 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} animate-pulse`} />
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Live</span>
          <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Updated {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} darkMode={darkMode} />
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ProductionChart data={productionData} darkMode={darkMode} />
        <InventoryChart data={inventoryData} darkMode={darkMode} />
      </section>

      <section className="grid grid-cols-1 gap-6">
        <QualityChart data={qualityData} darkMode={darkMode} />
      </section>

      <section className="grid grid-cols-1 gap-6">
        <MachineStatusTable machines={machines} darkMode={darkMode} />
      </section>
    </div>
  );
}
