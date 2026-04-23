import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import { AuthProvider } from "~/lib/guards/auth";
import { StoreProvider } from "~/components/ui/store";
import { ColorMode } from "~/components/ui/color-mode"
import { ErrorBoundary, ErrorBoundaryMessage, ErrorBoundaryResetButton } from "~/components/ui/error-boundary"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"
import AlertTriangleIcon from "lucide-solid/icons/alert-triangle"
import "./app.css";
import RootLayout from "./root-layout"
import { QueryClient, useQueryClient } from "~/components/ui/query-client"
import { OrderProvider } from "~/components/ui/order"


export default function App() {
  return (
    <MetaProvider>
  
      <ColorMode>
        <ErrorBoundary
          fallback={
            <Flex class="min-h-screen w-full flex-col items-center justify-center gap-6 bg-background p-8">
              <div class="rounded-full bg-destructive/10 p-6">
                <AlertTriangleIcon class="h-12 w-12 text-destructive" />
              </div>
              <Flex class="flex-col items-center gap-2 text-center">
                <Text variant="h2" class="font-bold">Something went wrong</Text>
                <Text variant="body1" class="text-muted-foreground max-w-md">
                  <ErrorBoundaryMessage />
                </Text>
              </Flex>
              <ErrorBoundaryResetButton class="px-8">
                Try Again
              </ErrorBoundaryResetButton>
            </Flex>
          }
        >
          <QueryClient>
            <StoreProvider publicId="st_vxha5vb4aobo">
              <AuthProvider>
                <OrderProvider>
                  <Router
                    root={RootLayout}
                  >
                    <FileRoutes />
                  </Router>
                </OrderProvider>
              </AuthProvider>
            </StoreProvider>
          </QueryClient>
        </ErrorBoundary>
      </ColorMode>
      <div>Change test one and webhooks </div>
    </MetaProvider>
  );
}
