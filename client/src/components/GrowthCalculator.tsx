import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ArrowUpRight, TrendingUp, Users, RefreshCw, DollarSign } from "lucide-react";

export default function GrowthCalculator() {
  const [traffic, setTraffic] = useState<number>(50000);
  const [conversion, setConversion] = useState<number>(2.5); // in %
  const [retention, setRetention] = useState<number>(30); // in %
  const [ltv, setLtv] = useState<number>(45); // in $

  // Calculate standard metrics
  const activeUsers = Math.round(traffic * (conversion / 100));
  const retainedUsers = Math.round(activeUsers * (retention / 100));
  const totalValue = Math.round(activeUsers * ltv);

  // Calculate simulated growth if we optimize onboarding funnel (+20% relative conversion) and retention (+15% relative retention)
  const optimizedConversion = conversion * 1.2;
  const optimizedRetention = retention * 1.15;
  const optimizedActiveUsers = Math.round(traffic * (optimizedConversion / 100));
  const optimizedRetainedUsers = Math.round(optimizedActiveUsers * (optimizedRetention / 100));
  const optimizedTotalValue = Math.round(optimizedActiveUsers * ltv);

  const valueUplift = optimizedTotalValue - totalValue;
  const percentageUplift = ((optimizedTotalValue - totalValue) / (totalValue || 1)) * 100;

  return (
    <Card className="border-border/60 shadow-sm bg-card overflow-hidden">
      <CardHeader className="border-b border-border/40 bg-muted/20 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-serif font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Growth Scenario Modeling Demo
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
            Illustrative product growth modeling based on hypothetical KPI assumptions
            </CardDescription>
          </div>
          <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">
            Product Analytics Model
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sliders (6 cols on md) */}
        <div className="md:col-span-6 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-muted-foreground flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> Monthly Traffic
              </span>
              <span className="text-foreground font-semibold">{traffic.toLocaleString()}</span>
            </div>
            <Slider
              value={[traffic]}
              onValueChange={(val) => setTraffic(val[0])}
              min={10000}
              max={200000}
              step={5000}
              className="py-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-muted-foreground flex items-center gap-1">
                <ArrowUpRight className="h-3.5 w-3.5" /> Onboarding Conv. Rate
              </span>
              <span className="text-foreground font-semibold">{conversion.toFixed(1)}%</span>
            </div>
            <Slider
              value={[conversion]}
              onValueChange={(val) => setConversion(val[0])}
              min={0.5}
              max={10}
              step={0.1}
              className="py-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-muted-foreground flex items-center gap-1">
                <RefreshCw className="h-3.5 w-3.5" /> Week 4 Retention
              </span>
              <span className="text-foreground font-semibold">{retention}%</span>
            </div>
            <Slider
              value={[retention]}
              onValueChange={(val) => setRetention(val[0])}
              min={5}
              max={60}
              step={1}
              className="py-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-muted-foreground flex items-center gap-1">
                <DollarSign className="h-3.5 w-3.5" /> Customer LTV
              </span>
              <span className="text-foreground font-semibold">${ltv}</span>
            </div>
            <Slider
              value={[ltv]}
              onValueChange={(val) => setLtv(val[0])}
              min={10}
              max={150}
              step={5}
              className="py-2"
            />
          </div>
        </div>

        {/* Results (6 cols on md) */}
        <div className="md:col-span-6 bg-muted/30 rounded-lg p-5 flex flex-col justify-between border border-border/30">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Funnel Output Comparison
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-muted-foreground block">
                  Current Funnel
                </span>
                <div className="text-sm font-semibold text-foreground">
                  {activeUsers.toLocaleString()}{" "}
                  <span className="text-[10px] font-normal text-muted-foreground">
                    Actives
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {retainedUsers.toLocaleString()} Retained
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-secondary-foreground block">
                  Optimized (+20% Conv, +15% Ret)
                </span>
                <div className="text-sm font-semibold text-primary">
                  {optimizedActiveUsers.toLocaleString()}{" "}
                  <span className="text-[10px] font-normal text-muted-foreground">
                    Actives
                  </span>
                </div>
                <div className="text-xs text-primary/80 font-medium">
                  {optimizedRetainedUsers.toLocaleString()} Retained
                </div>
              </div>
            </div>

            <div className="border-t border-border/40 pt-3 space-y-1">
              <span className="text-[10px] font-mono text-muted-foreground block">
                Total Pipeline Value Comparison
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-foreground">
                  ${totalValue.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground">vs</span>
                <span className="text-xl font-bold text-primary">
                  ${optimizedTotalValue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border/40 bg-primary/5 -mx-5 -mb-5 p-4 rounded-b-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-wider block font-semibold">
                Simulated Business Impact
              </span>
              <span className="text-xs text-muted-foreground">
                Funnel optimization incremental value
              </span>
            </div>
            <div className="text-right">
              <div className="text-md font-bold text-primary flex items-center justify-end gap-1">
                <ArrowUpRight className="h-4 w-4" />
                +${valueUplift.toLocaleString()}
              </div>
              <span className="text-[10px] font-mono text-secondary-foreground font-semibold bg-secondary px-1.5 py-0.5 rounded">
                +{percentageUplift.toFixed(0)}% Growth
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
