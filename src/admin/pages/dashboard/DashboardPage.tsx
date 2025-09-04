import ActivityFeed from "@/admin/components/ActivityFeed";
import { AdminTitle } from "@/admin/components/AdminTitle";
import Chart from "@/admin/components/Chart";
import QuickActions from "@/admin/components/QuickActions";
import StatCard from "@/admin/components/StatCard";
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Eye,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "Usuarios Totales",
    value: "24,567",
    change: "+12.5% respecto al mes pasado",
    changeType: "positive" as const,
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Ingresos",
    value: "$84,230",
    change: "+8.2% respecto al mes pasado",
    changeType: "positive" as const,
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Órdenes",
    value: "1,429",
    change: "-2.4% respecto al mes pasado",
    changeType: "negative" as const,
    icon: ShoppingCart,
    color: "bg-purple-500",
  },
  {
    title: "Tasa de Conversión",
    value: "3.24%",
    change: "+0.3% respecto al mes pasado",
    changeType: "positive" as const,
    icon: TrendingUp,
    color: "bg-orange-500",
  },
];

const chartData = [
  { label: "Escritorio", value: 65 },
  { label: "Móvil", value: 28 },
  { label: "Tablet", value: 7 },
];

const performanceData = [
  { label: "Vistas de Página", value: 24567 },
  { label: "Sesiones", value: 18234 },
  { label: "Usuarios", value: 12847 },
  { label: "Tasa de Rebote", value: 23 },
];

export const DashboardPage = () => {
  return (
    <>
      <AdminTitle
        title="Dashboard"
        subtitle="Aqui puedes ver el estado de tu negocio"
      />

      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Gráficos y Actividad */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <Chart title="Fuentes de Tráfico" data={chartData} />
          <Chart title="Métricas de Rendimiento" data={performanceData} />
        </div>

        <div className="space-y-6">
          <ActivityFeed />
          <QuickActions />
        </div>
      </div>

      {/* Sección Adicional */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Páginas Principales
            </h3>
            <Eye size={20} className="text-gray-400" />
          </div>
          <div className="space-y-3">
            {[
              { page: "/dashboard", views: 2847, change: "+12%" },
              { page: "/products", views: 1923, change: "+8%" },
              { page: "/analytics", views: 1456, change: "+15%" },
              { page: "/settings", views: 987, change: "-3%" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.page}</p>
                  <p className="text-sm text-gray-600">
                    {item.views.toLocaleString()} vistas
                  </p>
                </div>
                <span
                  className={`text-sm font-medium ${
                    item.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Estado del Sistema
            </h3>
            <BarChart3 size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              {
                service: "Servidor API",
                status: "En línea",
                uptime: "99.9%",
                color: "bg-green-500",
              },
              {
                service: "Base de Datos",
                status: "En línea",
                uptime: "99.8%",
                color: "bg-green-500",
              },
              {
                service: "Servidor de Caché",
                status: "Advertencia",
                uptime: "98.2%",
                color: "bg-yellow-500",
              },
              {
                service: "CDN",
                status: "En línea",
                uptime: "99.9%",
                color: "bg-green-500",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{item.service}</p>
                    <p className="text-sm text-gray-600">{item.status}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {item.uptime}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
