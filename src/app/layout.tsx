import React from "react";
import { GameProvider } from "@/hooks/useContextGame";
import "./globals.css";

export const metadata = {
	title: "SOS Game",
	description: "Juego creado por Jhonnatan ER",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body>
                <GameProvider>
                    {children}
                </GameProvider>
            </body>
		</html>
	);
}
