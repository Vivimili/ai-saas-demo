
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  BarChart3,
  Stethoscope
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">VitalSync</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <a href="#problème" onClick={(e) => scrollToSection(e, 'problème')} className="hover:text-blue-600 transition">Problème</a>
              <a href="#solution" onClick={(e) => scrollToSection(e, 'solution')} className="hover:text-blue-600 transition">Solution</a>
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-blue-600 transition">Fonctionnalités</a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-blue-600 transition">Tarifs</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Connexion</Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Accéder à l'application
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            L'excellence médicale <br />
            <span className="text-blue-600">augmentée par l'IA.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            VitalSync est la plateforme tout-en-un pour les cabinets médicaux modernes. 
            Gérez vos patients, votre facturation et votre emploi du temps en toute simplicité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center">
              Démarrer l'essai gratuit <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition">
              Voir la démo
            </button>
          </div>
          <div className="mt-16 relative">
            <img 
              src="https://picsum.photos/seed/vital-dashboard/1200/600" 
              alt="VitalSync Dashboard" 
              className="rounded-2xl shadow-2xl border border-gray-200"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full"><Users className="text-green-600" /></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">+12% de patients</p>
                  <p className="text-xs text-gray-500 text-left">ce mois-ci</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problème */}
      <section id="problème" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">La gestion médicale est devenue un fardeau</h2>
            <p className="text-gray-600">Les praticiens perdent aujourd'hui plus de 40% de leur temps en tâches administratives.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Paperasse Envahissante", desc: "Des heures perdues à remplir des dossiers au lieu de soigner.", icon: AlertCircle, color: "text-red-500" },
              { title: "Retards de Paiement", desc: "Une facturation complexe qui ralentit votre trésorerie.", icon: Clock, color: "text-orange-500" },
              { title: "Désorganisation", desc: "Des rendez-vous oubliés et des plannings surchargés.", icon: Activity, color: "text-blue-500" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
                <item.icon className={`h-10 w-10 ${item.color} mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      <section id="solution" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="h-3 w-3" />
                <span>Une nouvelle ère</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Reprenez le contrôle avec VitalSync</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre technologie automatise les processus répétitifs. De la prise de rendez-vous en ligne à la télétransmission, 
                chaque étape est optimisée pour vous laisser vous concentrer sur l'essentiel : vos patients.
              </p>
              <ul className="space-y-4">
                {[
                  "IA Générative pour les comptes-rendus",
                  "Synchronisation temps réel multi-dispositifs",
                  "Interface intuitive pensée pour les praticiens",
                  "Support client ultra-réactif"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -z-10 w-full h-full bg-blue-100 rounded-full blur-3xl opacity-30 scale-125"></div>
               <img src="https://picsum.photos/seed/doc/600/450" alt="Doctor using software" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fonctionnalités */}
      <section id="features" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-gray-400">Une suite d'outils complète intégrée dans une seule plateforme.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Dossier Patient", icon: Stethoscope, desc: "Historique médical complet et sécurisé." },
              { title: "Agenda IA", icon: Clock, desc: "Optimisation des créneaux en fonction des urgences." },
              { title: "Facturation", icon: ShieldCheck, desc: "Facturation automatisée et télétransmission." },
              { title: "Analyses", icon: BarChart3, desc: "Tableaux de bord sur l'activité de votre cabinet." }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition">
                <f.icon className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sophie Martin", role: "Médecin Généraliste", text: "VitalSync a révolutionné ma façon de travailler. Je gagne 2 heures par jour sur mes tâches administratives.", img: "https://i.pravatar.cc/150?u=sophie" },
              { name: "Dr. Marc Lefebvre", role: "Cardiologue", text: "L'interface est d'une clarté exemplaire. Mes patients apprécient énormément la prise de rendez-vous fluide.", img: "https://i.pravatar.cc/150?u=marc" },
              { name: "Clinique du Parc", role: "Établissement de Santé", text: "La gestion multi-praticiens est enfin simple et efficace. Un outil indispensable pour notre structure.", img: "https://i.pravatar.cc/150?u=clinique" }
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tarification */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Des tarifs transparents</h2>
            <p className="text-gray-600">Choisissez le plan qui correspond à la taille de votre cabinet.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Essentiel", price: "49€", features: ["1 Praticien", "Dossier Patient Illimité", "Support Email"], popular: false },
              { name: "Pro", price: "99€", features: ["3 Praticiens", "Télé-médecine intégrée", "IA Assistant Médical", "Support 24/7"], popular: true },
              { name: "Clinique", price: "Sur mesure", features: ["Praticiens Illimités", "Hébergement dédié", "API personnalisée", "Formation équipe"], popular: false }
            ].map((p, i) => (
              <div key={i} className={`p-8 rounded-2xl bg-white border ${p.popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'} relative`}>
                {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Le plus populaire</span>}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-4xl font-extrabold text-gray-900 mb-6">{p.price}<span className="text-base font-normal text-gray-500">/mois</span></p>
                <ul className="space-y-4 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition ${p.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  Choisir ce plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action Final */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
            <h2 className="text-4xl font-bold mb-6 relative z-10">Prêt à transformer votre pratique ?</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto relative z-10">
              Rejoignez plus de 2,000 professionnels de santé qui font confiance à VitalSync pour leur gestion quotidienne.
            </p>
            <Link 
              to="/signup" 
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition shadow-lg relative z-10"
            >
              Démarrer maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Activity className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold text-gray-900">VitalSync</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 VitalSync SaaS. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
