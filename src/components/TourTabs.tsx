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
import { PiCheckCircleFill } from "react-icons/pi";
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
      <div className="grid grid-cols-1 place-items-center gap-2 px-4 md:flex md:flex-wrap md:items-center md:justify-between">
        <TabsList className="flex-wrap bg-white">
          <TabsTrigger
            value="overview"
            className="cursor-pointer hover:bg-gray-200 md:w-[250px] w-[100px]"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="bring"
            className="cursor-pointer hover:bg-gray-200 md:w-[250px] w-[100px]"
          >
            What to Bring
          </TabsTrigger>
          <TabsTrigger
            value="FAQ"
            className="cursor-pointer hover:bg-gray-200 md:w-[250px] w-[100px]"
          >
            FAQ&apos;s
          </TabsTrigger>
        </TabsList>
        <div className="w-full lg:w-auto flex justify-center">
          <QuoteDrawer tourDestination={tour?.name as string} />
        </div>
      </div>

      <Separator className="border-t-2 border-gray-200 mt-4" />

      <Hover color="#fde047" delay={0.2} size={10}>
        {/* --- OVERVIEW TAB --- */}
        <TabsContent value="overview">
          <Card className="my-6 p-2 w-full max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl">
                {tour?.name}
              </CardTitle>
              <Separator className="my-2 border-t border-black" />
              <CardDescription className="text-black flex flex-wrap gap-4">
                {tour?.activities?.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 w-full md:w-[45%]"
                    >
                      <Icon className="text-2xl md:text-3xl" />
                      <p className="text-lg">{activity.label}</p>
                    </div>
                  );
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row gap-6">
              <p className="w-full lg:w-1/2">{tour?.overview}</p>
              {mapIframeUrl && (
                <iframe
                  className="w-full lg:w-1/2 h-64 md:h-80 rounded-md"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={mapIframeUrl}
                ></iframe>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- WHAT TO BRING TAB --- */}
        <TabsContent value="bring">
          <Card className="my-6 p-4 w-full max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl">
                What to Bring?
              </CardTitle>
              <Separator className="my-2 border-t border-black" />
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2 space-y-4 text-lg">
                {tour?.itemsToBring.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <PiCheckCircleFill className="text-green-600" /> {item}
                  </div>
                ))}
              </div>
              {mapIframeUrl && (
                <iframe
                  className="w-full lg:w-1/2 h-64 md:h-80 rounded-md"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={mapIframeUrl}
                ></iframe>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- FAQ TAB --- */}
        <TabsContent value="FAQ">
          <Card className="my-6 p-4 w-full max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl">
                Frequently Asked Questions
              </CardTitle>
              <Separator className="my-2 border-t border-black" />
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row gap-6">
              <Accordion
                type="single"
                collapsible
                className="w-full lg:w-1/2 space-y-4 text-lg"
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
                  className="w-full lg:w-1/2 h-64 md:h-80 rounded-md"
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
