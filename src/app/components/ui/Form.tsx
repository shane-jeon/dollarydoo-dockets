"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  merchantName: z.string().min(2).max(50),
  cost: z.number(),
  descriptor: z.string().min(2).max(50),
  expenseCategory: z.string(),
  processDate: z.date({
    required_error: "A date of processed transaction is required.",
  }),
});

export function ExpenseForm() {
  // defining form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      merchantName: "",
      cost: 1.0,
      descriptor: "",
      expenseCategory: "",
    },
  });

  // define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });

    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="merchantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Merchant Name</FormLabel>
              <FormControl>
                <Input placeholder="In-N-Out" {...field} />
              </FormControl>
              <FormDescription>THIS IS A FORM DESCRIPTION</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cost</FormLabel>
              <FormControl>
                <Input placeholder="$4.90" {...field} />
              </FormControl>
              <FormDescription>THIS IS THE COST</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descriptor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense Description</FormLabel>
              <FormControl>
                <Input placeholder="Double-Double Burger (lunch)" {...field} />
              </FormControl>
              <FormDescription>Expense Description</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expenseCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense Category</FormLabel>
              <FormControl>
                {/* <Input placeholder="category placeholder" {...field} /> */}
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select expense category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food: Takeout & Dining</SelectItem>
                    {/* iterate through list */}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>THIS IS THE CATEGORY</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="processDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Process Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}>
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
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Choose the date when transaction was processed by the bank.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// "use client";

// import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast";

// export function ToastWithTitle() {
//   const { toast } = useToast();

//   return (
//     <Button
//       variant="outline"
//       onClick={() => {
//         toast({
//           title: "Uh oh! Something went wrong.",
//           description: "There was a problem with your request.",
//         });
//         console.log("HELLO WORLD");
//       }}>
//       Show Toast
//     </Button>
//   );
// }

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";

// const formSchema = z.object({
//   merchantName: z.string().min(3, {
//     message: "merchantName must be at least 3 characters.",
//   }),
//   amount: z.number().gt(0.01),
//   description: z.string().min(3, {
//     message: "description must be at least 3 characters",
//   }),
//   expenseCategory: z
//     .string({
//       required_error: "Please select an expense category",
//     })
//     .includes("expenseCategory"),
// });

// export function ProfileForm() {
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       merchantName: "",
//       amount: 3.44,
//       description: "",
//       expenseCategory: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log("FORM SUBMITTED");
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//         </pre>
//       ),
//     });
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(`VALUES: ${values}`);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="merchantName"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Merchant Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="In-N-Out" {...field} />
//               </FormControl>
//               {/* <FormDescription>This is who took your moneys.</FormDescription> */}
//               <FormMessage />
//               <FormLabel>Amount</FormLabel>
//               <FormControl>
//                 <Input placeholder="$1.00" />
//               </FormControl>
//               {/* <FormDescription>This is how much you spent</FormDescription> */}
//               <FormLabel>Expense Description</FormLabel>
//               <FormControl>
//                 <Input placeholder="Double-Double Burger (lunch)" />
//               </FormControl>
//               <FormLabel>Expense Category</FormLabel>
//               <Select defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select expense category" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="food">Food: Takeout & Dining</SelectItem>
//                   <SelectItem value="credit-card">
//                     Credit Card Payments
//                   </SelectItem>
//                   <SelectItem value="savings">Savings</SelectItem>
//                 </SelectContent>
//               </Select>
//               {/* <FormDescription>
//                 Add new expense category if not available
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button onClick={form.handleSubmit(onSubmit)} type="submit">
//           Submit
//         </Button>
//       </form>
//     </Form>
//   );
// }
