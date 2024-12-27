"use client";

import {
  XCircle,
  AlertCircle,
  RefreshCcw,
  Home,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { isRouteErrorResponse } from "react-router";

interface ErrorBoundaryProps {
  error: Error & {
    status?: number;
    statusText?: string;
  };
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  const [showStack, setShowStack] = useState(false);

  let icon = <AlertCircle className="h-12 w-12 text-destructive" />;
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      icon = <XCircle className="h-12 w-12 text-destructive" />;
      message = "404 - Page Not Found";
      details = "The requested page could not be found.";
    } else {
      message = `Error ${error.status}`;
      details = error.statusText || details;
    }
  } else if (process.env.NODE_ENV === "development" && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-6">
          {/* Icon and Message */}
          <div className="flex flex-col items-center gap-4">
            {icon}
            <h1 className="text-4xl font-bold tracking-tight">{message}</h1>
          </div>

          {/* Error Details */}
          <p className="text-muted-foreground text-lg">{details}</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="gap-2"
            >
              <RefreshCcw className="h-4 w-4" />
              Try Again
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Button>
          </div>
        </div>

        {/* Stack Trace (Development Only) */}
        {stack && (
          <div className="rounded-lg border bg-muted/40">
            <button
              onClick={() => setShowStack(!showStack)}
              className="w-full px-4 py-2 flex items-center justify-between text-sm hover:bg-muted/60 transition-colors"
            >
              <span className="font-mono">Stack Trace</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showStack ? "rotate-180" : ""
                }`}
              />
            </button>
            {showStack && (
              <div className="p-4 border-t">
                <pre className="overflow-x-auto text-sm">
                  <code className="text-destructive">{stack}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Support Information */}
        <div className="text-center text-sm text-muted-foreground">
          <p>If this problem persists, please contact our support team.</p>
          <p>Error ID: {crypto.randomUUID().split("-")[0]}</p>
        </div>
      </div>
    </main>
  );
}
