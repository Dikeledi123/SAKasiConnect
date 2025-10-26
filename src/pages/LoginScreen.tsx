import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"client" | "worker">("client");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Connect to backend API
    toast.success("Logged in successfully!");
    navigate(userType === "client" ? "/client-home" : "/worker-home");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="w-fit mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>
            Login to your KasiConnect account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <Label>I am a:</Label>
              <RadioGroup
                value={userType}
                onValueChange={(value) => setUserType(value as "client" | "worker")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="client" id="client" />
                  <Label htmlFor="client" className="cursor-pointer">Client</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="worker" id="worker" />
                  <Label htmlFor="worker" className="cursor-pointer">Worker/Business Owner</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate(userType === "client" ? "/client-signup" : "/worker-signup")}
                className="text-primary hover:underline font-semibold"
              >
                Sign up
              </button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;
