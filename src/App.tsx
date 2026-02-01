import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Factory, Activity } from 'lucide-react';
import KPICard from './components/KPICard';
import ProductionChart from './components/ProductionChart';
import InventoryChart from './components/InventoryChart';
import QualityChart from './components/QualityChart';
import MachineStatusTable from './components/MachineStatusTable';
import useDarkMode from './hooks/useDarkMode';
import { mockWebSocket } from './services/mockWebSocket';
import { KPIData, MachineStatus, ProductionData, InventoryData, QualityMetric } from './types/dashboard';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
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
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100'
    }`}>
      <div className="max-w-[1920px] mx-auto">
        <header className={`sticky top-0 z-50 backdrop-blur-md border-b-2 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'
        } shadow-lg`}>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <Factory className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Plime Agro Industries Ltd.
                  </h1>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Production Dashboard
                  </p>
                </div>
              </motion.div>

              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  <Activity className={`h-4 w-4 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} animate-pulse`} />
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Live
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Updated {lastUpdate.toLocaleTimeString()}
                  </span>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 space-y-6">
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
        </main>

        <footer className={`mt-8 border-t-2 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="px-6 py-4">
            <p className={`text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Plime Agro Industries Ltd. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
