import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-primary group-[.toaster]:border-border group-[.toaster]:p-4 group-[.toaster]:shadow-none [&[data-sonner-toast][data-styled]_[data-button]]:h-9 [&[data-sonner-toast][data-styled]_[data-button]]:min-w-16 [&[data-sonner-toast][data-styled]_[data-button]]:text-body13-semibold [&[data-sonner-toast][data-styled]_[data-button]]:justify-center [&[data-sonner-toast][data-styled]_[data-action]]:bg-primary [&[data-sonner-toast][data-styled]_[data-action]]:text-primary-foreground [&[data-sonner-toast][data-styled]_[data-action]]:focus:bg-neutral-700 [&[data-sonner-toast][data-styled]_[data-action]:hover]:bg-neutral-700 [&[data-sonner-toast][data-styled]_[data-action]:focus]:bg-neutral-700 [&[data-sonner-toast][data-styled]_[data-action]:active]:bg-neutral-700 [&[data-sonner-toast][data-styled]_[data-cancel]]:border [&[data-sonner-toast][data-styled]_[data-cancel]]:border-solid [&[data-sonner-toast][data-styled]_[data-cancel]]:border-input [&[data-sonner-toast][data-styled]_[data-cancel]]:bg-secondary [&[data-sonner-toast][data-styled]_[data-cancel]]:text-secondary-foreground [&[data-sonner-toast][data-styled]_[data-cancel]:hover]:bg-accent [&[data-sonner-toast][data-styled]_[data-cancel]:focus]:bg-accent",
          content: "group-[.toast]:gap-2 group-[.toast]:grow",
          title: "group-[.toast]:text-primary group-[.toast]:text-subtle",
          description:
            "group-[.toast]:text-neutral-600 group-[.toast]:text-body13",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
