"use client";
import { useState } from "react"
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 假设不同日期有不同单词列表（这里是模拟数据）
type Word = { word: string; meaning: string };
const wordData: Record<string, Word[]> = {
  "2025-06-30": [
    { word: "book", meaning: "a set of written pages" },
  ],
  "2025-07-01": [
    { word: "cat", meaning: "a small domesticated carnivorous mammal" },
    { word: "dog", meaning: "a domesticated canid" },
  ]
};

export default function WordCalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = format(selectedDate, "yyyy-MM-dd");
  const wordList = wordData[formattedDate] || [];

  return (
    <div className="flex flex-col p-4 gap-4 max-w-xl mx-auto">
      {/* 工具栏 */}
      <div className="flex items-center justify-between p-2 border-b">
        <h1 className="text-xl font-semibold">Word Calendar</h1>
        <Button variant="outline">Add Word</Button>
      </div>

      {/* 日历 */}
      <Card>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      {/* 单词列表 */}
      <Card>
        <CardContent className="flex flex-col gap-2 py-4">
          {wordList.length === 0 ? (
            <p className="text-sm text-muted-foreground">No words for this day.</p>
          ) : (
            wordList.map((item, idx) => (
              <div key={idx} className="border rounded-lg p-2">
                <div className="font-medium">{item.word}</div>
                <div className="text-sm text-muted-foreground">{item.meaning}</div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
