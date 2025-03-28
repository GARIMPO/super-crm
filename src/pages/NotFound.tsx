import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl text-muted-foreground mt-4 mb-8">Oops! Page not found</p>
      <Button 
        onClick={() => navigate("/")}
        className="bg-primary hover:bg-primary/90"
      >
        Return to Home
      </Button>
    </div>
  );
}
