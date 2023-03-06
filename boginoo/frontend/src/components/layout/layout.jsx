import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "3vh",
        height:"94vh"
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
