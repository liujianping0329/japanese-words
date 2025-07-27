"use client";
import { useEffect ,useState } from "react"
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 假设不同日期有不同单词列表（这里是模拟数据）
type Word = { word: string; meaning: string };

export default function WordCalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [wordList, setWordList] = useState<Word[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedDateForAPI  = format(selectedDate, "yyyyMMdd");

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://21moaftdh6.execute-api.ap-northeast-1.amazonaws.com/default/word-by-date?date=${formattedDateForAPI}`);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        setWordList(Array.isArray(data) ? data : [data]); // 防止单个对象返回时出错
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, [formattedDateForAPI]);

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
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : error ? (
            <p className="text-sm text-red-500">Error: {error}</p>
          ) : wordList?.length === 0 ? (
            <p className="text-sm text-muted-foreground">No words for this day.</p>
          ) : (
            wordList?.map((item, idx) => (
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
