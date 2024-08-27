"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

export default function UpgradesPage() {
  const router = useRouter();

  const upgrades = [
    { name: "Basic Rig", cost: 0.1, boost: 1.5 },
    { name: "Advanced Setup", cost: 0.5, boost: 3 },
    { name: "Mining Farm", cost: 2, boost: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-8 text-center">
          Upgrade Your Mining Rig
        </h1>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Current Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-yellow-300">Starter Kit</p>
            <p className="text-gray-400 mt-2">
              Mining Speed: 0.00001 ETH/minute
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {upgrades.map((upgrade, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-xl text-yellow-400">
                  {upgrade.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">Cost: {upgrade.cost} ETH</p>
                <p className="text-gray-300 mb-4">
                  Mining Boost: {upgrade.boost}x
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold">
                      Upgrade
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-gray-900 border-yellow-600/30">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-yellow-400">
                        Confirm Upgrade
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-gray-300">
                        Are you sure you want to upgrade to {upgrade.name} for{" "}
                        {upgrade.cost} ETH?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-gray-700 text-gray-200 hover:bg-gray-600">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => router.push("/upgrade-machine/buy")}
                        className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-black"
                      >
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
