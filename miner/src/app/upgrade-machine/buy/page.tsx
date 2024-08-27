"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function MachineBuy() {
  const router = useRouter();
  const cond = false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-10 text-center">
          Upgrade machine
        </h1>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg overflow-hidden">
          <CardHeader className="pb-0" />
          <CardContent className="space-y-6">
            {cond ? (
              <>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-center">
                  Using the private address
                </p>
                <div className="flex justify-center">
                  <Button
                    className="mt-4 rounded-xl w-2/3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black"
                    onClick={() => router.push("/withdraw")}
                  >
                    Proceed
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-center">
                  Enter your Private Key
                </p>
                <Input
                  className="mt-4"
                  placeholder="Enter your private key here"
                />
                <div className="flex justify-center">
                  <Button
                    className="mt-4 rounded-xl w-2/3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black"
                    onClick={() => router.push("/withdraw")}
                  >
                    Proceed
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
