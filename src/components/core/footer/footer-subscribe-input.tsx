"use client"
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFooterSubscribe } from "@/hooks/use-footer-subscribe";
import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";

const FooterSubscribeInput = ({ className }: { className?: string }) => {
  const { onSubmit, isLoading, isSuccess, ...form } = useFooterSubscribe()

  return (
    <div className={cn("flex-1 w-full relative pl-2", className)}>
      <Form {...form}>
        <div className="relative max-w-[420px] w-full lg:w-auto">
          <MailIcon
            className="h-5 w-5 stroke-1 absolute left-3 top-3 md:top-4 text-[#4C3737B2] z-10"
            aria-hidden="true"
          />

          <form
            onSubmit={(e) => {
              onSubmit(e)
            }}
            noValidate
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type="email"
                        placeholder={"Correo electrónico"}
                        aria-describedby="subscribe-message"
                        disabled={isLoading}
                        className={cn(
                          "pl-10 pr-[120px] py-3",
                          "lg:min-w-[18rem] h-10 md:h-12 xl:min-w-[25rem] !w-full",
                          "rounded-full glass-glow bg-sidebar-primary-foreground",
                        )}
                      />
                      <Button
                        size="sm"
                        variant="default"
                        disabled={isLoading}
                        className="cursor-pointer !bg-warning text-white absolute h-8 md:h-10 text-sm px-4 right-1 top-1 md:top-1 bg-orange-dark hover:bg-orange-dark/80 min-w-[90px] rounded-full z-10"
                        type="submit"
                      >
                        {isLoading ? 'Enviando...' : 'Enviar'}
                      </Button>
                    </div>
                  </FormControl>
                  {isSuccess && (
                    <p className="pl-4 text-green-600 font-medium">
                      ¡Gracias por suscribirte! 🎉
                    </p>
                  )}
                  <FormMessage className="pl-4 text-red-500 font-medium" />
                </FormItem>
              )}
            />
          </form>
        </div>
      </Form>
    </div>
  )
}

export default FooterSubscribeInput
