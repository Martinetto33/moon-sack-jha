import "./global.css";
import "primereact/resources/themes/lara-dark-amber/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Providers from "./providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
