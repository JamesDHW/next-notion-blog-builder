import { FC } from "react";
import type { AppProps as NextAppProps } from "next/app";

import "styles/globals.css";

const App: FC<NextAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
