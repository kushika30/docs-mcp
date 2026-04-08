# 🗺️ Store Locator

## Overview

This custom action leverages Open Street Maps to find locations of a given brand nearby a given address.

The function takes in a store name, a city and a state, and returns a store location within those parameters.

## Create and Host Function

1. Create a new public function
2. Add axios version ^1.4.0 as a dependency.
3. Add code to function

```
const axios = require("axios");

exports.handler = async function (context, event, callback) {
    const {chainName, city, state} = event;
    let radius = 10000; // Start with 10 km search radius
    const maxRadius = 100000; // Max radius 100 km
    console.log(chainName);
    console.log(city);
    console.log(state);
    try {
        // Step 1: Get City Coordinates (with state)
        const geoResponse = await axios.get("https://nominatim.openstreetmap.org/search", {
            params: { q: `${city}, ${state}`, format: "json", limit: 1 } // Include state in the query
        });

        if (geoResponse.data.length === 0) {
            return callback(null, { success: false, error: "City and state not found." });
        }

        const cityLat = parseFloat(geoResponse.data[0].lat);
        const cityLon = parseFloat(geoResponse.data[0].lon);

        let closestStore = null;

        // Step 2: Search within the city before expanding (with state)
        const cityOverpassQuery = `
        [out:json];
        area["name"="${city}"]["admin_level"="8"]["addr:state"="${state}"]->.searchArea;
        (
          node(area.searchArea)["shop"="supermarket"]["brand"="${chainName}"];
          node(area.searchArea)["shop"="department_store"]["brand"="${chainName}"];
          way(area.searchArea)["shop"="supermarket"]["brand"="${chainName}"];
          way(area.searchArea)["shop"="department_store"]["brand"="${chainName}"];
        );
        out center;
        `;

        const overpassUrl = "https://overpass-api.de/api/interpreter";
        let storeResponse = await axios.get(overpassUrl, { params: { data: cityOverpassQuery } });

        let stores = storeResponse.data.elements.map(element => {
            let storeLat = element.lat || (element.center ? element.center.lat : null);
            let storeLon = element.lon || (element.center ? element.center.lon : null);
            let storeName = element.tags?.name || chainName;
            let storeAddress = `${element.tags?.["addr:street"] || "Unknown Street"}, ${element.tags?.["addr:city"] || city}, ${element.tags?.["addr:state"] || state}`;

            return storeLat && storeLon ? {
                lat: storeLat,
                lon: storeLon,
                name: storeName,
                address: storeAddress
            } : null;
        }).filter(store => store !== null);

        // If no stores found in the city, expand search
        while (stores.length === 0 && radius <= maxRadius) {
            console.log(`Expanding search radius to ${radius / 1000} km...`);

            const overpassQuery = `
            [out:json];
            (
              node["shop"="supermarket"]["brand"="${chainName}"](around:${radius},${cityLat},${cityLon});
              node["shop"="department_store"]["brand"="${chainName}"](around:${radius},${cityLat},${cityLon});
              way["shop"="supermarket"]["brand"="${chainName}"](around:${radius},${cityLat},${cityLon});
              way["shop"="department_store"]["brand"="${chainName}"](around:${radius},${cityLat},${cityLon});
            );
            out center;
            `;

            storeResponse = await axios.get(overpassUrl, { params: { data: overpassQuery } });

            stores = storeResponse.data.elements.map(element => {
                let storeLat = element.lat || (element.center ? element.center.lat : null);
                let storeLon = element.lon || (element.center ? element.center.lon : null);
                let storeName = element.tags?.name || chainName;
                let storeAddress = `${element.tags?.["addr:street"] || "Unknown Street"}, ${element.tags?.["addr:city"] || city}, ${element.tags?.["addr:state"] || state}`;

                return storeLat && storeLon ? {
                    lat: storeLat,
                    lon: storeLon,
                    name: storeName,
                    address: storeAddress
                } : null;
            }).filter(store => store !== null);

            radius *= 2; // Expand search radius
        }

        // Step 3: Find the Closest Store
        if (stores.length > 0) {
            const toRadians = (degrees) => degrees * (Math.PI / 180);

            const haversineDistance = (lat1, lon1, lat2, lon2) => {
                const R = 6371; // Radius of Earth in km
                const dLat = toRadians(lat2 - lat1);
                const dLon = toRadians(lon2 - lon1);
                const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                          Math.sin(dLon / 2) * Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return R * c; // Distance in km
            };

            closestStore = stores.reduce((prev, curr) => {
                const prevDist = haversineDistance(cityLat, cityLon, prev.lat, prev.lon);
                const currDist = haversineDistance(cityLat, cityLon, curr.lat, curr.lon);
                return currDist < prevDist ? curr : prev;
            });
        }

        // Return closest store or failure
        if (closestStore) {
            return callback(null, {
                success: true,
                city: city,
                state: state, // return state
                chain_name: chainName,
                closest_store: {
                    name: closestStore.name,
                    address: closestStore.address,
                    lat: closestStore.lat,
                    lon: closestStore.lon
                },
                search_radius_km: radius / 1000
            });
        } else {
            return callback(null, { success: false, message: "No stores found within 100 km." });
        }

    } catch (error) {
        console.error("Error:", error);
        return callback(null, { success: false, error: "Failed to fetch data." });
    }
};
```

## Create Custom Action in Regal AI Agent

In your AI Agent in the Regal builder, click New Action > Custom Action.

When creating a Custom Action, you’ll provide:

- **Name:** get*store* locations
- **Description:** When the caller asks to find a store, you have to ask them for their city and state.
- **Endpoint:** Add the endpoint to your function from above
- **AI Variables:** Define AI Variables for city and state (and chain name if you need):
  - **Name:** city **Data type:** String **Description:** The city the user says they are located in
  - **Name:** state **Data type:** String **Description:** The state the user says they are located in
- **Payload**:

JSON

```
{
  "chainName": "Walmart",
  "city": "{{variables.city}}",  
  "state": "{{variables.state}}",  
}
```

> ## 👍
>
> Contact Attributes or AI Variables
>
> The chain name, city and state can be collected in different ways. In the example above we assume the chain is fixed, but that can be an AI variable by asking the customer what store or type of store they are looking for. Similarly city and state could be something you already have on the contact profile, in which case you would not need to define AI variables for them and instead could pass them through as {{contact.address.city}} and {{contact.address.state}}

## Update Agent Prompt

You can prompt your agent when to invoke the action. For example;

> When the customer asks for a nearby store, ask them what city and state they are in.
>
> - If the customer provides a city and state, call function get\_store\_locations

## Extending This Custom Action

This function can be easily modified / extended to e.g.,:

- Take in a specific address
- Take in a description of a type of store instead of a brand name e.g., "auto repair shop"
- Return a list of nearby locations, ordered by nearest to farthest

Updated 10 months ago

---
