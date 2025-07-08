import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dev from "./pages/Dev";
import NotFound from "./pages/NotFound";
import Piyasalar from "./pages/Piyasalar";
import Markets from "./pages/Markets";
import DevPlayground from "./pages/DevPlayground";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/piyasalar" element={<Piyasalar />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/dev-playground" element={<DevPlayground />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
