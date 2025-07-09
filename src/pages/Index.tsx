import { Link } from "react-router-dom";
import { DynamicStockScreen } from "@/components/development/DynamicStockScreen";
import { getDefaultLayoutConfig } from "@/hooks/useLayoutConfig";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      {/* Development Link */}
      <div className="p-4 bg-blue-50 border-b border-blue-200">
        <Link 
          to="/dev" 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          🛠️ Development Mode
        </Link>
      </div>
      {/* Dynamic Stock Screen (matches dev mode) */}
      <DynamicStockScreen config={getDefaultLayoutConfig()} />
    </div>
  );
};

export default Index;
