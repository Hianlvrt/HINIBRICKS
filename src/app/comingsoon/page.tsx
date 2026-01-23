"use client";
import { ComingSoon } from "../_components/ComingSoon";

export default function ComingSoonPage() {
  // Fecha de lanzamiento por defecto (puedes cambiarla)
  const launchDate = new Date("2026-02-01T00:00:00");

  const handleUnlock = () => {
    // Redirigir a la página principal cuando se desbloquea
    window.location.href = "/";
  };

  return (
    <ComingSoon 
      launchDate={launchDate} 
      onUnlock={handleUnlock}
      hideNavbarFooter={true}
    />
  );
}
