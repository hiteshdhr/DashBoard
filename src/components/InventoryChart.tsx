import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { InventoryData } from '../types/dashboard';

interface InventoryChartProps {
  data: InventoryData[];
  darkMode: boolean;
}

export default function InventoryChart({ data, darkMode }: InventoryChartProps) {
  const chartData = data.map(item => ({
    name: item.product,
    Current: item.current,
    Capacity: item.capacity,
    percentage: (item.current / item.capacity * 100).toFixed(0),
    status: item.status
  }));

  const getBarColor = (status: string) => {
    switch (status) {
      case 'optimal':
        return '#10b981';
      case 'low':
        return '#f59e0b';
      case 'critical':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`rounded-xl border-2 p-6 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } shadow-lg transition-all duration-300`}
    >
      <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Inventory Levels
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
          <XAxis
            dataKey="name"
            stroke={darkMode ? '#9ca3af' : '#6b7280'}
            tick={{ fontSize: 11 }}
            angle={-15}
            textAnchor="end"
            height={80}
          />
          <YAxis
            stroke={darkMode ? '#9ca3af' : '#6b7280'}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#1f2937' : '#ffffff',
              border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: darkMode ? '#f3f4f6' : '#1f2937'
            }}
          />
          <Legend />
          <Bar dataKey="Current" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.status)} />
            ))}
          </Bar>
          <Bar dataKey="Capacity" fill={darkMode ? '#4b5563' : '#d1d5db'} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
