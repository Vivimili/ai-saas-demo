
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'admin';
  avatar: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface PatientStats {
  month: string;
  count: number;
}

export interface RevenueData {
  name: string;
  value: number;
}
