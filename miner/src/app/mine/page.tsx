"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Zap, Plus, ArrowUpCircle } from "lucide-react";

export default function MiningSimulatorPage() {
  const [miningProgress, setMiningProgress] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [pendingBalance, setPendingBalance] = useState(0);
  const [miningRate, setMiningRate] = useState(0.00001); // ETH per second
  const [lastUpgradeTime, setLastUpgradeTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setMiningProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          setPendingBalance((prevPending) => prevPending + miningRate * 100);
          return 0;
        }
        return newProgress;
      });
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(timer);
  }, [miningRate]);

  useEffect(() => {
    const upgradeTimer = setInterval(() => {
      const timeSinceLastUpgrade = (Date.now() - lastUpgradeTime) / 1000; // in seconds
      setMiningRate((prevRate) => prevRate * (1 + 0.01 * timeSinceLastUpgrade));
      setLastUpgradeTime(Date.now());
    }, 60000); // Check for upgrade every minute

    return () => clearInterval(upgradeTimer);
  }, [lastUpgradeTime]);

  const handleAddToBalance = () => {
    setCurrentBalance((prevBalance) => prevBalance + pendingBalance);
    setPendingBalance(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-8">
          ETH Mining Simulator
        </h1>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Mining Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Mining ETH...</span>
              <span className="text-yellow-300 font-semibold">
                {miningProgress.toFixed(2)}%
              </span>
            </div>
            <Progress value={miningProgress} className="h-4 mb-4" />
            <div className="flex items-center justify-between text-gray-300 mb-4">
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Mining Rate:</span>
              </div>
              <span className="text-yellow-300 font-semibold">
                {miningRate.toFixed(8)} ETH/s
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400">
                Current Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-300">
                {currentBalance.toFixed(8)} ETH
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400">
                Pending Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-300 mb-4">
                {pendingBalance.toFixed(8)} ETH
              </p>
              {pendingBalance > 0 && (
                <Button
                  onClick={handleAddToBalance}
                  className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-black"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add to Balance
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Mining Upgrades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Your mining rate increases over time as your hardware improves!
            </p>
            <div className="flex items-center text-gray-300">
              <ArrowUpCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>
                Next upgrade in:{" "}
                {(60 - (Date.now() - lastUpgradeTime) / 1000).toFixed(0)}{" "}
                seconds
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
