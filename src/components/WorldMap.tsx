import Image from "next/image";
import DottedMap from "dotted-map";

// Places come from Dr. Newton on a call with Caleb, 2026-11-17 (students in
// India, the Netherlands, Australia, Congo and the US; the school started
// with a friend in Bulgaria) and from each teacher's bio in lib/content.ts.
const studentPlaces = [
  { name: "United States", lat: 36, lng: -95 },
  { name: "India", lat: 21, lng: 78 },
  { name: "Netherlands", lat: 52.2, lng: 5.3 },
  { name: "Australia", lat: -27, lng: 135 },
  { name: "Congo", lat: -4.3, lng: 15.3 },
];

export type MapTeacher = {
  name: string;
  image: string;
  place: string;
  lat: number;
  lng: number;
};

// The SVG string comes from dotted-map drawing a fixed land mask, never from
// user input, so injecting it is safe.
const INK = "#1b1a17";

export function WorldMap({ teachers }: { teachers: MapTeacher[] }) {
  const map = new DottedMap({ height: 60, grid: "diagonal" });
  const { width, height } = map.image;
  const svg = map.getSVG({
    radius: 0.22,
    color: "rgba(27,26,23,0.22)",
    shape: "circle",
    backgroundColor: "transparent",
  });
  const at = (lat: number, lng: number) => {
    const p = map.getPin({ lat, lng });
    return { left: `${(p.x / width) * 100}%`, top: `${(p.y / height) * 100}%` };
  };

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 [&>svg]:h-full [&>svg]:w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {studentPlaces.map((s) => (
        <span
          key={s.name}
          title={s.name}
          style={at(s.lat, s.lng)}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <span className="absolute -inset-2 animate-ping rounded-full bg-gold/40 motion-reduce:hidden" />
          <span className="relative block h-3 w-3 rounded-full border-2 border-paper bg-gold md:h-3.5 md:w-3.5" />
        </span>
      ))}
      {teachers.map((t) => (
        <figure
          key={t.name}
          style={at(t.lat, t.lng)}
          className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 bg-paper sm:h-11 sm:w-11 md:h-12 md:w-12"
            style={{ borderColor: INK }}
          >
            <Image
              src={t.image}
              alt={t.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <figcaption className="pointer-events-none absolute left-1/2 top-full mt-1.5 hidden -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-1 text-[13px] text-on-dark group-hover:block">
            {t.place}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
