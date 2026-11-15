"use client";

import dynamic from "next/dynamic";

const MoonViewer = dynamic(() => import("../components/MoonViewer"), {
  ssr: false,
  loading: () => <p style={{ color: "#fff", padding: 20 }}>Loading Cesium…</p>,
});

export default function Page() {
  return (
    <main className="page">
      <MoonViewer />
    </main>
  );
}
