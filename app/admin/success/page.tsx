export default function AdminSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-purple">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">¡Actividad creada exitosamente!</h1>
        <p className="text-lg text-dark-blue mb-6">Tu actividad ha sido publicada y ahora aparece en la página principal.</p>
        <a href="/admin" className="inline-block bg-bright-blue hover:bg-bright-blue/90 text-white px-6 py-3 rounded font-medium transition-colors">Volver al panel de administración</a>
      </div>
    </div>
  );
}
