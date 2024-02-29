"use client";

import { useState } from "react";
import * as React from "react";
import { format } from "date-fns";

import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ReservationForm = () => {
  const [date, setDate] = React.useState();
  
  return (
    <form>
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] ">
          <div>
            <Label htmlFor="firstname">first name</Label>
            <Input id="firstname" type="text" />
          </div>
          <div>
            <Label htmlFor="lastname">last name</Label>
            <Input id="lastname" type="text" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {/* calendar */}
          <div>
            <label>date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn("w-full justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
