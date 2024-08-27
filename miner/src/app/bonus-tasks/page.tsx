"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock } from "lucide-react";

const bonusTasks = [
  {
    id: 1,
    name: "Watch Educational Video",
    reward: 0.001,
    timeRequired: 5,
    maxProgress: 100,
  },
  {
    id: 2,
    name: "Complete Survey",
    reward: 0.002,
    timeRequired: 10,
    maxProgress: 100,
  },
  {
    id: 3,
    name: "Invite a Friend",
    reward: 0.005,
    timeRequired: 1,
    maxProgress: 1,
  },
  {
    id: 4,
    name: "Daily Login Streak",
    reward: 0.0005,
    timeRequired: 1,
    maxProgress: 7,
  },
  {
    id: 5,
    name: "Solve Crypto Puzzle",
    reward: 0.003,
    timeRequired: 15,
    maxProgress: 100,
  },
];

export default function BonusTasksPage() {
  const [taskProgress, setTaskProgress] = useState({});

  const handleStartTask = (taskId) => {
    setTaskProgress((prev) => ({
      ...prev,
      [taskId]: {
        startTime: Date.now(),
        progress: prev[taskId]?.progress || 0,
      },
    }));
  };

  const handleCompleteTask = (taskId) => {
    setTaskProgress((prev) => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        progress: bonusTasks.find((task) => task.id === taskId).maxProgress,
      },
    }));
    // Here you would typically call a function to award the user their reward
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-8 text-center">
          Bonus Tasks
        </h1>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/30 shadow-lg mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">
              Available Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Complete these tasks to earn extra ETH!
            </p>
            {bonusTasks.map((task) => (
              <Card
                key={task.id}
                className="bg-gray-800 border-yellow-600/20 mb-4 overflow-hidden"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-yellow-300">
                      {task.name}
                    </h3>
                    <span className="text-yellow-400 font-bold">
                      {task.reward} ETH
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{task.timeRequired} min</span>
                  </div>
                  <Progress
                    value={
                      ((taskProgress[task.id]?.progress || 0) /
                        task.maxProgress) *
                      100
                    }
                    className="h-2 mb-2"
                  />
                  <div className="flex justify-between items-center">
                    {taskProgress[task.id]?.progress === task.maxProgress ? (
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span>Completed</span>
                      </div>
                    ) : (
                      <Button
                        onClick={() => handleStartTask(task.id)}
                        className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-black"
                      >
                        Start Task
                      </Button>
                    )}
                    {taskProgress[task.id] &&
                      taskProgress[task.id].progress < task.maxProgress && (
                        <Button
                          onClick={() => handleCompleteTask(task.id)}
                          className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-black ml-2"
                        >
                          Complete
                        </Button>
                      )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
