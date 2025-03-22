import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PiPersonSimpleSwimBold, PiPersonSimpleHikeBold } from "react-icons/pi";
import { tours } from "@/data/constants";
import QuoteDrawer from "./QuoteDrawer";

export default function TourTabs({ tourId }: { tourId: number }) {
  const tour = tours.find((t) => t.id === tourId);

  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="flex flex-row gap-8">
        <TabsList className="relative w-[45%] bg-white mx-50">
          <TabsTrigger
            value="overview"
            className="cursor-pointer hover:bg-gray-200"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="bring"
            className="cursor-pointer hover:bg-gray-200"
          >
            What to Bring
          </TabsTrigger>
          <TabsTrigger value="FAQ" className="cursor-pointer hover:bg-gray-200">
            FAQ's
          </TabsTrigger>
        </TabsList>
        <QuoteDrawer tourDestination={tour?.name as string} />
      </div>
      <Separator className="border-t-2 border-gray-200 mt-[-8px]" />
      <TabsContent value="overview">
        <Card className="mx-50 my-6 pl-4">
          <CardHeader>
            <CardTitle className="text-4xl">Dunn's River Falls</CardTitle>
            <Separator className="w-140 border-t-1 border-black" />
            <CardDescription className="text-black fspace-y-6 flex flex-wrap w-140">
              <div className="flex-shrink-0 flex gap-2 flex-row w-[50%]">
                <PiPersonSimpleSwimBold className="text-3xl" />
                <p className="text-lg pt-2">Swimming</p>
              </div>
              <div className="flex-shrink-0 flex gap-2 flex-row w-[50%]">
                <PiPersonSimpleHikeBold className="text-3xl" />
                <p className="text-lg pt-2">Waterfall Climbing</p>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-25">
            <p className="w-140">{tour?.overview}</p>
            <div className="w-140 h-100 bg-yellow-400">Add Embed Map Api</div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="bring">
        <Card className="mx-50 my-6 pl-4 h-160">
          <CardHeader>
            <CardTitle className="text-4xl">What to Bring?</CardTitle>
            <Separator className="w-140 border-t-1 border-black" />
          </CardHeader>
          <CardContent className="flex flex-row gap-25">
            <p className="w-140 space-y-4 text-2xl">
              {tour?.itemsToBring.map((item, index) => (
                <span key={index} className="block">
                  • {item}
                </span>
              ))}
            </p>
            <div className="w-140 h-100 bg-yellow-400 translate-y-[40px]">
              Add Embed Map Api
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="FAQ">
        <Card className="mx-50 my-6 pl-4 h-160">
          <CardHeader>
            <CardTitle className="text-4xl">
              Frequently Asked Questions
            </CardTitle>
            <Separator className="w-140 border-t-1 border-black" />
          </CardHeader>
          <CardContent className="flex flex-row gap-25">
            <Accordion
              type="single"
              collapsible
              className="w-140 space-y-4 text-lg"
            >
              {tour?.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="w-140 h-100 bg-yellow-400 translate-y-[40px]">
              Add Embed Map Api
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
