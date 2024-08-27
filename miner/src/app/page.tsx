"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-10 text-center">
          ETH Mining Dashboard
        </h1>
        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-10 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Your Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              0.0584 ETH
            </p>
            <Button
              className="mt-8 rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black"
              onClick={() => router.push("withdraw")}
            >
              Withdraw
            </Button>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { name: "Start Mining", link: "mine" },
            { name: "Upgrade Machine", link: "upgrade-machine" },
            { name: "Bonus Tasks", link: "bonus-tasks" },
            { name: "Referral Program", link: "referral-program" },
            { name: "Profile", link: "profile" },
          ].map((obj, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-28 text-xl border-yellow-600/30 text-yellow-400 bg-gradient-to-br from-gray-900 to-black hover:from-yellow-600 hover:to-yellow-800 hover:text-black transition-all duration-300 shadow-lg group relative overflow-hidden"
              onClick={() => router.push(obj.link)}
            >
              <span className="relative z-10">{obj.name}</span>
            </Button>
          ))}
        </div>
        {/* <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Mining Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-3">
              Current Mining Rate:{" "}
              <span className="text-yellow-400 font-semibold">
                0.0001 ETH/hour
              </span>
            </p>
            <p className="text-gray-300">
              Time until next payout:{" "}
              <span className="text-yellow-400 font-semibold">
                2 hours 37 minutes
              </span>
            </p>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
