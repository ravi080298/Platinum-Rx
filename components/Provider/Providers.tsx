"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./Providers.styles";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
