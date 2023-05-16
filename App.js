import { AppProvider } from "./OrderContext";
import Index from "./index";
export default function App() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  );
}
