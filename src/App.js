import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import GlobalSmoothScroll from "./components/layouts/GlobalSmoothScroll";


function App() {
  return (
    <GlobalSmoothScroll>
      <AppRoutes />
    </GlobalSmoothScroll>
  );
}

export default App;
