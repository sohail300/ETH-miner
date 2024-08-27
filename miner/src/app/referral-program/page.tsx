"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Copy, CheckCircle, Users } from "lucide-react";

export default function ReferralProgramPage() {
  const [referralCode] = useState("ETH123XYZ");
  const [referralCount] = useState(3);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-8">
          Referral Program
        </h1>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Your Referral Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-md mb-4">
              <span className="text-yellow-300 text-xl font-semibold">
                {referralCode}
              </span>
              <Button
                onClick={handleCopyReferralCode}
                className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-black"
              >
                {copySuccess ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </Button>
            </div>
            <p className="text-gray-300 mb-2">
              Share this code with your friends to earn rewards!
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Referral Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Friends Referred:</span>
              <span className="text-yellow-300 font-semibold">
                {referralCount}/10
              </span>
            </div>
            <Progress
              value={referralCount * 10}
              className="h-2 mb-4 bg-white"
            />
            <div className="flex items-center text-gray-300 mb-4">
              <Users className="w-5 h-5 mr-2" />
              <span>
                {10 - referralCount} more friends for the next reward!
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Already Claimed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-yellow-300 font-semibold">1 ETH</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
