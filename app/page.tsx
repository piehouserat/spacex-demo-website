import { ShipListing } from "@/components/ShipListing";
import apiCalls from "@/graphql";
import { getClient } from "@/lib/ApolloClient";
import type {
  ShipMissingAttributesQuery,
  ShipMissingAttributesQueryVariables,
  ShipsQuery,
  ShipsQueryVariables,
} from "@/util/types/graphql";

export default async function Home() {
  const shipsQueryVariables: ShipsQueryVariables = {
    limit: 50,
    offset: 0,
  };

  const missingAttrsQueryVariables: ShipMissingAttributesQueryVariables = {
    limit: 50,
    offset: 0,
    attributes: [
      "name",
      "image",
      "active",
      "class",
      "year_built",
      "home_port",
      "type",
    ],
  };

  const { data: shipsData } = await getClient().query<ShipsQuery>({
    query: apiCalls.queries.ships,
    variables: shipsQueryVariables,
  });

  const { data: missingAttributesData } =
    await getClient().query<ShipMissingAttributesQuery>({
      query: apiCalls.queries.shipMissingAttributes,
      variables: missingAttrsQueryVariables,
    });

  if (!shipsData.ships) {
    return "No Ships found";
  }

  return (
    <main className="flex justify-center min-h-screen p-14">
      <div className="w-full max-w-7xl justify-between flex flex-col gap-2">
        <ShipListing
          ships={shipsData.ships}
          missingAttributesData={missingAttributesData.shipMissingAttributes}
        />
      </div>
    </main>
  );
}
