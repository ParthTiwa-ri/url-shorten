import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Boost from "./Components/Boost";
import Detail from "./Components/Detail";
import Hero from "./Components/Hero";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className=" overflow-scroll">
        <Hero />
        <Detail />
        <Boost />
      </div>
    </QueryClientProvider>
  );
}
