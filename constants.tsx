
import { Appointment, PatientStats, RevenueData } from './types';

export const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', patientName: 'Jean Dupont', time: '09:00', type: 'Consultation Générale', status: 'confirmed' },
  { id: '2', patientName: 'Marie Curie', time: '10:30', type: 'Suivi Post-op', status: 'confirmed' },
  { id: '3', patientName: 'Albert Einstein', time: '11:15', type: 'Examen de Vue', status: 'pending' },
  { id: '4', patientName: 'Ada Lovelace', time: '14:00', type: 'Vaccination', status: 'confirmed' },
  { id: '5', patientName: 'Alan Turing', time: '15:30', type: 'Consultation Spécialisée', status: 'cancelled' },
];

export const MOCK_STATS: PatientStats[] = [
  { month: 'Jan', count: 400 },
  { month: 'Fév', count: 300 },
  { month: 'Mar', count: 600 },
  { month: 'Avr', count: 800 },
  { month: 'Mai', count: 500 },
  { month: 'Juin', count: 900 },
];

export const MOCK_REVENUE: RevenueData[] = [
  { name: 'Consultations', value: 4500 },
  { name: 'Actes Techniques', value: 3000 },
  { name: 'Télé-médecine', value: 1500 },
  { name: 'Urgences', value: 1000 },
];

export const NAV_ITEMS = [
  { label: 'Tableau de bord', icon: 'LayoutDashboard' },
  { label: 'Patients', icon: 'Users' },
  { label: 'Calendrier', icon: 'Calendar' },
  { label: 'Facturation', icon: 'CreditCard' },
  { label: 'Paramètres', icon: 'Settings' },
];
