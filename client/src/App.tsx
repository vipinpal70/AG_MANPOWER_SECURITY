import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./components/ThemeProvider";
import Home from "./pages/Home";
import SecurityServices from "./pages/SecurityServices"; // Add import
import OfficeCleaning from "./pages/OfficeCleaning"; // Add import
import SircEmergencyServices from "./pages/SircEmergencyServices"; // Add import
import NotFound from "./pages/not-found";
import Header from "./components/Header";
import Footer from "./components/Footer";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Route path="/security-services" component={SecurityServices} />
      <Route path="/office-cleaning" component={OfficeCleaning} />
      <Route path="/sirc-emergency" component={SircEmergencyServices} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ag-security-theme">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
