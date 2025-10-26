import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Eye, Star, Users, Edit, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkerHomeScreen = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Views", value: "1,234", icon: Eye, color: "text-primary" },
    { label: "Average Rating", value: "4.8", icon: Star, color: "text-accent" },
    { label: "Total Reviews", value: "127", icon: Users, color: "text-secondary" },
    { label: "Engagement", value: "+15%", icon: BarChart3, color: "text-primary" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div 
        className="relative py-12 px-4"
        style={{
          background: "var(--gradient-secondary)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Business Dashboard</h1>
              <p className="text-white/90">Manage your business and track growth</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              className="text-white hover:bg-white/20"
            >
              <User className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Button
              size="lg"
              className="h-20 text-lg"
              onClick={() => navigate("/edit-business")}
            >
              <Edit className="w-5 h-5 mr-2" />
              Edit Business Profile
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-20 text-lg"
              onClick={() => navigate("/settings")}
            >
              <Settings className="w-5 h-5 mr-2" />
              Business Settings
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">Customer {i + 1}</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Great service! Very professional and friendly.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkerHomeScreen;
