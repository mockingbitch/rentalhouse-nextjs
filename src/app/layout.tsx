import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import {clsx} from "clsx";
import {ThemeProvider} from "@/components/theme/theme-provider";
import { Provider } from 'react-redux';
import { store } from '@/store';

const roboto = Noto_Sans({ subsets: ["vietnamese"], weight: ['100', '300']});

export const metadata: Metadata = {
    title: "Rental house",
    description: "House for rent còn nếu bạn nhiều tiền thì chúng tôi bán",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
	return (
		// <Provider store={ store }>
			<html lang="vi">
				<body className={ clsx('min-h-screen', roboto.className) }>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{ children }
					</ThemeProvider>
				</body>
			</html>
		// </Provider>
	);
}
