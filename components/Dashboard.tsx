
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  TrendingUp, 
  UserPlus, 
  Clock,
  CheckCircle,
  MoreVertical,
  BrainCircuit
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { User } from '../types';
import { MOCK_APPOINTMENTS, MOCK_STATS, MOCK_REVENUE } from '../constants';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
                <LayoutDashboard className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">VitalSync</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { label: 'Tableau de bord', icon: LayoutDashboard, active: true },
            { label: 'Patients', icon: Users, active: false },
            { label: 'Calendrier', icon: Calendar, active: false },
            { label: 'Facturation', icon: CreditCard, active: false },
            { label: 'AI Diagnostic', icon: BrainCircuit, active: false },
            { label: 'Paramètres', icon: Settings, active: false },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                item.active 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 mb-4 px-2">
            <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full border-2 border-blue-100" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.role === 'doctor' ? 'Médecin' : 'Admin'}</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition font-medium"
          >
            <LogOut className="h-4 w-4" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Rechercher un patient..." 
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <button className="relative p-2 text-gray-500 hover:text-blue-600 transition">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Patients', value: '1,284', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
              { label: 'Rendez-vous', value: '24', change: 'Aujourd\'hui', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-100' },
              { label: 'CA Mensuel', value: '14,200 €', change: '+8.4%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
              { label: 'Nouveaux Patients', value: '18', change: 'Cette semaine', icon: UserPlus, color: 'text-orange-600', bg: 'bg-orange-100' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bg} p-3 rounded-xl`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Évolution de la Patientèle</h3>
                  <p className="text-sm text-gray-500">Nombre de consultations mensuelles</p>
                </div>
                <select className="text-xs font-medium border-gray-200 rounded-lg">
                  <option>6 derniers mois</option>
                  <option>Année complète</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MOCK_STATS}>
                    <defs>
                      <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                    <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                    <Area type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Répartition Revenus</h3>
              <p className="text-sm text-gray-500 mb-8">Par catégorie de soins</p>
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={MOCK_REVENUE}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {MOCK_REVENUE.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-2xl font-bold text-gray-900">10k</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Total</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {MOCK_REVENUE.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                      <span className="text-gray-600">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.value} €</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointments Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Prochains Rendez-vous</h3>
              <button className="text-blue-600 text-sm font-bold hover:underline">Voir tout l'agenda</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <th className="px-8 py-4">Patient</th>
                    <th className="px-8 py-4">Heure</th>
                    <th className="px-8 py-4">Type de Consultation</th>
                    <th className="px-8 py-4">Statut</th>
                    <th className="px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MOCK_APPOINTMENTS.map((apt) => (
                    <tr key={apt.id} className="hover:bg-gray-50 transition group">
                      <td className="px-8 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs uppercase">
                            {apt.patientName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium text-gray-900">{apt.patientName}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-sm text-gray-500 font-medium">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-300" />
                          <span>{apt.time}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">{apt.type}</span>
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center space-x-2">
                          {apt.status === 'confirmed' && <CheckCircle className="h-4 w-4 text-green-500" />}
                          <span className={`text-xs font-bold ${
                            apt.status === 'confirmed' ? 'text-green-600' : 
                            apt.status === 'pending' ? 'text-orange-500' : 'text-red-500'
                          }`}>
                            {apt.status === 'confirmed' ? 'Confirmé' : 
                             apt.status === 'pending' ? 'En attente' : 'Annulé'}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <button className="p-2 hover:bg-white rounded-lg transition opacity-0 group-hover:opacity-100">
                          <MoreVertical className="h-5 w-5 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
