import { cn, costCalculator } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { resorts, pickupTimes, noOfPassengers } from "@/data/constants";
import { useState } from "react";

const FormSchema = z.object({
  resort: z.string({
    required_error: "Please select a pickup resort.",
  }),
  tourDestination: z
    .string({
      // required_error: "Please select a tour Destination.",
    })
    .optional(),
  pickupDate: z.date({
    required_error: "A pickup date is required.",
  }),
  passengerNum: z.string({
    required_error: "Please select number of passenegrs.",
  }),
  pickupTime: z.string({
    required_error: "Please select a pickup time.",
  }),
});

interface QuoteDrawerProps {
  tourDestination: string;
}

export default function QuoteDrawer({ tourDestination }: QuoteDrawerProps) {
  const [calculatedCost, setCalculatedCost] = useState("0.00");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      resort: "",
      passengerNum: "",
      pickupDate: undefined,
      pickupTime: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const cost = costCalculator(
      parseInt(data.passengerNum),
      data.resort,
      tourDestination,
      data.pickupTime
    );
    setCalculatedCost(cost);
  }
  const handleCancel = () => {
    form.reset();
    setCalculatedCost("0.00");
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="h-7 w-[250px] mt-1 bg-yellow-400 text-black text-lg text-bold border-2 border-black hover:border-yellow-400 hover:bg-black hover:text-yellow-400 cursor-pointer">
          Get Quote
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle>Cost Calculator (Approximate)</DrawerTitle>
            <DrawerDescription>
              Enter details then hit submit to get quote.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  USD {calculatedCost}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-15 h-[250px]">
            <Form {...form}>
              <form
                id="costForm"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex flex-wrap"
              >
                <div className="flex-shrink-0 w-[50%]">
                  <FormField
                    control={form.control}
                    name="resort"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resort/Hotel</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[240px]">
                              <SelectValue placeholder="Select pickup Hotel/Resort" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {resorts.map((resort) => (
                              <SelectItem key={resort} value={resort}>
                                {resort}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-shrink-0 w-[50%]">
                  <FormField
                    control={form.control}
                    name="tourDestination"
                    render={({ field }) => (
                      <FormItem className="justify-end">
                        <FormLabel>Destination</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={tourDestination}
                          disabled
                        >
                          <FormControl>
                            <SelectTrigger className="w-[240px]">
                              <SelectValue placeholder="Tour Destination" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={tourDestination}>
                              {tourDestination}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-shrink-0 w-[50%]">
                  <FormField
                    control={form.control}
                    name="passengerNum"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No. of Passengers</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[240px]">
                              <SelectValue placeholder="No. of Passengers" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {noOfPassengers.map((passengerNum) => (
                              <SelectItem
                                key={passengerNum}
                                value={passengerNum.toString()}
                              >
                                {passengerNum}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-shrink-0 w-[50%]">
                  <FormField
                    control={form.control}
                    name="pickupDate"
                    render={({ field }) => (
                      <FormItem className="justify-end">
                        <FormLabel>Tour date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-shrink-0 w-[50%]">
                  <FormField
                    control={form.control}
                    name="pickupTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pickup time</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[240px]">
                              <SelectValue placeholder="Select pickup time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {pickupTimes.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
          <DrawerFooter>
            <Button type="submit" form="costForm">
              Calculate Cost
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" form="costForm" onClick={handleCancel}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
