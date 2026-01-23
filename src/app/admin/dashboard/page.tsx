"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '~/trpc/react';
import { BarChart3, Package, LogOut } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { AdminStats } from './AdminStats';
import { OrdersList } from './OrdersList';

type TabType = 'dashboard' | 'orders';
type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('orders');

  // Verificación simple de sesión
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) router.push('/admin');
  }, [router]);

  // Fetch de datos
  const { data: orders, isLoading, refetch } = api.order.getAll.useQuery();
  const updateStatus = api.order.updateStatus.useMutation({
    onSuccess: () => refetch(),
  });

  const handleUpdateStatus = (id: number, status: OrderStatus) => {
    updateStatus.mutate({ id, status });
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fijo */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Panel de Administración</h1>
              <p className="text-sm text-gray-500">HiniBricks - Gestión de Pedidos</p>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-600 hover:border-red-200"
            >
              <LogOut size={16} className="mr-2" />
              Cerrar Sesión
            </Button>
          </div>

          {/* Tabs de navegación */}
          <div className="flex gap-1 mt-4 -mb-4">
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-t-lg transition-all ${
                activeTab === 'orders'
                  ? 'bg-gray-50 text-blue-600 border-t-2 border-x-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Package size={18} />
              Pedidos
              {orders && orders.filter(o => o.status === 'pending').length > 0 && (
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                  {orders.filter(o => o.status === 'pending').length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-t-lg transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-gray-50 text-blue-600 border-t-2 border-x-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BarChart3 size={18} />
              Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'orders' ? (
          <OrdersList 
            orders={orders} 
            isLoading={isLoading} 
            onUpdateStatus={handleUpdateStatus} 
          />
        ) : (
          <AdminStats orders={orders} isLoading={isLoading} />
        )}
      </main>
    </div>
  );
}
