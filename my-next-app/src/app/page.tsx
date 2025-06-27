import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WordCard() {
  return (
    <Card className="w-[345px] mx-auto mt-6">
      <CardHeader>
        <div className="w-full h-[140px] overflow-hidden rounded-md">
          <Image
            src="/placeholder.png"
            alt="apple"
            width={345}
            height={140}
            className="object-cover w-full h-full"
          />
        </div>
        <CardTitle className="text-lg mt-2">Apple</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600 space-y-1">
        <p>苹果，11111一s种常见水果。</p>
        <p>
          <strong>例句：</strong> She ate an apple for breakfast.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 justify-start">
        <Button size="sm">下一词</Button>
        <Button variant="outline" size="sm">
          加入收藏
        </Button>
      </CardFooter>
    </Card>
  );
}
