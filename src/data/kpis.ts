import { type KpiDefinition, validateKpis } from './types';
import { FaBug, FaBeer, FaHammer, FaHome, FaUsers, FaEye, FaHive, FaBolt, FaBreadSlice, FaHeart } from 'react-icons/fa';

export const kpis: KpiDefinition[] = validateKpis([
    // Tech Side
    { id: 'bugs', labelKey: 'cockpit.kpi_bugs', value: 1337, icon: FaBug, color: 'success', enabled: true, projectId: 'qa' },
    { id: 'uptime', labelKey: 'cockpit.kpi_uptime', value: 99.9, unit: '%', icon: FaEye, color: 'gold', enabled: true },

    // Craftsmanship - Original
    { id: 'liters', labelKey: 'cockpit.kpi_liters', value: 450, unit: 'L', icon: FaBeer, color: 'copper', enabled: true, projectId: 'brewing' },
    { id: 'decor', labelKey: 'cockpit.kpi_decor', value: 42, icon: FaHammer, color: 'gold', enabled: true, projectId: 'wedding' },
    { id: 'renovation', labelKey: 'cockpit.kpi_renovation', value: 85, unit: '%', icon: FaHome, color: 'copper', enabled: true, projectId: 'house' },

    // Craftsmanship - NEW
    { id: 'honey', labelKey: 'cockpit.kpi_honey', value: 25, unit: 'kg', icon: FaHive, color: 'gold', enabled: true, projectId: 'beekeeping' },
    { id: 'welds', labelKey: 'cockpit.kpi_welds', value: 128, icon: FaBolt, color: 'copper', enabled: true, projectId: 'wedding' },
    { id: 'loaves', labelKey: 'cockpit.kpi_loaves', value: 365, icon: FaBreadSlice, color: 'gold', enabled: true, projectId: 'breadmaking' },
    { id: 'family', labelKey: 'cockpit.kpi_family', value: 4, icon: FaHeart, color: 'success', enabled: true },

    // Dynamic
    { id: 'visitors', labelKey: 'cockpit.kpi_visitors', value: 1, icon: FaUsers, color: 'success', enabled: true, isDynamic: true },
]);
