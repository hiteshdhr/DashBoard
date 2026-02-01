import { motion } from 'framer-motion';
import { Activity, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';
import { MachineStatus } from '../types/dashboard';

interface MachineStatusTableProps {
  machines: MachineStatus[];
  darkMode: boolean;
}

export default function MachineStatusTable({ machines, darkMode }: MachineStatusTableProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case 'maintenance':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'offline':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide';
    switch (status) {
      case 'operational':
        return `${baseClasses} ${darkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`;
      case 'maintenance':
        return `${baseClasses} ${darkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-700'}`;
      case 'offline':
        return `${baseClasses} ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-700'}`;
      default:
        return `${baseClasses} ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`;
    }
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return darkMode ? 'text-emerald-400' : 'text-emerald-600';
    if (efficiency >= 75) return darkMode ? 'text-amber-400' : 'text-amber-600';
    return darkMode ? 'text-red-400' : 'text-red-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`rounded-xl border-2 p-6 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } shadow-lg transition-all duration-300`}
    >
      <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Machine Status
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <th className={`text-left py-3 px-4 font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Machine
              </th>
              <th className={`text-left py-3 px-4 font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Status
              </th>
              <th className={`text-left py-3 px-4 font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Efficiency
              </th>
              <th className={`text-left py-3 px-4 font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Temperature
              </th>
              <th className={`text-left py-3 px-4 font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Output
              </th>
              <th className={`text-left py-3 px-4 font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Last Maintenance
              </th>
            </tr>
          </thead>
          <tbody>
            {machines.map((machine, index) => (
              <motion.tr
                key={machine.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-100 hover:bg-gray-50'} transition-colors`}
              >
                <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex items-center gap-3">
                    {getStatusIcon(machine.status)}
                    <div>
                      <div className="font-semibold">{machine.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {machine.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={getStatusBadge(machine.status)}>
                    {machine.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${getEfficiencyColor(machine.efficiency)}`}>
                      {machine.efficiency}%
                    </span>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${machine.efficiency}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-full ${
                          machine.efficiency >= 90
                            ? 'bg-emerald-500'
                            : machine.efficiency >= 75
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                        }`}
                      />
                    </div>
                  </div>
                </td>
                <td className={`py-4 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {machine.temperature}°F
                </td>
                <td className={`py-4 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {machine.output} units/hr
                </td>
                <td className={`py-4 px-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {machine.lastMaintenance}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
