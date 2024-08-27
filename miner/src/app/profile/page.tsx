"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Mail, Key, Wallet, Bell, Moon } from "lucide-react";

export default function SettingsProfilePage() {
  const [username, setUsername] = useState("CryptoMiner123");
  const [email, setEmail] = useState("miner@example.com");
  const [withdrawalAddress, setWithdrawalAddress] = useState("0x1234...5678");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleSaveChanges = () => {
    // Here you would typically send the updated information to your backend
    console.log("Saving changes...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-8">
          Settings & Profile
        </h1>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              User Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-yellow-400" />
              <div className="flex-grow">
                <Label htmlFor="username" className="text-gray-300">
                  Username
                </Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 border-yellow-600/30 text-gray-200"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-yellow-400" />
              <div className="flex-grow">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-yellow-600/30 text-gray-200"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Key className="w-6 h-6 text-yellow-400" />
              <div className="flex-grow">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-800 border-yellow-600/30 text-gray-200"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Withdrawal Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Wallet className="w-6 h-6 text-yellow-400" />
              <div className="flex-grow">
                <Label htmlFor="withdrawalAddress" className="text-gray-300">
                  ETH Public Address
                </Label>
                <Input
                  id="publicAddress"
                  value={withdrawalAddress}
                  onChange={(e) => setWithdrawalAddress(e.target.value)}
                  className="bg-gray-800 border-yellow-600/30 text-gray-200"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Wallet className="w-6 h-6 text-yellow-400" />
              <div className="flex-grow">
                <Label htmlFor="withdrawalAddress" className="text-gray-300">
                  ETH Private Address
                </Label>
                <Input
                  id="publicAddress"
                  value={withdrawalAddress}
                  onChange={(e) => setWithdrawalAddress(e.target.value)}
                  className="bg-gray-800 border-yellow-600/30 text-gray-200"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Referred By
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Wallet className="w-6 h-6 text-yellow-400" />
              <div className="flex-grow">
                <Input
                  id="publicAddress"
                  value={withdrawalAddress}
                  onChange={(e) => setWithdrawalAddress(e.target.value)}
                  className="bg-gray-800 border-yellow-600/30 text-gray-200"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={handleSaveChanges}
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
