;
import { getServerSecret } from "~/server-functions";

export const Route = createFileRoute({
  component: Home,
  loader: async () => {
    const secret = await getServerSecret();
    return { secret };
  },
});

function Home() {
  const data = Route.useLoaderData();
  return (
    <div className="p-2">
      <h3>Welcome Home!!! secret: {data.secret}</h3>
    </div>
  );
}
