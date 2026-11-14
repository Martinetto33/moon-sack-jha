import "./global.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Moon in Cesium",
  description: "Interactive Moon visualization with CesiumJS and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`${BASE}/cesium/Widgets/widgets.css`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
