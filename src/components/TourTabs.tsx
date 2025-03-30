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
import {
  PiPersonSimpleSwimBold,
  PiPersonSimpleHikeBold,
  PiCheckCircleFill,
} from "react-icons/pi";
import QuoteDrawer from "./QuoteDrawer";
import { useState, useEffect } from "react";
import Hover from "./Hover";
import { AirportTransfer, Tour } from "@/data/interfaces";

interface TourTabsProps {
  excursion: Tour | AirportTransfer;
}
export default function TourTabs({ excursion }: TourTabsProps) {
  const tour = excursion;

  const [mapIframeUrl, setMapIframeUrl] = useState("");

  // Use useEffect to set the map iframe URL only once
  useEffect(() => {
    const fetchMapUrl = async () => {
      const response = await fetch(`/api/map?address=${tour?.address}`);
      const data = await response.json();
      setMapIframeUrl(data.url);
    };

    fetchMapUrl();
  }, [tour?.address]);

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
      <Hover color="#fde047" delay={0.2} size={10}>
        <TabsContent value="overview">
          <Card className="mx-50 my-6 pl-4">
            <CardHeader>
              <CardTitle className="text-4xl">{tour?.name}</CardTitle>
              <Separator className="w-140 border-t-1 border-black" />
              {/*TODO: Edit card description to take icons and text from tour object. Use number of elems to set width
                          w-1/2 or w-1/3. Probably make maximum 3*/}
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
              {mapIframeUrl && (
                <iframe
                  className="w-140 h-100 rounded-md"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={mapIframeUrl}
                ></iframe>
              )}
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
                  <span key={index} className="flex items-center gap-2">
                    <PiCheckCircleFill className="text-green-600" /> {item}
                  </span>
                ))}
              </p>
              {mapIframeUrl && (
                <iframe
                  className="w-140 h-100 rounded-md translate-y-[40px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={mapIframeUrl}
                ></iframe>
              )}
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

              {mapIframeUrl && (
                <iframe
                  className="w-140 h-100 rounded-md translate-y-[40px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={mapIframeUrl}
                ></iframe>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Hover>
    </Tabs>
  );
}
