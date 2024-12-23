import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UILayout from "./components";
import ModalManager from "~/components/ui/modal/ModalManager";
import { Toaster } from "~/components/ui/toaster";
import { queryClient } from "~/api/react-query";
import { Outlet, useLoaderData } from "react-router";
import type { LoaderReturnType } from "~/@types/LoaderReturnType";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UILayout>
        <Outlet />
      </UILayout>
      <Toaster />
      <ModalManager />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default GlobalLayout;
