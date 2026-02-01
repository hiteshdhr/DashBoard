import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { ProductionData } from '../types/dashboard';

interface ProductionChartProps {
  data: ProductionData[];
  darkMode: boolean;
}

export default function ProductionChart({ data, darkMode }: ProductionChartProps) {
  const chartData = data.map(item => ({
    time: new Date(item.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    Production: item.production,
    Target: item.target
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl border-2 p-6 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } shadow-lg transition-all duration-300`}
    >
      <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Production Trends (Last 24 Hours)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
          <XAxis
            dataKey="time"
            stroke={darkMode ? '#9ca3af' : '#6b7280'}
            tick={{ fontSize: 12 }}
            interval={3}
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
          <Legend
            wrapperStyle={{
              paddingTop: '20px'
            }}
          />
          <Area
            type="monotone"
            dataKey="Production"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#colorProduction)"
          />
          <Area
            type="monotone"
            dataKey="Target"
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#colorTarget)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
