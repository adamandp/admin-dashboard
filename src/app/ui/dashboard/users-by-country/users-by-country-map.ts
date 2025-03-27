import { RefObject } from "react";
import maplibregl, { LngLat } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Coordinates, CountryData } from "@/lib/definitions/dashboard";

const size = 200;
const pulsingDot = (map: maplibregl.Map) => ({
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),
  context: null as CanvasRenderingContext2D | null,

  onAdd() {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },

  render() {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (size / 2) * 0.3;
    const outerRadius = (size / 2) * 0.7 * t + radius;
    const context = this.context;

    context?.clearRect(0, 0, this.width, this.height);
    context?.beginPath();
    context?.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context!.fillStyle = `rgba(255, 200, 200,${1 - t})`;
    context?.fill();

    context?.beginPath();
    context?.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    const gradient = context?.createLinearGradient(
      0,
      0,
      this.width,
      this.height
    );
    gradient?.addColorStop(0, "rgb(37, 99, 235)");
    gradient?.addColorStop(1, "rgb(139, 92, 246)");
    context!.fillStyle = gradient || "rgb(139, 92, 246)";
    context!.strokeStyle = "rgb(139, 92, 246)";
    context!.lineWidth = 2 + 4 * (1 - t);
    context?.fill();
    context?.stroke();
    this.data = new Uint8Array(
      context!.getImageData(0, 0, this.width, this.height).data
    );
    map.triggerRepaint();
    return true;
  },
});

export const map = (
  container: RefObject<HTMLDivElement | null>,
  data: CountryData[]
) => {
  if (!container.current) return null;
  const map = new maplibregl.Map({
    container: container.current,
    style: `${process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}`,
    center: [113.9213, -5.5], // Koordinat lebih ke selatan untuk menampilkan Jawa

    zoom: 5,
  });
  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
  });
  let currentFeatureCoordinates: number[] | undefined;

  // PulseAnimation(map, data);
  map.on("load", () => {
    map.addImage("pulsing-dot", pulsingDot(map), { pixelRatio: 2 });
    map.addSource("points", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: data.map((country) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [country.coordinates.lng, country.coordinates.lat],
          },
          properties: {
            name: country.name,
            users: country.users,
            percentage: country.percentage,
          },
        })),
      },
    });

    map.addLayer({
      id: "points",
      type: "symbol",
      source: "points",
      layout: {
        "icon-image": "pulsing-dot",
      },
    });

    map.on("mousemove", "points", (e) => {
      if (e.features?.[0].geometry.type === "Point") {
        const featureCoordinates = e.features?.[0].geometry.coordinates;
        if (currentFeatureCoordinates !== featureCoordinates) {
          currentFeatureCoordinates = featureCoordinates;

          map.getCanvas().style.cursor = "pointer";

          const coordinates = e.features?.[0].geometry.coordinates.slice();
          const properties = e.features?.[0].properties;

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          popup
            .setLngLat(new LngLat(coordinates[0], coordinates[1]))
            .setHTML(
              `
            <div>
              <p>${properties?.name}</p>
              <div class="data">
                <div>Percentage</div>
                <div>: ${properties?.users.toLocaleString()}</div>
                <div>Users</div>
                <div>: ${properties?.percentage}%</div>
              </div>
            </div>
            `
            )
            .addTo(map);
        }
      }
    });

    map.on("mouseleave", "points", () => {
      currentFeatureCoordinates = undefined;
      map.getCanvas().style.cursor = "";
      popup.remove();
    });
  });

  return map;
};
