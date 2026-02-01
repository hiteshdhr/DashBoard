import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { KPIData } from '../types/dashboard';

interface KPICardProps {
  kpi: KPIData;
  darkMode: boolean;
}

export default function KPICard({ kpi, darkMode }: KPICardProps) {
  const getStatusColor = () => {
    switch (kpi.status) {
      case 'good':
        return darkMode ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-emerald-50 border-emerald-200';
      case 'warning':
        return darkMode ? 'bg-amber-900/30 border-amber-500/50' : 'bg-amber-50 border-amber-200';
      case 'critical':
        return darkMode ? 'bg-red-900/30 border-red-500/50' : 'bg-red-50 border-red-200';
      default:
        return darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
    }
  };

  const getTextColor = () => {
    switch (kpi.status) {
      case 'good':
        return darkMode ? 'text-emerald-400' : 'text-emerald-600';
      case 'warning':
        return darkMode ? 'text-amber-400' : 'text-amber-600';
      case 'critical':
        return darkMode ? 'text-red-400' : 'text-red-600';
      default:
        return darkMode ? 'text-gray-300' : 'text-gray-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl border-2 p-6 ${getStatusColor()} transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
            {kpi.label}
          </h3>
          <div className="flex items-baseline gap-2">
            <motion.span
              key={kpi.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-3xl font-bold ${getTextColor()}`}
            >
              {kpi.value}
            </motion.span>
            <span className={`text-lg ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              {kpi.unit}
            </span>
          </div>
        </div>
        {kpi.status === 'critical' && (
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <AlertCircle className={`h-6 w-6 ${getTextColor()}`} />
          </motion.div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-2">
        {kpi.trend >= 0 ? (
          <TrendingUp className={`h-4 w-4 ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
        ) : (
          <TrendingDown className={`h-4 w-4 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
        )}
        <span
          className={`text-sm font-medium ${
            kpi.trend >= 0
              ? darkMode ? 'text-emerald-400' : 'text-emerald-600'
              : darkMode ? 'text-red-400' : 'text-red-600'
          }`}
        >
          {kpi.trend >= 0 ? '+' : ''}{kpi.trend.toFixed(1)}%
        </span>
        <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          vs last hour
        </span>
      </div>
    </motion.div>
  );
}
